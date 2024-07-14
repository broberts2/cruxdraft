import React, { FC } from "react";
import Styles from "./styles";
import Modal from "../modal";

const TeamTitle: FC<{
  fns: any;
  D: any;
  dialImg: string;
  draft: { [key: string]: any };
}> = ({ fns, D, dialImg, draft }) => {
  const setImage = (src: string) => {
    const arr: Array<JSX.Element> = [];
    for (let i = 0; i < 2; i++)
      arr.push(
        <Styles.BackgroundImgFade
          src={src}
          className={`absolute object-cover w-full h-full cursor-pointer`}
        />
      );
    return arr;
  };
  const validactor =
    draft.stage === "active" &&
    ((draft?.nextevent?.side === "blue" && D?.crux_lobbycheck?.bluecaptain) ||
      (draft?.nextevent?.side === "red" && D?.crux_lobbycheck?.redcaptain));
  const dialbgimg = draft.championhoverid
    ? D.getrecords_champion.init.records.find(
        (C: any) => C.key === draft.championhoverid
      ).splashimg
    : dialImg;
  return (
    <div
      className={`rounded-full w-40 h-40 xl:w-60 xl:h-60 relative cursor-pointer shadow-lg ${
        draft.stage === "active" && validactor
          ? `hover:shadow-violet-600 `
          : " "
      }transition-all duration-300`}
      onClick={() => {
        if (!validactor) return;
        fns.setModal({
          noescape: true,
          mode: "full",
          bgImg: `https://highmountainlabs.io/arclight/static/media/65dec076a0ce4f406a2ed7c0.png`,
          body: () => <Modal D={D} fns={fns} draft={draft} />,
        });
      }}
    >
      {[
        { d: `20s`, o: `30` },
        { d: `45s`, o: `30` },
        { d: `70s`, o: `30` },
      ].map((el: any) => (
        <Styles.Border
          className={`border-cyan-400 rounded-full animate-spin w-full h-full absolute opacity-${el.o}`}
          style={{ animationDuration: el.d }}
        />
      ))}
      <div>{setImage(dialbgimg)}</div>
      <div
        className={`absolute w-full h-full flex justify-center items-center`}
      >
        <div
          className={`text-xl transition-all duration-300`}
          style={{
            opacity:
              (draft.stage === "active" && validactor) ||
              draft.stage === "complete"
                ? 1
                : 0,
          }}
        >
          {draft.stage === "complete" ? "Drafting Complete" : "Champion Select"}
        </div>
      </div>
    </div>
  );
};

export default TeamTitle;
