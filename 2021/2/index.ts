import { input } from "./input";

function findAndMultiplyPositions(moves: Array<string>): number {
  let horizontal = 0,
    vertical = 0;
  for (let move of moves) {
    const moveDetails = move.split(" ");
    let steps = Number(moveDetails[1]);
    switch (moveDetails[0]) {
      case "forward":
        horizontal += steps;
        break;
      case "down":
        vertical += steps;
        break;
      case "up":
        vertical -= steps;
        break;
      default:
        break;
    }
  }
  return horizontal * vertical;
}

// console.log(findAndMultiplyPositions(input));

function findAndMultiplyPositionsWithAim(moves: Array<string>): number {
  let horizontal = 0,
    vertical = 0,
    aim = 0;
  for (let move of moves) {
    const moveDetails = move.split(" ");
    let steps = Number(moveDetails[1]);
    switch (moveDetails[0]) {
      case "forward":
        horizontal += steps;
        vertical += steps * aim;
        break;
      case "down":
        aim += steps;
        break;
      case "up":
        aim -= steps;
        break;
      default:
        break;
    }
  }
  return horizontal * vertical;
}

console.log(findAndMultiplyPositionsWithAim(input));
