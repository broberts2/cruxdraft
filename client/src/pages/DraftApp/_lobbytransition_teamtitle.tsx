import React, { FC } from "react";
import AnimatedLogo from "../../projectcomponents/animatedlogo";

const LobbyTransitionTeamTitle: FC<{
  videosrc: string;
  img: string;
  title: string;
  blue?: boolean;
  init: boolean;
  cb: Function;
}> = ({ videosrc, img, title, blue, init, cb }) => {
  const [active, setActive] = React.useState(false);
  React.useEffect(() => {
    if (!init) return;
    setTimeout(() => {
      setActive(true);
      setTimeout(cb, 100);
    }, 1000);
  }, [init]);
  return (
    <div
      className={`absolute ${
        blue
          ? `left-[28%] -translate-x-[28%] top-[70%] -translate-y-[70%]`
          : `left-[65%] -translate-x-[65%] top-[15%] -translate-y-[15%]`
      } ${
        init ? "opacity-100" : "opacity-0"
      } transition-all duration-1000 origin-left`}
    >
      <div
        className={`relative flex items-end space-x-5 transition-all duration-500`}
      >
        <AnimatedLogo src={videosrc} clippingmask={img} width={128} />
        {/* <div
          className={`${
            !active ? "scale-x-0" : "scale-x-100"
          } transition-all duration-1000 origin-left`}
        >
          <div className={`text-4xl border-b-[0px] border-white mb-5`}>
            {title}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LobbyTransitionTeamTitle;
