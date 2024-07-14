import React, { FC } from "react";
import TeamTitle from "./_lobbytransition_teamtitle";

const LobbyTransition: FC<{
  fns: {
    [key: string]: any;
  };
  D: { [key: string]: any };
  endpoint?: string;
  draft: {
    [key: string]: any;
  };
  actions: {
    [key: string]: any;
  };
}> = ({ fns, D, endpoint, draft, actions }) => {
  const [sequence, setSequence] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => setSequence(1), 1250);
  }, []);
  return draft && false ? (
    <div
      className={`w-full h-full absolute top-0${
        draft.stage !== "lobbytransition" ? ` opacity-0` : ""
      } transition-all duration-300 bg-black pointer-events-none`}
    >
      <div className={`relative w-full h-full`}>
        {sequence > 0 ? (
          <video
            muted
            autoPlay
            src={`https://highmountainlabs.io/arclight/static/media/65dfd69135b8895019fa8262.webm`}
            className={`absolute w-full h-full object-cover`}
            onEnded={() => setSequence((l: number) => l + 1)}
          />
        ) : null}
        {sequence > 2 ? (
          <video
            muted
            autoPlay
            src={`https://highmountainlabs.io/arclight/static/media/65dfd68a35b8895019fa8252.webm`}
            className={`absolute w-full h-full object-cover transition-opacity duration-[2000ms] ${
              sequence > 4 ? "opacity-50" : "opacity-100"
            }`}
            onEnded={() => setSequence((l: number) => l + 1)}
          />
        ) : null}
        <TeamTitle
          blue
          init={sequence > 0}
          img={`https://highmountainlabs.io:7001/static/media/65dec020a0ce4f406a2ed762.png`}
          title={"Ocean Soul"}
          videosrc={`https://highmountainlabs.io:7001/static/media/65debfd3a0ce4f406a2ed6f3.mp4`}
          cb={() => setSequence((l: number) => l + 1)}
        />
        <TeamTitle
          init={sequence > 2}
          img={`https://highmountainlabs.io/arclight/static/media/65dec03aa0ce4f406a2ed772.png`}
          title={"Infernal Soul"}
          videosrc={`https://highmountainlabs.io/arclight/static/media/65debfaea0ce4f406a2ed6c4.mp4`}
          cb={() => setSequence((l: number) => l + 1)}
        />
      </div>
    </div>
  ) : draft ? (
    <div
      className={`w-full h-full absolute top-0${
        draft.stage !== "lobbytransition" ? ` opacity-0` : ""
      } transition-all duration-300 bg-background-primary pointer-events-none flex justify-center items-center`}
    >
      <img
        src={`https://highmountainlabs.io/cdn/arclight/media/cruxdraft.png`}
        className={`w-48 object-cover`}
      />
    </div>
  ) : null;
};

export default LobbyTransition;
