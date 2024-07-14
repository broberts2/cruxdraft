import React, { FC } from "react";
import PlayerCard from "../playercard";

const __Pos = {
  0: `https://highmountainlabs.io/arclight/static/media/65dec0f8a0ce4f406a2ed8b5.png`,
  1: `https://highmountainlabs.io/arclight/static/media/65dec103a0ce4f406a2ed8c5.png`,
  2: `https://highmountainlabs.io/arclight/static/media/65dec10da0ce4f406a2ed8d5.png`,
  3: `https://highmountainlabs.io/arclight/static/media/65dec118a0ce4f406a2ed8e5.png`,
  4: `https://highmountainlabs.io/arclight/static/media/65dec12da0ce4f406a2ed8f5.png`,
};

const PlayerRow: FC<{ blue?: boolean }> = ({ blue }) => {
  const [hoverIndex, setHoverIndex] = React.useState(-1);
  const Cards = [1, 2, 3, 4, 5].map((C: any, i: number) => (
    <div
      onMouseEnter={() => setHoverIndex(i)}
      onMouseLeave={() => setHoverIndex(-1)}
      className={`transition-all duration-300`}
      style={{
        zIndex: hoverIndex === i ? 10 : 5 - i,
        scale: hoverIndex === i ? `1` : `0.8`,
        opacity: hoverIndex === i ? 1 : hoverIndex >= 0 ? 0.3 : 1,
      }}
    >
      <PlayerCard
        blue={blue}
        img={"https://cdn.communitydragon.org/14.1.1/champion/910/splash-art"}
        player={{
          positionimg: __Pos[i],
          name: "Jetgorilla",
        }}
      />
    </div>
  ));
  return false ? (
    <div
      className={`relative flex ${
        hoverIndex >= 0 ? `-space-x-16` : `-space-x-20`
      } justify-start items-center m-auto transition-all duration-300 z-0`}
    >
      {Cards}
    </div>
  ) : null;
};

export default PlayerRow;
