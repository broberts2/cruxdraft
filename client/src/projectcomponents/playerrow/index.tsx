import React, { FC } from "react";
import PlayerCard from "../playercard";

const PlayerRow: FC<{ blue?: boolean }> = ({ blue }) => {
  const [hoverIndexPick, setHoverIndexPick] = React.useState(-1);
  const [hoverIndexBan, setHoverIndexBan] = React.useState(-1);
  const Cards = {
    Pick: [1, 2, 3, 4, 5].map((C: any, i: number) => (
      <div
        className={`duration-300`}
        onMouseEnter={() => setHoverIndexPick(i)}
        style={{
          opacity: hoverIndexPick < 0 ? 1 : hoverIndexPick === i ? 1 : 0.2,
        }}
      >
        <PlayerCard
          blue={blue}
          tracer={!i && blue}
          // img={"https://cdn.communitydragon.org/14.1.1/champion/910/splash-art"}
        />
      </div>
    )),
    Ban: [1, 2, 3, 4, 5].map((C: any, i: number) => (
      <div
        className={`${i % 2 === 0 ? `mt-20` : `mt-0`} duration-300`}
        onMouseEnter={() => setHoverIndexBan(i)}
        style={{
          opacity: hoverIndexBan < 0 ? 1 : hoverIndexBan === i ? 1 : 0.2,
        }}
      >
        <PlayerCard
          ban
          blue={blue}
          rounded={false}
          // img={"https://cdn.communitydragon.org/14.1.1/champion/910/splash-art"}
        />
      </div>
    )),
  };
  return (
    <div className={`border-b border-white pb-10`}>
      {Object.keys(Cards).map((k: string) => (
        <div
          className={`flex m-3`}
          onMouseLeave={() => {
            setHoverIndexPick(-1);
            setHoverIndexBan(-1);
          }}
        >
          {Cards[k].map((C: JSX.Element, i: number) => (
            <div className={`flex items-center`}>
              {C}
              {i < Cards[k].length - 1 ? (
                <div
                  className={`${k === "Ban" ? `w-8` : `w-3`} h-[0.75px] ${
                    blue ? "bg-blue-500" : "bg-red-500"
                  }`}
                />
              ) : null}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PlayerRow;
