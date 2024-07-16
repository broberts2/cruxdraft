import React, { FC } from "react";
import TeamTitle from "../teamtitle";

const TeamTitleRow: FC<{ draft: any }> = ({ draft }) => {
  return (
    <div className={`flex items-center space-x-10`}>
      <div className={`w-1/3`}>
        <TeamTitle
          img={`https://highmountainlabs.io/arclight/static/media/65dec020a0ce4f406a2ed762.png`}
          title={draft.team1name}
          // videosrc={`https://highmountainlabs.io/arclight/static/media/65debfd3a0ce4f406a2ed6f3.mp4`}
        />
      </div>
      <div className={`w-1/3`}>
        <img
          src={`https://highmountainlabs.io/cdn/arclight/media/cruxdraft.png`}
          className={`w-36 xl:w-44 object-cover m-auto`}
        />
      </div>
      <div className={`w-1/3`}>
        <TeamTitle
          reverse
          img={`https://highmountainlabs.io/arclight/static/media/65dec03aa0ce4f406a2ed772.png`}
          title={draft.team2name}
          // videosrc={`https://highmountainlabs.io/arclight/static/media/65debfaea0ce4f406a2ed6c4.mp4`}
        />
      </div>
    </div>
  );
};

export default TeamTitleRow;
