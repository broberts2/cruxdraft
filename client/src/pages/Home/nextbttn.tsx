import React, { FC } from "react";
import { Button } from "@highmountainlabs/arclight-ui";

const NextBttn: FC<{
  label: string;
  setNextStep: Function;
  setBackStep?: Function;
}> = ({ label, setNextStep, setBackStep }) => {
  return (
    <div className={`w-full`}>
      <div className={`w-96 m-auto py-10 flex space-x-1`}>
        {setBackStep ? (
          <Button
            onClick={setBackStep}
            type={"standard"}
            size={"md"}
            animation={true}
            idleIcon={"arrow-left"}
          />
        ) : null}
        <Button
          onClick={setNextStep}
          type={"standard"}
          size={"md"}
          animation={true}
          label={label}
          span
        />
      </div>
    </div>
  );
};

export default NextBttn;
