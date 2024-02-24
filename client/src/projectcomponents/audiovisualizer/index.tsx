import React, { FC } from "react";
import AudioMotionAnalyzer from "audiomotion-analyzer";

const AudioVisualizer: FC<{}> = ({}) => {
  return (
    <div className={`absolute w-full h-14 -bottom-2`}>
      <div className={`relative flex h-full`}></div>
    </div>
  );
};

export default AudioVisualizer;
