"use client";
import React, { useState, type FC } from "react";
import { BOARD_SIZE, GRID_SIZE, PIECES_COUNT } from "../utils/constants";
import { scramble, canSwap, swap, isSolved } from "../utils/puzzleHelpers";
import BoardPiece from "./BoardPiece";
import { Button } from "@nextui-org/react";

const PuzzleBoard: FC<PuzzleBoardProps> = ({ imageUrl, onBackClick }) => {
  const [pieces, setPieces] = useState(
    Array.from({ length: PIECES_COUNT }, (_, index) => index)
  );
  const [gameStarted, setGameStarted] = useState(false);

  const scramblePieces = () => {
    const shuffledPieces = scramble(pieces);
    setPieces(shuffledPieces);
  };

  const swapPieces = (tileIndex: number) => {
    if (canSwap(tileIndex, pieces.indexOf(pieces.length - 1))) {
      const swappedPieces = swap(
        pieces,
        tileIndex,
        pieces.indexOf(pieces.length - 1)
      );
      setPieces(swappedPieces);
    }
  };

  const handlePieceClick = (index: number) => {
    swapPieces(index);
  };

  const handleShuffleClick = () => {
    scramblePieces();
  };

  const handleStartClick = () => {
    scramblePieces();
    setGameStarted(true);
  };

  const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
  const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
  const style = {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
  };
  const winCondition = isSolved(pieces);

  return (
    <div>
      <div className="my-8">
        <ul style={style} className="relative p-0">
          {pieces.map((piece, index) => (
            <BoardPiece
              index={index}
              key={piece}
              imageUrl={imageUrl}
              tile={piece}
              width={pieceWidth}
              height={pieceHeight}
              gameStarted={gameStarted}
              handleTileClick={handlePieceClick}
            />
          ))}
        </ul>
        {winCondition && gameStarted && (
          <div className="my-4 text-center">
            Congratulations! Puzzle solved 🎉
          </div>
        )}
      </div>
      <div className="mt-4 flex flex-col justify-center gap-4">
        {!gameStarted ? (
          <Button
            size="sm"
            color="primary"
            variant="shadow"
            onClick={() => handleStartClick()}
          >
            Start game
          </Button>
        ) : (
          <Button size="sm" onClick={() => handleShuffleClick()}>
            Restart game
          </Button>
        )}
        <Button
          className="text-center"
          size="sm"
          color="primary"
          variant="ghost"
          onClick={onBackClick}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

interface PuzzleBoardProps {
  imageUrl: string;
  onBackClick: () => void;
}

export default PuzzleBoard;
