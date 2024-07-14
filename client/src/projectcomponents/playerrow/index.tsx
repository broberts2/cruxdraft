import React, { FC } from "react";
import PlayerCard from "../playercard";

const PlayerRow: FC<{
  blue?: boolean;
  picks: Array<{ [key: string]: any }>;
  bans: Array<{ [key: string]: any }>;
  nextevent: { [key: string]: any };
  draft: { [key: string]: any };
}> = ({ blue, picks, bans, nextevent, draft }) => {
  const s =
    nextevent &&
    ((nextevent.side === "blue" && blue) ||
      (nextevent.side === "red" && !blue));
  const _tracer = (n: number, action: string) =>
    nextevent &&
    nextevent.number === n &&
    nextevent.action === action &&
    s &&
    draft.stage === "active";
  const [hoverIndexPick, setHoverIndexPick] = React.useState(-1);
  const [hoverIndexBan, setHoverIndexBan] = React.useState(-1);
  while (picks.length < 5) picks.push({});
  while (bans.length < 5) bans.push({});
  const Cards = {
    Pick: picks.map((C: any, i: number) => (
      <div
        className={`duration-300`}
        onMouseEnter={() => setHoverIndexPick(i)}
        style={{
          opacity: hoverIndexPick < 0 ? 1 : hoverIndexPick === i ? 1 : 0.2,
        }}
      >
        <PlayerCard
          blue={blue}
          tracer={_tracer(i, "pick")}
          img={C.img}
          name={C.name}
        />
      </div>
    )),
    Ban: bans.map((C: any, i: number) => (
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
          tracer={_tracer(i, "ban")}
          rounded={false}
          img={C.img}
          name={C.name}
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
