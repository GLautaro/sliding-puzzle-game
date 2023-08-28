"use client";
import React, { type FC } from "react";
import { GRID_SIZE, BOARD_SIZE, PIECES_COUNT } from "../utils/constants";
import { getMatrixPosition, getVisualPosition } from "../utils/puzzleHelpers";

const BoardPiece: FC<BoardPiece> = ({
  index,
  tile,
  height,
  width,
  imageUrl,
  gameStarted,
  handleTileClick,
}) => {

  const { row, col } = getMatrixPosition(index);
  const visualPos = getVisualPosition(row, col, width, height);
  const tileStyle = {
    width: `calc(100% / ${GRID_SIZE})`,
    height: `calc(100% / ${GRID_SIZE})`,
    translateX: visualPos.x,
    translateY: visualPos.y,
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: `${BOARD_SIZE}px`,
    backgroundPosition: `${(100 / (GRID_SIZE - 1)) * (tile % GRID_SIZE)}% ${
      (100 / (GRID_SIZE - 1)) * Math.floor(tile / GRID_SIZE)
    }%`,
  };

  return (
    <li
      style={{
        ...tileStyle,
        transform: `translate3d(${tileStyle.translateX}px, ${tileStyle.translateY}px, 0)`,
        opacity: tile === PIECES_COUNT - 1 ? 0 : 1,
      }}
      className={
        gameStarted
          ? "absolute grid place-items-center text-xl border border-gray-900"
          : "absolute grid place-items-center text-xl"
      }
      onClick={() => gameStarted && handleTileClick(index)}
    >
      {gameStarted && <div className="absolute bottom-0 right-0 px-1 text-small backdrop-blur">{tile + 1}</div>}
    </li>
  );
};

interface BoardPiece {
  index: number;
  imageUrl: string;
  tile: number;
  width: number;
  height: number;
  gameStarted: boolean;
  handleTileClick: (index: number) => void;
}

export default BoardPiece;
