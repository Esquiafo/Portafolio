
export function Length(string) {
  return string.length
}

export function Slice(string, a,b) {
  return string.slice(parseInt(a), parseInt(b))
}
export function Substring(string, a,b) {
  return string.substring(parseInt(a), parseInt(b))
}

export function Replace(string,a, b) {
  return string.replace((a), (b))
}

export function ToLowerCase (string) {
  return string.toLowerCase()
}
export function ToUpperCase (string) {
  return string.toUpperCase()
}
export function Trim (string) {
  return string.trim()
}
export function PadStart (string,a,b) {
  return string.padStart(parseInt(a), b)
}
export function PadEnd (string,a,b) {
  return string.padEnd(parseInt(a), b)
}
export function CharAt (string,a) {
  return string.charAt(parseInt(a))
}
export function Split (string,a) {
  return string.split((a))
}
export function Concat (string,a) {
  return string.concat((a))
}