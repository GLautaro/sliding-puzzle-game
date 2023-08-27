"use client";
import React, { FC } from "react";
import {
  NextUIProvider,
  Card,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import PictureCard from "./components/PictureCard";

const Homepage: FC<HomepageProps> = ({ pictures }) => {
  return (
    <NextUIProvider>
      <div>
        <h1>Sliding game</h1>
        {pictures.map((picture) => (
          <PictureCard picture={picture} key={picture.id} />
        ))}
      </div>
    </NextUIProvider>
  );
};

interface HomepageProps {
  pictures: { id: string; name: string; url: string }[];
}

export default Homepage;
