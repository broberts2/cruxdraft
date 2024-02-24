import React, { FC } from "react";

const Step: FC<{ text: string }> = ({ text }) => {
  const Line = () => <div className={`w-96 h-[1px] bg-black`} />;
  return (
    <div className={`flex space-x-3 items-center mt-10 w-full justify-center`}>
      <Line />
      <div
        className={`text-background-primary text-xl`}
        style={{ textShadow: "none" }}
      >
        {text}
      </div>
      <Line />
    </div>
  );
};

export default Step;
