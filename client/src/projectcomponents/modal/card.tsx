import React, { FC } from "react";
import { FontAwesome } from "@highmountainlabs/arclight-ui";

const Card: FC<{
  Champion?: any;
  draft: any;
  index?: number;
  hoverIndex?: number;
  setHoverIndex?: Function;
  search: string;
  onClick?: Function;
  selectedIndex?: number;
  selectors?: Object;
}> = ({
  Champion,
  draft,
  index,
  hoverIndex,
  setHoverIndex,
  search,
  onClick,
  selectedIndex,
  selectors,
}) => {
  const tags = selectors
    ? Object.keys(selectors).filter((key: string) =>
        Champion.tags.find((tag: string) =>
          key.toLowerCase().includes(tag.toLowerCase())
        )
      )
    : undefined;
  const cond = Champion
    ? tags &&
      selectors &&
      tags.filter((tag: string) =>
        Object.keys(selectors).find(
          (key: string) =>
            key.toLowerCase() === tag.toLowerCase() && selectors[key].active
        )
      ).length &&
      (!search.length ||
        Champion.name.toLowerCase().includes(search.toLowerCase()))
    : undefined;
  const selected =
    Champion &&
    draft?.events?.length &&
    draft.events.find(
      (e: any) => parseInt(e.key) && Champion.key === `${e.key}`
    );
  return Champion ? (
    <div
      onClick={() => (onClick && cond ? onClick(index) : null)}
      className={`w-32 h-40 bg-black flex-col transition-opacity duration-300 relative`}
      onMouseEnter={() => (setHoverIndex ? setHoverIndex(index) : null)}
      style={{
        opacity: cond
          ? (!hoverIndex && hoverIndex !== 0) ||
            (hoverIndex < 0 && !selectedIndex) ||
            selectedIndex === Champion._id
            ? 1
            : index === hoverIndex
            ? 1
            : 0.5
          : 0,
        height: !cond ? 0 : undefined,
        overflowY: "hidden",
        pointerEvents: selected ? "none" : undefined,
      }}
    >
      <div
        className={`w-full h-full`}
        style={{ opacity: selected ? 0.3 : undefined }}
      >
        {selectors && tags ? (
          <div
            className={`absolute flex top-0 right-0 duration-0`}
            style={{ opacity: cond ? 1 : 0 }}
          >
            {tags.map((key: string, n: number) => {
              return (
                <div>
                  <img
                    src={selectors[key].img}
                    className={`w-5 object-cover`}
                  />
                </div>
              );
            })}
          </div>
        ) : null}
        <img
          src={Champion.img}
          className={`object-cover w-full h-2/3 origin-right object-right`}
        />
        <div
          className={`h-1/3 flex items-center duration-0`}
          style={{ opacity: cond ? 1 : 0 }}
        >
          <div className={`m-auto text-md`}>{Champion.name}</div>
        </div>
      </div>
      {selected ? (
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
        >
          <FontAwesome icon={"lock"} size={"lg"} />
        </div>
      ) : null}
    </div>
  ) : (
    <div
      className={`w-32 h-0`}
      onMouseEnter={() => (setHoverIndex ? setHoverIndex() : null)}
    />
  );
};

export default Card;
