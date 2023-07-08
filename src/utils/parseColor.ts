interface Icolors {
  [key: string]: number
}

// export default ansiStyles;
const colors: Icolors = {
  black: 30,
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  magenta: 35,
  cyan: 36,
  white: 37,
  grey: 90,
  redBright: 91,
  greenBright: 92,
  yellowBright: 93,
  blueBright: 94,
  magentaBright: 95,
  cyanBright: 96,
  whiteBright: 97,
}


const rgbToAnsi256 = (red: number, green: number, blue: number): number => {
  if (red === green && green === blue) {
    if (red < 8) {
      return 16;
    }

    if (red > 248) {
      return 231;
    }

    return Math.round(((red - 8) / 247) * 24) + 232;
  }

  return 16
    + (36 * Math.round(red / 255 * 5))
    + (6 * Math.round(green / 255 * 5))
    + Math.round(blue / 255 * 5);
}

const ansi256ToAnsi = (code: number): number => {
  if (code < 8) {
    return 30 + code;
  }

  if (code < 16) {
    return 90 + (code - 8);
  }

  let red;
  let green;
  let blue;

  if (code >= 232) {
    red = (((code - 232) * 10) + 8) / 255;
    green = red;
    blue = red;
  } else {
    code -= 16;
    const remainder = code % 36;
    red = Math.floor(code / 36) / 5;
    green = Math.floor(remainder / 6) / 5;
    blue = (remainder % 6) / 5;
  }

  const value = Math.max(red, green, blue) * 2;

  if (value === 0) {
    return 30;
  }

  let result = 30 + ((Math.round(blue) << 2) | (Math.round(green) << 1) | Math.round(red));

  if (value === 2) {
    result += 60;
  }

  return result;
}


function hexToRgb(hex: string): number[] {
  let rgb: number[] = []
  if (hex.length < 5) {
    for (let i = 1; i < hex.length; i++) {
      rgb.push(parseInt('0x' + hex[i] + hex[i]))
    }
  } else {
    for (let i = 1; i < 7; i += 2) {
      rgb.push(parseInt('0x' + hex[i] + hex[i + 1]))
    }
  }
  return rgb
}

function parseColor(s: string, isBG: boolean = false): number {
  let code = isBG ? 10 : 0
  if (colors[s]) return colors[s] + code
  let r: number = 0, g: number = 0, b: number = 0
  if (/^rgb.*\)$/.test(s)) {
    const res: string[] = (s.match(/\((.*?)\)/) as string[])[1].split(',');
    [r, g, b] = res.map(item => parseInt(item))
  } else if (/^#[0-9a-fA-F]{3}|^#[0-9a-fA-F]{6}|^#[0-9a-fA-F]{8}/.test(s)) {
    [r, g, b] = hexToRgb(s)
  }
  return ansi256ToAnsi(rgbToAnsi256(r, g, b)) + code
}

export default parseColor
