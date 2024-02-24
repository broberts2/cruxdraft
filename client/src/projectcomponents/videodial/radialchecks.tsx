import React, { FC } from "react";
import Styles from "./styles";

const RadialChecks: FC<{}> = React.memo(({}) => {
  return (
    <div
      className={`absolute w-72 h-72 animate-spin`}
      style={{ animation: `spin 35s linear infinite` }}
    ></div>
  );
});

export default RadialChecks;
