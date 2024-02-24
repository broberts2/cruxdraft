import React, { FC } from "react";
import PlayerCard from "../playercard";

const __Pos = {
  0: `http://localhost:7001/static/media/65ae9874aba9a954414b7f27.png`,
  1: `http://localhost:7001/static/media/65ae987eaba9a954414b7f34.png`,
  2: `http://localhost:7001/static/media/65ae988daba9a954414b7f4e.png`,
  3: `http://localhost:7001/static/media/65ae9895aba9a954414b7f5b.png`,
  4: `http://localhost:7001/static/media/65ae9885aba9a954414b7f41.png`,
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
  return (
    <div
      className={`relative flex ${
        hoverIndex >= 0 ? `-space-x-16` : `-space-x-20`
      } justify-start items-center m-auto transition-all duration-300`}
    >
      {Cards}
    </div>
  );
};

export default PlayerRow;
