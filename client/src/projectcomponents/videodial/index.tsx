import React, { FC } from "react";
import Styles from "./styles";
import Modal from "../modal";

const TeamTitle: FC<{ fns: any; D: any; dialImg: string }> = ({
  fns,
  D,
  dialImg,
}) => {
  const setImage = (src: string) => {
    const arr: Array<JSX.Element> = [];
    for (let i = 0; i < 3; i++)
      arr.push(
        <Styles.BackgroundImgFade
          src={src}
          className={`absolute object-cover w-full h-full cursor-pointer`}
        />
      );
    return arr;
  };
  return (
    <div
      className={`rounded-full w-72 h-72 relative cursor-pointer shadow-lg  hover:shadow-violet-600 transition-all duration-300`}
      onClick={() => {
        fns.setModal({
          noescape: true,
          mode: "full",
          bgImg: `http://localhost:7001/static/media/65ae99ecaba9a954414b7fe6.jpg`,
          body: () => <Modal D={D} fns={fns} />,
        });
      }}
    >
      <Styles.Border
        className={`border-cyan-400 rounded-full animate-spin w-full h-full absolute opacity-50`}
        style={{ animationDuration: `30s` }}
      />
      <div>{setImage(dialImg)}</div>
      <div
        className={`absolute w-full h-full flex justify-center items-center`}
      >
        <div className={`text-xl`}>Champion Select</div>
      </div>
    </div>
  );
};

export default TeamTitle;
