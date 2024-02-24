import React, { FC } from "react";
import { FontAwesome } from "@highmountainlabs/arclight-ui";
import AudioVisualizer from "../audiovisualizer";

const AudioControls: FC<{
  videoMuted: boolean;
  setVideoMuted: Function;
  sfxMuted: boolean;
  setSfxMuted: Function;
}> = ({ videoMuted, setVideoMuted, sfxMuted, setSfxMuted }) => {
  const Control = (props: any) => (
    <div
      className={`rounded-full bg-background-secondary w-10 h-10 flex justify-center items-center relative`}
      onClick={props.onClick}
    >
      <FontAwesome icon={props.icon} size={"md"} />
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2${
          props.cond ? ` opacity-1` : ` opacity-0`
        }`}
      >
        <FontAwesome icon={`slash`} size={"md"} />
      </div>
    </div>
  );
  return (
    <div
      className={`absolute bottom-2 left-1/2 -translate-x-1/2 alignitems-center w-56`}
    >
      <div className={`relative w-full h-full cursor-pointer`}>
        <AudioVisualizer />
        <div
          className={`bg-background-secondary absolute -bottom-16 -left-44 w-44 h-16 -rotate-12`}
        />
        <div
          className={`bg-background-secondary absolute -bottom-16 -right-44 w-44 h-16 rotate-12`}
        />
        <div className={`relative`}>
          <div
            className={`absolute flex space-x-5 justify-center bottom-full left-1/2 -translate-x-1/2 transition-all duration-500`}
          >
            <Control
              i={0}
              icon={`music`}
              cond={videoMuted}
              onClick={() => setVideoMuted(!videoMuted)}
            />
            <Control
              i={1}
              icon={`volume-high`}
              cond={sfxMuted}
              onClick={() => setSfxMuted(!sfxMuted)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioControls;
