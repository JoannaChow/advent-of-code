import { input } from "./input";

function findAndMultiplyGammaEpsilon(biNumbers: Array<string>): number {
  const counter = new Array(biNumbers[0].length);
  for (let biNum of biNumbers) {
    biNum.split("").forEach((digit, index) => {
      if (digit === "1") {
        counter[index] = counter[index] ? counter[index] + 1 : 1;
      }
    });
  }
  let gamma = "",
    epsilon = "";
  for (let count of counter) {
    gamma += count && count > biNumbers.length / 2 ? "1" : "0";
    epsilon += count && count > biNumbers.length / 2 ? "0" : "1";
  }
  return parseInt(gamma, 2) * parseInt(epsilon, 2);
}

// console.log(findAndMultiplyGammaEpsilon(input));

function findBitNumbers(
  biNumbers: Array<string>,
  index: number,
  findMost: boolean
): Array<string> {
  let ret: Array<string> = [];
  let bit1Counter: number = 0;
  for (const biNum of biNumbers) {
    if (biNum[index] === "1") bit1Counter++;
  }
  for (const biNum of biNumbers) {
    const bit =
      (bit1Counter >= biNumbers.length / 2 && findMost) ||
      (bit1Counter < biNumbers.length / 2 && !findMost)
        ? "1"
        : "0";
    if (biNum[index] === bit) {
      ret.push(biNum);
    }
  }
  return ret;
}

function findAndMultiplyOxygenCO2(biNumbers: Array<string>): number {
  let oxygenInput = biNumbers,
    co2Input = biNumbers;
  for (let i = 0; i < oxygenInput[0].length; i++) {
    oxygenInput = findBitNumbers(oxygenInput.slice(), i, true);
    if (oxygenInput.length == 1) break;
  }
  for (let i = 0; i < co2Input[0].length; i++) {
    co2Input = findBitNumbers(co2Input.slice(), i, false);
    if (co2Input.length == 1) break;
  }
  return parseInt(oxygenInput[0], 2) * parseInt(co2Input[0], 2);
}

console.log(findAndMultiplyOxygenCO2(input));
