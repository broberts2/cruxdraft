import React, { FC } from "react";
import AnimatedLogo from "../animatedlogo";

const TeamTitle: FC<{
  reverse?: boolean;
  img: string;
  title: string;
  videosrc?: string;
}> = ({ reverse, img, title, videosrc }) => {
  const items = [
    <div className={`w-32 h-32`}>
      {videosrc ? (
        <AnimatedLogo src={videosrc} clippingmask={img} width={128} />
      ) : (
        <img className={`w-full object-cover relative`} src={img} />
      )}
    </div>,
    <div className={`lg:text-xl 2xl:text-3xl`}>{title}</div>,
  ];
  return (
    <div className={`w-full flex ${reverse ? `justify-end` : `justify-start`}`}>
      <div className={`flex items-center space-x-10 p-10`}>
        {reverse ? items.reverse() : items}
      </div>
    </div>
  );
};

export default TeamTitle;
