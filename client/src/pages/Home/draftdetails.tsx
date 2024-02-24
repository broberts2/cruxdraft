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
          <AnimatedLogo
            src={`http://localhost:7001/static/media/65a0ca1392db6d98d4c41299.mp4`}
            clippingmask={`http://localhost:7001/static/media/65a0c9ac92db6d98d4c41239.png`}
            width={128}
          />
          <div className={``}>{teams.team1.name}</div>
        </div>
        <div className={`text-xl`}>VS</div>
        <div className={`flex items-center text-4xl space-x-10`}>
          <AnimatedLogo
            src={`http://localhost:7001/static/media/65a0ca2692db6d98d4c412dc.mp4`}
            clippingmask={`http://localhost:7001/static/media/65a0c9b192db6d98d4c41246.png`}
            width={128}
          />
          <div className={``}>{teams.team2.name}</div>
        </div>
      </div>
      {setNextStep ? (
        <NextBttn
          label={`Generate Links`}
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
