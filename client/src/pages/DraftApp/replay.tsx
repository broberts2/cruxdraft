import React, { FC } from "react";
import Header from "../../projectcomponents/header/header";
import { HeroPanel, MissionStatement } from "@highmountainlabs/arclight-ui";

const Replay: FC<{
  fns: {
    [key: string]: any;
  };
  D: { [key: string]: any };
  endpoint?: string;
  draft: {
    [key: string]: any;
  };
  replay?: string;
  setReplay: Function;
}> = ({ fns, D, endpoint, draft, replay, setReplay }) => {
  return draft?.stage === "complete" &&
    D?.getrecords_settings?.init.records[0]?.cruxtheme &&
    !replay ? (
    <div className={`w-full min-h-full absolute top-0 bg-gray-800`}>
      <div className={`relative`}>
        <video
          src={D.getrecords_settings.init.records[0].cruxtheme.backgroundvideo}
          className={`absolute w-full h-full object-cover opacity-10`}
          muted
          autoPlay
          loop
        />
        <Header fns={fns} D={D} />
      </div>
      <MissionStatement
        title={"Post Draft"}
        Message={`The draft you're looking for has concluded. Please select a replay option below.`}
      />
      <HeroPanel
        small
        rows={1}
        cards={[
          {
            bgImg: `https://highmountainlabs.io/arclight/static/media/6695cd50f3c32f297df688bd.jpg`,
            subText: `View`,
            hoverComponent: <div>View the draft result</div>,
            onClick: () => setReplay("view-transition"),
          },
          {
            bgImg: `https://highmountainlabs.io/arclight/static/media/6695cd79f3c32f297df688d8.jpg`,
            subText: `Replay`,
            hoverComponent: <div>Watch the un-edited draft replay</div>,
            onClick: () => setReplay("replay-transition"),
          },
          {
            bgImg: `https://highmountainlabs.io/arclight/static/media/6695cd69f3c32f297df688cb.png`,
            subText: `Timed Replay`,
            hoverComponent: (
              <div>
                Watch the draft replay over 4 minutes - useful for streams that
                want to watch the playback during the in-game viewer delay
              </div>
            ),
            onClick: () => setReplay("timedreplay-transition"),
          },
        ]}
      />
    </div>
  ) : null;
};

export default Replay;
