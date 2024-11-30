export const luhnChecksum = (code: string) => {
  const length = code.length;
  const parity = length % 2;
  let sum = 0;

  for (let i = length - 1; i >= 0; i--) {
    let d = parseInt(code.charAt(i));
    if (i % 2 === parity) {
      d *= 2;
    }
    if (d > 9) {
      d -= 9;
    }
    sum += d;
  }

  return sum % 10;
};

export const luhnCalculate = (partcode: string) => {
  const checksum = luhnChecksum(partcode + "0");
  return checksum === 0 ? 0 : 10 - checksum;
};

export const luhnValidate = (code: string) => {
  return luhnChecksum(code) === 0;
};

export const generateLuhnDigits = (length: number) => {
  if (length <= 1) {
    throw new Error(
      "Length must be greater than 1 to include the check digit.",
    );
  }

  const baseDigits = [];

  for (let i = 0; i < length - 1; i++) {
    baseDigits.push(Math.floor(Math.random() * 10));
  }

  const checkdigit = luhnCalculate(baseDigits.join(""));

  return baseDigits.join("") + checkdigit;
};

console.log(generateLuhnDigits(16));
