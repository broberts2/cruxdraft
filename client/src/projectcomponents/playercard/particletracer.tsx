import React, { FC } from "react";
import Styles from "./styles";

const ParticleTracer: FC<{ tracer?: boolean; bottom?: boolean }> = ({
  tracer,
  bottom,
}) => {
  if (!tracer) return <div />;
  const SIZE = 1;
  return (
    <React.Fragment>
      {(() => {
        const particles: any = [];
        for (let i = 0; i < 50; i++) {
          const s = SIZE;
          particles.push(
            <Styles.Tracer
              //@ts-ignore
              bottom={bottom}
              className={`absolute ${bottom ? "bottom" : "top"}-0 ${
                bottom ? "right" : "left"
              }-0 -translate-x-1/2 -translate-y-1/2 rounded-full`}
              style={{
                animationDuration: `5s`,
                animationDelay: `${i / 70}s`,
                transform: `translate(-50%,-50%) scale(${s})`,
                opacity: s,
              }}
            />
          );
        }
        return particles;
      })()}
    </React.Fragment>
  );
};

export default ParticleTracer;
