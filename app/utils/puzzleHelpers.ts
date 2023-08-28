import { PIECES_COUNT, GRID_SIZE } from "./constants";

// Verifica si el rompecabezas se puede resolver
function isSolvable(pieces: number[]) {
  let product = 1;

  // Itera a través de las piezas y calcula el producto de las inversiones
  for (let i = 1, l = PIECES_COUNT - 1; i <= l; i++) {
    for (let j = i + 1, m = l + 1; j <= m; j++) {
      product *= (pieces[i - 1] - pieces[j - 1]) / (i - j);
    }
  }

  // Si el producto es 1, el rompecabezas se puede resolver
  return Math.round(product) === 1;
}

// Verifica si el rompecabezas está resuelto
export function isSolved(pieces: number[]) {
  // Comprueba si cada pieza está en su posición correcta
  for (let i = 0, l = pieces.length; i < l; i++) {
    if (pieces[i] !== i) {
      return false;
    }
  }
  return true;
}

// Obtiene la posición de una pieza en la matriz
export function getMatrixPosition(index: number) {
  return {
    row: Math.floor(index / GRID_SIZE),
    col: index % GRID_SIZE,
  };
}

// Obtiene la posición visual de una pieza en píxeles
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

// Mezcla aleatoriamente las piezas del rompecabezas hasta que se pueda resolver
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

// Verifica si dos piezas pueden intercambiarse
export function canSwap(srcIndex: number, destIndex: number) {
  const { row: srcRow, col: srcCol } = getMatrixPosition(srcIndex);
  const { row: destRow, col: destCol } = getMatrixPosition(destIndex);

  // Dos piezas pueden intercambiarse si están adyacentes en la matriz
  const rowDiff = Math.abs(srcRow - destRow);
  const colDiff = Math.abs(srcCol - destCol);

  return rowDiff + colDiff === 1;
}

// Intercambia dos piezas en el rompecabezas
export function swap(pieces: number[], src: number, dest: number) {
  const piecesResult = [...pieces];
  [piecesResult[src], piecesResult[dest]] = [
    piecesResult[dest],
    piecesResult[src],
  ];
  return piecesResult;
}
