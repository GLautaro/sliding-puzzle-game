"use client";
import React, { type FC, useState } from "react";
import { NextUIProvider, Button } from "@nextui-org/react";
import PictureCard from "./components/PictureCard";
import { Picture } from "./types";
import PuzzleBoard from "./components/PuzzleBoard";

const Homepage: FC<HomepageProps> = ({ pictures }) => {
  const [selectedPuzzle, setSelectedPuzzle] = useState<Picture>();

  const onClickPictureCard = (selectedPicture: Picture) => {
    setSelectedPuzzle(selectedPicture);
  };

  return (
    <NextUIProvider>
      {selectedPuzzle ? (
        <div>
          <h1 className="w-full text-center text-medium mb-2">
            Selected level: {selectedPuzzle.name}
          </h1>
          <PuzzleBoard
            imageUrl={selectedPuzzle.url}
            onBackClick={() => setSelectedPuzzle(undefined)}
          />
        </div>
      ) : (
        <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pictures.map((picture) => (
            <PictureCard
              key={picture.id}
              picture={picture}
              onClickPictureCard={onClickPictureCard}
            />
          ))}
        </div>
      )}
    </NextUIProvider>
  );
};

interface HomepageProps {
  pictures: Picture[];
}

export default Homepage;
