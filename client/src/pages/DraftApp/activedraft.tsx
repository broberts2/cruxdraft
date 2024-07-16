import React, { FC } from "react";

import PlayerRow from "../../projectcomponents/playerrow";
import TeamTitleRow from "../../projectcomponents/teamtitlerow";
import TeamRow from "../../projectcomponents/teamrow";
import VideoDial from "../../projectcomponents/videodial";
import FlyCard from "../../projectcomponents/flycard";

const ActiveDraft: FC<{
  fns: {
    [key: string]: any;
  };
  draft: {
    [key: string]: any;
  };
  actions: {
    [key: string]: any;
  };
  D: { [key: string]: any };
  endpoint?: string;
  replay?: string;
}> = ({ fns, D, endpoint, draft, actions, replay }) => {
  const [flyCard, setFlyCard] = React.useState(undefined);
  React.useEffect(() => {
    if (fns?.calls?.getrecords_champion && !D.getrecords_champion)
      fns.calls.getrecords_champion();
  }, [fns.calls]);
  return draft &&
    D?.getrecords_champion &&
    (!replay || !replay?.includes("transition")) ? (
    <div
      className={`w-full h-full absolute top-0${
        draft.stage === "active" ||
        draft.stage === "postchampionselect" ||
        draft.stage === "draftsetup" ||
        draft.stage === "complete"
          ? ""
          : ` pointer-events-none opacity-0`
      } transition-all duration-300`}
    >
      <video
        src={`https://highmountainlabs.io/arclight/static/media/65eced95d2a96e21a8994e99.mp4`}
        className={`absolute w-full h-full object-cover opacity-5`}
        autoPlay
        muted
        loop
      />
      {draft?.nextevent && draft?.stage === "active" ? (
        <div
          className={`${
            draft.nextevent.side === "blue" ? "left-0" : "right-0"
          } absolute w-1/2 h-full ${
            draft.nextevent.side === "blue"
              ? "bg-gradient-to-r"
              : "bg-gradient-to-l"
          } ${
            draft.nextevent.side === "blue" ? "from-blue-600" : "from-red-600"
          } to-transparent opacity-30`}
        />
      ) : null}
      <div className={`relative`}>
        <div className={`h-1/3`}>
          <TeamTitleRow draft={draft} />
        </div>
        <div className={`flex justify-center h-1/3`}>
          <div className={`flex items-center`}>
            <PlayerRow
              blue
              setFlyCard={setFlyCard}
              draft={draft}
              nextevent={draft.nextevent}
              picks={
                draft?.events
                  ? draft.events
                      .filter(
                        (E: any) => E.side === "blue" && E.action === "pick"
                      )
                      .map((E: any) =>
                        D.getrecords_champion.init.records.find((C: any) => {
                          return C.key === `${E.key}`;
                        })
                      )
                  : []
              }
              bans={
                draft?.events
                  ? draft.events
                      .filter(
                        (E: any) => E.side === "blue" && E.action === "ban"
                      )
                      .map((E: any) =>
                        D.getrecords_champion.init.records.find(
                          (C: any) => C.key === `${E.key}`
                        )
                      )
                  : []
              }
            />
            <div className={`m-5`}>
              <VideoDial
                draft={draft}
                D={D}
                fns={fns}
                dialImg={`https://highmountainlabs.io/arclight/static/media/65dec15ba0ce4f406a2ed968.jpg`}
              />
              {draft.stage === "active" && draft.nextevent ? (
                <div
                  className={`text-6xl absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2`}
                >
                  {draft.timer >= 0 ? draft.timer : 0}
                </div>
              ) : null}
            </div>
            <PlayerRow
              setFlyCard={setFlyCard}
              draft={draft}
              nextevent={draft.nextevent}
              picks={
                draft?.events
                  ? draft.events
                      .filter(
                        (E: any) => E.side === "red" && E.action === "pick"
                      )
                      .map((E: any) =>
                        D.getrecords_champion.init.records.find(
                          (C: any) => C.key === `${E.key}`
                        )
                      )
                  : []
              }
              bans={
                draft?.events
                  ? draft.events
                      .filter(
                        (E: any) => E.side === "red" && E.action === "ban"
                      )
                      .map((E: any) =>
                        D.getrecords_champion.init.records.find(
                          (C: any) => C.key === `${E.key}`
                        )
                      )
                  : []
              }
            />
          </div>
        </div>
      </div>
      <div className={`flex w-full h-1/4 items-center justify-center relative`}>
        <div className={`w-2/5 flex`}>
          <TeamRow blue setFlyCard={setFlyCard} />
        </div>
        <div className={`w-1/5 text-center`}>
          <div className={`text-xl`}>Tournament Draft</div>
          {draft?.duration ? (
            <div className={`text-lg`}>
              {Math.floor(draft.duration / 60)}:
              {draft.duration < 10 || draft.duration % 60 < 10
                ? `0${Math.floor(draft.duration % 60)}`
                : draft.duration % 60}
            </div>
          ) : null}
        </div>
        <div className={`w-2/5 flex`}>
          <TeamRow setFlyCard={setFlyCard} />
        </div>
      </div>
      <FlyCard flyCard={flyCard} setFlyCard={setFlyCard} />
    </div>
  ) : null;
};

export default ActiveDraft;
