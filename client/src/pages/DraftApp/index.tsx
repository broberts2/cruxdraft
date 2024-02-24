import React, { FC } from "react";
import { Page } from "@highmountainlabs/arclight-ui";

import PlayerRow from "../../projectcomponents/playerrow";
import TeamTitleRow from "../../projectcomponents/teamtitlerow";
import TeamRow from "../../projectcomponents/teamrow";
import VideoDial from "../../projectcomponents/videodial";
import AudioControls from "../../projectcomponents/audiocontrols";

const Home: FC<{
  fns: {
    [key: string]: any;
  };
  D: { [key: string]: any };
  endpoint?: string;
}> = ({ fns, D, endpoint }) => {
  const [videoMuted, setVideoMuted] = React.useState(true);
  const [sfxMuted, setSfxMuted] = React.useState(false);
  const side: string = "blue";
  React.useEffect(() => {
    if (fns?.calls?.getrecords_champion && !D.getrecords_champion)
      fns.calls.getrecords_champion();
  }, [fns.calls]);
  return D?.getrecords_champion ? (
    <Page fns={fns}>
      <div className={`w-full h-screen overflow-hidden relative`}>
        <video
          src={`http://localhost:7001/static/media/65a0617d84efbfeecffaf956.mp4`}
          className={`absolute w-full h-full object-cover opacity-10`}
          autoPlay
          muted={videoMuted}
          loop
          preload="auto"
        />
        <div
          className={`${
            side === "blue" ? "left-0" : "right-0"
          } absolute w-96 h-full ${
            side === "blue" ? "bg-gradient-to-r" : "bg-gradient-to-l"
          } ${
            side === "blue" ? "from-blue-600" : "from-red-600"
          } to-transparent opacity-1`}
        />
        <div className={`relative`}>
          <div className={`h-1/3`}>
            <TeamTitleRow />
          </div>
          <div className={`flex justify-center h-1/3`}>
            <div className={`flex items-center`}>
              <PlayerRow blue />
              <div className={`m-5`}>
                <VideoDial
                  D={D}
                  fns={fns}
                  dialImg={`http://localhost:7001/static/media/65ae98ababa9a954414b7f68.jpg`}
                />
                <div
                  className={`text-6xl absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2`}
                >
                  45
                </div>
              </div>
              <PlayerRow />
            </div>
          </div>
        </div>
        <div
          className={`flex w-full h-1/4 items-center justify-center relative`}
        >
          <div className={`w-2/5 flex`}>
            <TeamRow blue />
          </div>
          <div className={`w-1/5 text-center`}>
            <div className={`text-xl`}>Tournament Draft</div>
            <div className={`text-lg`}>2:35</div>
          </div>
          <div className={`w-2/5 flex`}>
            <TeamRow />
          </div>
        </div>
        <AudioControls
          videoMuted={videoMuted}
          setVideoMuted={setVideoMuted}
          sfxMuted={sfxMuted}
          setSfxMuted={setSfxMuted}
        />
      </div>
    </Page>
  ) : null;
};

export default Home;
