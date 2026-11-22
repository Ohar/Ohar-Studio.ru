#!/usr/bin/env python3
"""Validate a CI static-site archive before extracting into a fresh directory."""

import re
import shutil
import sys
import tarfile
from pathlib import Path, PurePosixPath

REQUIRED = {"index.html", "404.html", "portfolio/index.html", "cv/index.html"}
PRIVATE = {".git", ".github", "infra", "src", "tests", "node_modules",
           "AGENTS.md", "package.json", "yarn.lock"}


def extract_release(archive, destination, commit):
    if not re.fullmatch(r"[0-9a-f]{40}", commit):
        raise ValueError("Invalid commit SHA")
    destination = Path(destination)
    with tarfile.open(archive, "r:gz") as bundle:
        entries = {}
        size = 0
        for member in bundle.getmembers():
            path = PurePosixPath(member.name)
            if (path.is_absolute() or ".." in path.parts or "\\" in member.name
                    or not (member.isfile() or member.isdir())):
                raise ValueError("Unsafe archive member: " + member.name)
            name = str(path)
            if name == "." and member.isdir():
                continue
            if (not path.parts or path.parts[0] in PRIVATE
                    or any(part.startswith(".env") for part in path.parts)):
                raise ValueError("Non-public archive member: " + member.name)
            if name in entries:
                raise ValueError("Duplicate archive member: " + name)
            entries[name] = member
            size += member.size
        if len(entries) > 20000 or size > 256 * 1024 * 1024:
            raise ValueError("Build archive exceeds deployment limits")
        for name in REQUIRED | {".deploy-commit"}:
            if name not in entries or not entries[name].isfile() or entries[name].size == 0:
                raise ValueError("Missing build file: " + name)
        marker = bundle.extractfile(entries[".deploy-commit"]).read(128)
        if marker != (commit + "\n").encode("ascii"):
            raise ValueError("Build archive belongs to a different commit")
        if not any(name.startswith("_next/static/") and item.isfile()
                   for name, item in entries.items()):
            raise ValueError("Missing Next.js assets")

        # The caller supplies a fresh directory under its root-owned staging area.
        destination.mkdir(mode=0o755, parents=False, exist_ok=False)
        for name, member in entries.items():
            target = destination.joinpath(*PurePosixPath(name).parts)
            if member.isdir():
                target.mkdir(mode=0o755, parents=True, exist_ok=True)
            else:
                target.parent.mkdir(mode=0o755, parents=True, exist_ok=True)
                with bundle.extractfile(member) as source, target.open("xb") as output:
                    shutil.copyfileobj(source, output)
                target.chmod(0o644)


if __name__ == "__main__":
    if len(sys.argv) != 4:
        raise SystemExit("Usage: extract-release.py <archive> <new-directory> <commit-sha>")
    extract_release(*sys.argv[1:])
