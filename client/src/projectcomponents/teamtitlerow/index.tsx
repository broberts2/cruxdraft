import React, { FC } from "react";
import TeamTitle from "../teamtitle";

const TeamTitleRow: FC<{}> = () => {
  return (
    <div className={`flex items-center space-x-10`}>
      <div className={`w-1/3`}>
        <TeamTitle
          img={`http://localhost:7001/static/media/65a0c9ac92db6d98d4c41239.png`}
          title={"Ocean Soul"}
          videosrc={`http://localhost:7001/static/media/65a0ca1392db6d98d4c41299.mp4`}
        />
      </div>
      <div className={`w-1/3`}>
        <img
          src={`https://highmountainlabs.io/arclight/cdn/media/cruxdraft.png`}
          className={`w-44 object-cover m-auto`}
        />
      </div>
      <div className={`w-1/3`}>
        <TeamTitle
          reverse
          img={`http://localhost:7001/static/media/65a0c9b192db6d98d4c41246.png`}
          title={"Infernal Soul"}
          videosrc={`http://localhost:7001/static/media/65a0ca2692db6d98d4c412dc.mp4`}
        />
      </div>
    </div>
  );
};

export default TeamTitleRow;
