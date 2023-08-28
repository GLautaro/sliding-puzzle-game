import { PIECES_COUNT, GRID_SIZE } from "./constants";

function isSolvable(pieces: number[]) {
  let product = 1;
  for (let i = 1, l = PIECES_COUNT - 1; i <= l; i++) {
    for (let j = i + 1, m = l + 1; j <= m; j++) {
      product *= (pieces[i - 1] - pieces[j - 1]) / (i - j);
    }
  }
  return Math.round(product) === 1;
}

export function isSolved(pieces: number[]) {
  for (let i = 0, l = pieces.length; i < l; i++) {
    if (pieces[i] !== i) {
      return false;
    }
  }
  return true;
}

export function getMatrixPosition(index: number) {
  return {
    row: Math.floor(index / GRID_SIZE),
    col: index % GRID_SIZE,
  };
}

export function getVisualPosition(
  row: number,
  col: number,
  width: number,
  height: number
) {
  return {
    x: col * width,
    y: row * height,
  };
}

export function scramble(pieces: number[]): number[] {
  const scrambledPieces: number[] = [
    ...pieces
      .filter((t) => t !== pieces.length - 1)
      .sort(() => Math.random() - 0.5),
    pieces.length - 1,
  ];
  return isSolvable(scrambledPieces) && !isSolved(scrambledPieces)
    ? scrambledPieces
    : scramble(scrambledPieces);
}

export function canSwap(srcIndex: number, destIndex: number) {
  const { row: srcRow, col: srcCol } = getMatrixPosition(srcIndex);
  const { row: destRow, col: destCol } = getMatrixPosition(destIndex);
  return Math.abs(srcRow - destRow) + Math.abs(srcCol - destCol) === 1;
}

export function swap(pieces: number[], src: number, dest: number) {
  const piecesResult = [...pieces];
  [piecesResult[src], piecesResult[dest]] = [piecesResult[dest], piecesResult[src]];
  return piecesResult;
}
