export default function hslToRgbString(hsl: string): string {
  // Regular expression to parse the HSL string
  const match = hsl.match(/^hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)$/);

  if (!match) {
    throw new Error("Invalid HSL color format");
  }

  // Extract HSL values from the match groups
  const [_, hStr, sStr, lStr] = match;

  // Convert to number and normalize
  const h = parseFloat(hStr);
  const s = parseFloat(sStr) / 100;
  const l = parseFloat(lStr) / 100;

  // Convert HSL to RGB
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0,
    g = 0,
    b = 0;

  if (h >= 0 && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h >= 60 && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h >= 180 && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h >= 240 && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (h >= 300 && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  const rRgb = Math.round((r + m) * 255);
  const gRgb = Math.round((g + m) * 255);
  const bRgb = Math.round((b + m) * 255);

  return `rgb(${rRgb}, ${gRgb}, ${bRgb})`;
}
