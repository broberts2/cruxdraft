import React, { FC } from "react";
import { Page } from "@highmountainlabs/arclight-ui";

import ActiveDraft from "./activedraft";
import Lobby from "./lobby";
import Replay from "./replay";
import events from "./_events";
import actions from "./_actions";
import LobbyTransition from "./lobbytransition";
import AudioControls from "../../projectcomponents/audiocontrols";
import _replay from "./_replay";

const DraftApp: FC<{
  fns: {
    [key: string]: any;
  };
  D: { [key: string]: any };
  endpoint?: string;
}> = ({ fns, D, endpoint }) => {
  const [draft, setDraft] = React.useState<{ [key: string]: any }>({});
  const [videoMuted, setVideoMuted] = React.useState(true);
  const [sfxMuted, setSfxMuted] = React.useState(false);
  const [replay, setReplay] = React.useState<undefined | string>(undefined);
  React.useEffect(() => {
    if (fns?.calls?.crux_lobbycheck && !D?.crux_lobbycheck)
      fns.calls.crux_lobbycheck({ d: fns.readState().query.d });
  }, [fns.calls]);
  React.useEffect(() => {
    if (D?.crux_lobbycheck?.room && !Object.keys(draft).length) {
      if (fns?.calls?.getrecords_cruxdraft && !D.getrecords_cruxdraft) {
        fns.calls.getrecords_cruxdraft({
          search: { _id: D.crux_lobbycheck.room },
        });
      }
      fns.joinRoom(D.crux_lobbycheck.room);
      events().subcribe(fns, draft, setDraft, D, setReplay);
    }
    if (D?.getrecords_cruxdraft?.init?.records && !Object.keys(draft).length) {
      setDraft(D?.getrecords_cruxdraft?.init?.records[0]);
    }
  }, [D]);
  React.useEffect(
    () => _replay(D, events().audio, setReplay, replay, draft, setDraft),
    [replay]
  );
  return D?.getrecords_settings?.init?.records[0] && D?.crux_lobbycheck ? (
    <Page fns={fns}>
      <div className={`w-full h-screen overflow-hidden relative`}>
        <ActiveDraft
          D={D}
          actions={actions}
          draft={draft}
          fns={fns}
          replay={replay}
        />
        <LobbyTransition
          D={D}
          actions={actions}
          draft={draft}
          fns={fns}
          replay={replay}
        />
        <Lobby D={D} actions={actions} draft={draft} fns={fns} />
        <AudioControls
          videoMuted={videoMuted}
          setVideoMuted={setVideoMuted}
          sfxMuted={sfxMuted}
          setSfxMuted={setSfxMuted}
        />
      </div>
      <Replay
        D={D}
        draft={draft}
        fns={fns}
        replay={replay}
        setReplay={setReplay}
      />
    </Page>
  ) : null;
};

export default DraftApp;
