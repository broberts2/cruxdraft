import React, { FC } from "react";

import Styles from "./styles";

const FlyCard: FC<{
  flyCard: undefined | { [key: string]: any };
  setFlyCard: Function;
}> = ({ flyCard, setFlyCard }) => {
  const animdur = 200;
  const [isFlipped, setIsFlipped] = React.useState(false);
  const Card = () => {
    return flyCard ? (
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <Styles.FlyCard
          className={`w-[380px] h-[520px] relative overflow-hidden rounded-sm`}
          style={{
            animation: `${
              isFlipped ? `fade-in-${flyCard.dir}` : `fade-out-${flyCard.dir}`
            } linear forwards`,
            animationDuration: `${animdur}ms`,
          }}
        >
          <div className={`container w-full h-full`}>
            <div
              className={`flip-card ${
                isFlipped ? "flipped" : ""
              } w-full h-full`}
            >
              <div className="flip-card-inner w-full h-full">
                <div className="flip-card-front w-full h-full">
                  <div className="card-content w-full h-full">
                    {
                      <div className={`w-full h-full relative`}>
                        <img
                          src={`https://highmountainlabs.io:7001/static/media/65dec15ba0ce4f406a2ed968.jpg`}
                          className={`w-full h-full absolute object-cover object-center`}
                        />
                      </div>
                    }
                  </div>
                </div>
                <div className="flip-card-back w-full h-full">
                  <div className="card-content w-full h-full">
                    {
                      <div className={`w-full h-full relative`}>
                        <img
                          src={flyCard.img}
                          className={`w-full h-full absolute object-cover object-center`}
                        />
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Styles.FlyCard>
      </div>
    ) : null;
  };
  React.useEffect(() => {
    if (flyCard && !isFlipped) setIsFlipped(true);
  }, [flyCard]);
  return (
    <Styles.Container
      className={`w-full h-full absolute top-0 left-0 ${
        !flyCard ? `opacity-0 pointer-events-none` : ""
      }`}
    >
      <Styles.Bg
        className={`w-full h-full absolute top-0 left-0`}
        onClick={() => {
          setIsFlipped(false);
          setTimeout(() => setFlyCard(undefined), animdur);
        }}
      />
      <Card />
    </Styles.Container>
  );
};

export default FlyCard;
