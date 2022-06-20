function formatPadLeft(content, digits, padStr) {
  content = String(content)
  digits = digits || 2
  padStr = padStr || "0"
  return content.padStart(digits, padStr)
}