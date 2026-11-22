import importlib.util
import io
import tarfile
import tempfile
import unittest
from pathlib import Path

module_path = Path(__file__).resolve().parents[1] / "infra/deploy/extract-release.py"
spec = importlib.util.spec_from_file_location("extract_release", module_path)
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
COMMIT = "a" * 40


class DeployArchiveTest(unittest.TestCase):
    def archive(self, directory, extra=None, marker=COMMIT, missing=None):
        filename = Path(directory) / "site.tar.gz"
        files = {name: b"page" for name in module.REQUIRED}
        files.update({"_next/static/app.js": b"asset",
                      ".deploy-commit": (marker + "\n").encode()})
        files.pop(missing, None)
        with tarfile.open(filename, "w:gz") as bundle:
            for name, content in files.items():
                info = tarfile.TarInfo("./" + name)
                info.size = len(content)
                bundle.addfile(info, io.BytesIO(content))
            if extra:
                bundle.addfile(extra, io.BytesIO(b"x" * extra.size))
        return filename

    def test_valid_export(self):
        with tempfile.TemporaryDirectory() as directory:
            target = Path(directory) / "release"
            module.extract_release(self.archive(directory), target, COMMIT)
            self.assertEqual((target / "index.html").read_bytes(), b"page")
            self.assertEqual((target / "_next/static/app.js").read_bytes(), b"asset")

    def test_rejects_unsafe_members_before_writing(self):
        cases = ["../outside", "/absolute", "src/page.jsx", ".github/workflows/x",
                 ".env.production", "index.html", "..\\outside"]
        for name in cases:
            with self.subTest(name=name), tempfile.TemporaryDirectory() as directory:
                member = tarfile.TarInfo(name)
                member.size = 1
                target = Path(directory) / "release"
                with self.assertRaises(ValueError):
                    module.extract_release(self.archive(directory, extra=member), target, COMMIT)
                self.assertFalse(target.exists())

    def test_rejects_links(self):
        for kind in [tarfile.SYMTYPE, tarfile.LNKTYPE]:
            with self.subTest(kind=kind), tempfile.TemporaryDirectory() as directory:
                member = tarfile.TarInfo("link")
                member.type = kind
                member.linkname = "/etc/passwd"
                with self.assertRaises(ValueError):
                    module.extract_release(self.archive(directory, extra=member),
                                           Path(directory) / "release", COMMIT)

    def test_rejects_wrong_commit_and_incomplete_build(self):
        for options in [{"marker": "b" * 40}, {"missing": "index.html"},
                        {"missing": "_next/static/app.js"}]:
            with self.subTest(options=options), tempfile.TemporaryDirectory() as directory:
                with self.assertRaises(ValueError):
                    module.extract_release(self.archive(directory, **options),
                                           Path(directory) / "release", COMMIT)

    def test_never_overwrites_an_existing_release(self):
        with tempfile.TemporaryDirectory() as directory:
            target = Path(directory) / "release"
            target.mkdir()
            (target / "index.html").write_text("existing")
            with self.assertRaises(FileExistsError):
                module.extract_release(self.archive(directory), target, COMMIT)
            self.assertEqual((target / "index.html").read_text(), "existing")


if __name__ == "__main__":
    unittest.main()
