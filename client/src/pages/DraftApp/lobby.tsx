import React, { FC } from "react";
import Header from "../../projectcomponents/header/header";
import { Card, FontAwesome } from "@highmountainlabs/arclight-ui";
import AnimatedLogo from "../../projectcomponents/animatedlogo";

const Lobby: FC<{
  fns: {
    [key: string]: any;
  };
  D: { [key: string]: any };
  endpoint?: string;
  draft: {
    [key: string]: any;
  };
  actions: {
    [key: string]: any;
  };
}> = ({ fns, D, endpoint, draft, actions }) => {
  return D?.getrecords_settings?.init?.records[0] ? (
    <div
      className={`w-full h-full absolute top-0${
        draft?.stage ? ` pointer-events-none opacity-0` : " opacity-100"
      } transition-all duration-300`}
    >
      <video
        src={D.getrecords_settings.init.records[0].cruxtheme.backgroundvideo}
        className={`absolute w-full h-full object-cover opacity-10`}
        muted
        autoPlay
        loop
      />
      <Header fns={fns} D={D} />
      <div className={`flex justify-center items-center space-x-20`}>
        {[
          {
            v: `https://highmountainlabs.io/arclight/static/media/65debfd3a0ce4f406a2ed6f3.mp4`,
            l: `https://highmountainlabs.io/arclight/static/media/65dec020a0ce4f406a2ed762.png`,
            n: `Ocean Soul`,
            s: "blue",
          },
          { vs: true },
          {
            v: `https://highmountainlabs.io/arclight/static/media/65debfaea0ce4f406a2ed6c4.mp4`,
            l: `https://highmountainlabs.io/arclight/static/media/65dec03aa0ce4f406a2ed772.png`,
            n: `Infernal Soul`,
            s: "red",
          },
        ].map((T: any) => {
          if (T.vs) return <div className={`text-5xl`}>VS</div>;
          let show = false;
          if (
            (T.s === "blue" && draft?.blueready) ||
            (T.s === "red" && draft?.redready)
          )
            show = true;
          return (
            <Card
              className={
                D.crux_lobbycheck[`${T.s.toLowerCase()}captain`]
                  ? undefined
                  : `pointer-events-none`
              }
              hover={{
                onMouseEnter: () => null,
                onMouseLeave: () => null,
              }}
              // bgImg={`https://highmountainlabs.io/cdn/arclight/media/crux.jpg`}
              subText={T.n}
              bodyComponent={
                <div
                  className={`h-full flex justify-center items-center relative group-hover`}
                >
                  {/* <video
                    src={T.v}
                    className={`absolute w-full h-full object-cover opacity-85`}
                    muted
                    autoPlay
                    loop
                  /> */}
                  {/* <AnimatedLogo
                    src={`https://highmountainlabs.io/arclight/static/media/65debfeda0ce4f406a2ed722.mp4`}
                    clippingmask={`https://highmountainlabs.io/arclight/static/media/65dec0b7a0ce4f406a2ed810.png`}
                    width={128}
                  /> */}
                  <img src={T.l} className={`w-36`} />
                  <div
                    className={`bg-black absolute h-full w-full`}
                    style={{ opacity: show ? 0.7 : 0 }}
                  />
                  <div
                    className={`absolute text-green-400 rounded-full border-green-400 border-4 w-40 h-40 flex justify-center items-center`}
                    style={{ display: !show ? "none" : undefined }}
                  >
                    <FontAwesome icon={"check"} size={"6x"} />
                  </div>
                  <div
                    className={`absolute w-full h-full flex justify-center items-center group`}
                    style={{ pointerEvents: show ? "none" : undefined }}
                  >
                    <div
                      className={`relative w-full h-full flex justify-center items-center`}
                    >
                      <div
                        className={`absolute w-full h-full bg-black opacity-0 group-hover:opacity-80 duration-300`}
                      />
                      <div
                        className={`absolute opacity-0 translate-y-96 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300`}
                      >
                        Click to Ready!
                      </div>
                    </div>
                  </div>
                </div>
              }
              onClick={() =>
                fns.calls.crux_readycheck
                  ? fns.calls.crux_readycheck(fns.readState())
                  : null
              }
            />
          );
        })}
      </div>
    </div>
  ) : null;
};

export default Lobby;
