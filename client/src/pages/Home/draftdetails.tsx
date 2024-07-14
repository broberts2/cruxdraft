import React, { FC } from "react";
import NextBttn from "./nextbttn";
import AnimatedLogo from "../../projectcomponents/animatedlogo";

const DraftDetails: FC<{
  teams: any;
  setNextStep?: Function;
  setBackStep?: Function;
  fns?: any;
}> = ({ teams, setNextStep, setBackStep, fns }) => {
  return (
    <div className={`flex-col space-y-10 mt-10`}>
      <div
        className={`text-6xl text-background-primary text-center`}
        style={{ textShadow: "none" }}
      >
        Tournament Draft
      </div>
      <div
        className={`flex justify-center items-center space-x-28 text-background-primary`}
        style={{ textShadow: "none" }}
      >
        <div className={`flex items-center text-4xl space-x-10`}>
          {/* <AnimatedLogo
            src={`https://highmountainlabs.io/arclight/static/media/65debfd3a0ce4f406a2ed6f3.mp4`}
            clippingmask={`https://highmountainlabs.io/arclight/static/media/65dec020a0ce4f406a2ed762.png`}
            width={128}
          /> */}
          <img
            src={`https://highmountainlabs.io/arclight/static/media/65dec020a0ce4f406a2ed762.png`}
            className={`w-36`}
          />
          <div className={``}>{teams.team1.name}</div>
        </div>
        <div className={`text-xl`}>VS</div>
        <div className={`flex items-center text-4xl space-x-10`}>
          {/* <AnimatedLogo
            src={`https://highmountainlabs.io/arclight/static/media/65debfaea0ce4f406a2ed6c4.mp4`}
            clippingmask={`https://highmountainlabs.io/arclight/static/media/65dec03aa0ce4f406a2ed772.png`}
            width={128}
          /> */}
          <img
            src={`https://highmountainlabs.io/arclight/static/media/65dec03aa0ce4f406a2ed772.png`}
            className={`w-36`}
          />
          <div className={``}>{teams.team2.name}</div>
        </div>
      </div>
      {setNextStep ? (
        <NextBttn
          label={`Build Draft`}
          setNextStep={() =>
            fns.calls.crux_createdraft({
              team1: {
                name: "test team 1",
              },
              team2: {
                name: "test team 2",
              },
            })
          }
          setBackStep={setBackStep}
        />
      ) : null}
    </div>
  );
};

export default DraftDetails;
