import React, { FC } from "react";
import { TextField, Button } from "@highmountainlabs/arclight-ui";

import Card from "./card";

const Modal: FC<{ D: any; fns: any; draft: { [key: string]: any } }> = ({
  D,
  fns,
  draft,
}) => {
  const [timer, setTimer] = React.useState(draft.timer);
  const COL_NUM = 5;
  const [bgImg, setBgImg] = React.useState<string | undefined>(
    draft.championhoverid
      ? D.getrecords_champion.init.records.find(
          (C: any) => C.key === draft.championhoverid
        ).splashimg
      : undefined
  );
  const [search, setSearch] = React.useState("");
  const [hoverIndex, setHoverIndex] = React.useState(-1);
  const [selectedIndex, setSelectedIndex] = React.useState(
    draft.championhoverid
      ? D.getrecords_champion.init.records.find(
          (C: any) => C.key === draft.championhoverid
        )._id
      : undefined
  );
  const [selectors, setSelectors] = React.useState({
    assassin: {
      img: "https://highmountainlabs.io/arclight/static/media/65dec083a0ce4f406a2ed7d0.png",
      active: true,
    },
    fighter: {
      img: "https://highmountainlabs.io/arclight/static/media/65dec08ca0ce4f406a2ed7e0.png",
      active: true,
    },
    mage: {
      img: "https://highmountainlabs.io/arclight/static/media/65dec096a0ce4f406a2ed7f0.png",
      active: true,
    },
    marksman: {
      img: "https://highmountainlabs.io/arclight/static/media/65dec0a3a0ce4f406a2ed800.png",
      active: true,
    },
    support: {
      img: "https://highmountainlabs.io/arclight/static/media/65dec0b7a0ce4f406a2ed810.png",
      active: true,
    },
    tank: {
      img: "https://highmountainlabs.io/arclight/static/media/65dec0c3a0ce4f406a2ed820.png",
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
          draft={draft}
          selectors={selectors}
          selectedIndex={selectedIndex}
          search={search.toLowerCase()}
          Champion={Champion}
          index={i}
          hoverIndex={hoverIndex}
          setHoverIndex={(i: number) => setHoverIndex(i)}
          onClick={(n: number) => {
            console.log(draft);
            if (fns?.calls?.crux_hoverchampion)
              fns.calls.crux_hoverchampion({
                state: fns.readState().query.d,
                id: D.getrecords_champion.init.records.find(
                  (C: any) => C._id === Champion._id
                ).key,
              });
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
        <Card
          draft={draft}
          search={search}
          setHoverIndex={() => setHoverIndex(-1)}
        />
      );
    }
    rows.push(<div className={`flex space-x-2 justify-center`}>{row}</div>);
  }
  React.useEffect(() => {
    const id = setInterval(
      () => setTimer((lastTime: number) => lastTime - 1),
      1000
    );
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div className={`w-full h-full overflow-y-auto flex-col relative`}>
      {bgImg ? (
        <img
          className={`absolute w-full h-full object-cover opacity-10`}
          src={bgImg}
        />
      ) : null}
      <div className={`font-primary absolute top-5 right-24 text-5xl`}>
        {timer > 0 ? timer : 0}
      </div>
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
          onClick={(status: any) =>
            fns?.calls?.crux_selectchampion
              ? fns.calls.crux_selectchampion({
                  state: fns.readState().query.d,
                  champion: D.getrecords_champion.init.records.find(
                    (C: any) => C._id === selectedIndex
                  ),
                })
              : null
          }
        />
      </div>
    </div>
  );
};

export default Modal;
