import React, { FC } from "react";
import { TextField, Button } from "@highmountainlabs/arclight-ui";

import Card from "./card";

const Modal: FC<{ D: any; fns: any }> = ({ D, fns }) => {
  const COL_NUM = 5;
  const [bgImg, setBgImg] = React.useState<string | undefined>(undefined);
  const [search, setSearch] = React.useState("");
  const [hoverIndex, setHoverIndex] = React.useState(-1);
  const [selectedIndex, setSelectedIndex] = React.useState(undefined);
  const [selectors, setSelectors] = React.useState({
    // top: {
    //   img: "http://localhost:7000/static/media/6586caff93b08d225390cd87.png",
    //   active: true,
    // },
    // jungle: {
    //   img: "http://localhost:7000/static/media/6586cb0b93b08d225390cd94.png",
    //   active: true,
    // },
    // middle: {
    //   img: "http://localhost:7000/static/media/6586cb1193b08d225390cda1.png",
    //   active: true,
    // },
    // bottom: {
    //   img: "http://localhost:7000/static/media/6586cb1993b08d225390cdae.png",
    //   active: true,
    // },
    // support: {
    //   img: "http://localhost:7000/static/media/6586cb2a93b08d225390cdbb.png",
    //   active: true,
    // },
    assassin: {
      img: "http://localhost:7001/static/media/65ae984daba9a954414b7ed6.png",
      active: true,
    },
    fighter: {
      img: "http://localhost:7001/static/media/65ae985caba9a954414b7f00.png",
      active: true,
    },
    mage: {
      img: "http://localhost:7001/static/media/65ae9839aba9a954414b7ebc.png",
      active: true,
    },
    marksman: {
      img: "http://localhost:7001/static/media/65ae9841aba9a954414b7ec9.png",
      active: true,
    },
    support: {
      img: "http://localhost:7001/static/media/65ae9863aba9a954414b7f0d.png",
      active: true,
    },
    tank: {
      img: "http://localhost:7001/static/media/65ae9869aba9a954414b7f1a.png",
      active: true,
    },
  });
  let row: Array<JSX.Element> = [];
  const rows: Array<JSX.Element> = [];
  D.getrecords_champion.init.records
    .sort((a: any, b: any) => (a.name < b.name ? -1 : 1))
    .sort((a: any, b: any) =>
      search.length > 0
        ? a.name.toLowerCase().includes(search.toLowerCase()) &&
          !b.name.toLowerCase().includes(search.toLowerCase())
          ? -1
          : 1
        : 1
    )
    .sort((a: any, b: any) => {
      const keys = Object.keys(selectors).filter(
        (key: string) => selectors[key].active
      );
      const va = a.tags.find((tag: string) =>
        keys.find((key: string) => key.toLowerCase() === tag.toLowerCase())
      );
      const vb = b.tags.find((tag: string) =>
        keys.find((key: string) => key.toLowerCase() === tag.toLowerCase())
      );
      return va && !vb ? -1 : 1;
    })
    .map((Champion: any, i: number) => {
      row.push(
        <Card
          selectors={selectors}
          selectedIndex={selectedIndex}
          search={search.toLowerCase()}
          Champion={Champion}
          index={i}
          hoverIndex={hoverIndex}
          setHoverIndex={(i: number) => setHoverIndex(i)}
          onClick={(n: number) => {
            setSelectedIndex(Champion._id);
            setBgImg(Champion.img);
          }}
        />
      );
      if ((i + 1) % COL_NUM === 0) {
        rows.push(<div className={`flex space-x-2 justify-center`}>{row}</div>);
        row = [];
      }
    });
  if (row.length) {
    while (row.length < COL_NUM) {
      row.push(
        <Card search={search} setHoverIndex={() => setHoverIndex(-1)} />
      );
    }
    rows.push(<div className={`flex space-x-2 justify-center`}>{row}</div>);
  }
  return (
    <div className={`w-full h-full overflow-y-auto flex-col relative`}>
      {bgImg ? (
        <img
          className={`absolute w-full h-full object-cover opacity-30`}
          src={bgImg}
        />
      ) : null}
      <div className={`font-primary absolute top-5 right-24 text-5xl`}>45</div>
      <div className={`m-3 flex-col space-y-3`}>
        <TextField
          hot
          value={search}
          label={"Champion"}
          onChange={(e: any) => setSearch(e.target.value)}
          variant={"standard"}
          type={"input"}
          key={0}
        />
        <div className={`flex space-x-1 relative`}>
          {Object.keys(selectors).map((key: string) => {
            return (
              <div
                className={
                  !selectors[key].active
                    ? `opacity-30 border-[1px] border-transparent rounded-full p-[2px] duration-100 transition-all`
                    : `border-[1px] border-transparent rounded-full p-[2px] duration-100 transition-all`
                }
                onClick={() =>
                  setSelectors((state: any) => {
                    return {
                      ...state,
                      [key]: { ...state[key], active: !state[key].active },
                    };
                  })
                }
              >
                <img src={selectors[key].img} className={`w-10 object-cover`} />
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`h-[68%] m-3 flex-col space-y-2 overflow-y-auto relative`}
        onMouseLeave={() => setHoverIndex(-1)}
      >
        {rows}
      </div>
      <div
        className={`m-3 transition-opacity duration-300`}
        style={{ opacity: selectedIndex ? 1 : 0 }}
      >
        <Button
          span
          className={``}
          label={`Select ${
            D.getrecords_champion.init.records.find(
              (C: any) => C._id === selectedIndex
            )?.name
          }`}
          type={"button"}
          size={"normal"}
          animation={true}
          onClick={(status: any) => null}
        />
      </div>
    </div>
  );
};

export default Modal;
