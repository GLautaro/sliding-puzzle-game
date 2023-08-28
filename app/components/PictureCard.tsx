"use client";
import React, { FC } from "react";
import { Card, CardFooter, Image } from "@nextui-org/react";
import { Picture } from "../types";

const PictureCard: FC<PictureCardProps> = ({ picture, onClickPictureCard }) => {
  return (
    <Card
      isPressable
      onClick={() => onClickPictureCard(picture)}
      isFooterBlurred
      radius="lg"
      className="w-80	h-80 border-none cursor-pointer hover:scale-105"
      key={picture.id}
    >
      <Image
        alt="Picture"
        className="object-cover"
        height={320}
        src={picture.url}
        width={320}
      />
      <CardFooter className="backdrop-blur-2xl justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="py-2 text-small font-semibold text-cyan-50">
          {picture.name}
        </p>
      </CardFooter>
    </Card>
  );
};

interface PictureCardProps {
  picture: Picture;
  onClickPictureCard: (selectedPicture: Picture) => void;
}

export default PictureCard;
