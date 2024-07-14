import { FontAwesome } from "@highmountainlabs/arclight-ui";
import React, { FC } from "react";

import ParticleTracer from "./particletracer";

const PlayerCard: FC<{
  blue?: boolean;
  rounded?: boolean;
  ban?: boolean;
  img?: string;
  name?: string;
  player?: {
    positionimg: string;
    name: string;
  };
  tracer?: boolean;
}> = ({ blue, img, rounded, ban, player, tracer, name }) => {
  const bottombg = `bg-neutral-900`;
  const bordercolorblue = `from-teal-500 via-blue-500 to-blue-900`;
  const bordercolorred = `from-pink-500 via-red-500 to-red-900`;
  return (
    <div
      className={`relative ${
        player ? `w-44 h-32` : !ban ? `w-36 h-52` : `w-32 h-32`
      } cursor-pointer ${rounded ? `rounded-lg` : ""}`}
    >
      {true && !player && img ? (
        <video
          autoPlay
          muted
          src={`https://highmountainlabs.io/arclight/static/media/65dec5c6a0ce4f406a2edae7.webm`}
          className={`absolute ${
            ban ? `-top-1/2 -translate-y-1/2 ` : `top-0 -translate-y-1/2 `
          }left-1/2 -translate-x-1/2 w-full pointer-events-none`}
        />
      ) : null}
      <div
        className={`absolute ${
          img ? `h-2/3` : `h-full`
        } top-0 w-full p-[1px] bg-gradient-to-b ${
          blue ? bordercolorblue : bordercolorred
        } ${rounded ? `rounded-lg` : ""}`}
      >
        <div className={`${bottombg} h-full w-full relative overflow-hidden`}>
          <img
            src={
              img
                ? img
                : `https://highmountainlabs.io/cdn/arclight/media/cruxdraft.png`
            }
            className={`absolute h-full w-full object-cover${
              img ? ` object-right` : ""
            } ${img ? "opacity-1" : "opacity-10"}`}
          />
          <ParticleTracer tracer={tracer} />
          <ParticleTracer tracer={tracer} bottom />
        </div>
      </div>
      <div
        className={`${
          player || (img && ban)
            ? `absolute left-1/2 -translate-x-1/2 ${
                player ? `top-full -translate-y-1/2` : `top-1/3 translate-y-1/3`
              } rounded-full ${bottombg} ${player ? `w-24 h-20` : `w-12 h-12`}`
            : `hidden`
        }`}
      />
      <div
        className={`absolute w-full bottom-0 ${bottombg} h-1/3 rounded-b-sm bg-clip-content ${
          !img ? "hidden" : ""
        }`}
      >
        <div className={`relative w-full h-full flex items-center`}>
          <div className={`m-auto ${ban ? `text-sm` : `text-lg`}`}>
            {player ? player.name : name}
          </div>
        </div>
      </div>
      <div
        className={`${
          !player && (!ban || !img) ? "hidden" : ""
        } flex justify-center items-center text-red-800 absolute left-1/2 -translate-x-1/2 ${
          player ? `-bottom-1/4 -translate-y-1/4` : `bottom-1/3 translate-y-1/3`
        }`}
      >
        {player ? (
          <img className={`w-8`} src={player.positionimg} />
        ) : (
          <FontAwesome animation="none" icon={"ban"} size="xl" />
        )}
      </div>
    </div>
  );
};

export default PlayerCard;
