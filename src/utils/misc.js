export function convertRemToPixel(number) {
  return number * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
