"use client"
import React, { FC } from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

const PictureCard: FC<PictureCardProps> = ({ picture }) => {
  return (
    <Card isFooterBlurred radius="lg" className="border-none" key={picture.id}>
      <Image
        alt="Picture"
        className="object-cover"
        height={300}
        src={picture.url}
        width={300}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{picture.name}</p>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          Play
        </Button>
      </CardFooter>
    </Card>
  );
};

interface PictureCardProps {
  picture: { id: string; name: string; url: string };
}

export default PictureCard;
