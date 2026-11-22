export default function isOuterLink(url) {
  return /^http/.test(url)
}
