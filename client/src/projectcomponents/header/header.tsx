import React, { FC } from "react";
import { Header } from "@highmountainlabs/arclight-ui";

const _HEADER_ITEMS = {
  home: {
    text: "Home",
    icon: "house",
    route: "/",
  },
};

const H: FC<{
  fns: {
    [key: string]: any;
  };
  D: {
    [key: string]: any;
  };
}> = ({ D, fns }) => {
  return (
    <div className={`h-72`}>
      <Header
        fns={fns}
        logo={{
          src: `https://highmountainlabs.io/arclight/cdn/media/cruxdraft.png`,
          route: "/",
        }}
        linksRight={
          [
            // {
            //   route: _HEADER_ITEMS.home.route,
            //   icon: _HEADER_ITEMS.home.icon,
            //   text: _HEADER_ITEMS.home.text,
            // },
          ]
        }
        linksLeft={
          [
            // {
            //   route: _HEADER_ITEMS.home.route,
            //   icon: _HEADER_ITEMS.home.icon,
            //   text: _HEADER_ITEMS.home.text,
            // },
          ]
        }
        socialMediaRight={
          [
            // {
            //   routeExternal: Settings.discordlink,
            //   icon: "discord",
            // },
          ]
        }
        socialMediaLeft={
          [
            // {
            //   routeExternal: Settings.discordlink,
            //   icon: "discord",
            // },
          ]
        }
      />
    </div>
  );
};

export default H;
