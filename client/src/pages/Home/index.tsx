import React, { FC } from "react";
import {
  Button,
  HeroPanel,
  MissionStatement,
  Page,
  TextField,
} from "@highmountainlabs/arclight-ui";
import Header from "../../projectcomponents/header/header";
import Footer from "../../projectcomponents/footer/footer";
import Step from "./step";

import NextBttn from "./nextbttn";
import DraftDetails from "./draftdetails";

const Home: FC<{
  fns: {
    [key: string]: any;
  };
  D: { [key: string]: any };
}> = ({ fns, D }) => {
  const DEFTEAMS = {
    team1: {
      name: "Ocean Soul",
    },
    team2: {
      name: "Infernal Soul",
    },
  };
  const [teams, setTeams] = React.useState(DEFTEAMS);
  const [copyHoverIndex, setCopyHoverIndex] = React.useState(0);
  const [typeIndex, setTypeIndex] = React.useState(0);
  const [stepCount, setStepCount] = React.useState(1);
  const setBackStep = () => {
    for (let i = steps.length - 1; i > 0; i--) {
      if (steps[i].active) {
        setStepCount((s: number) => s - 1);
        const newSteps: any = Array.from(steps);
        newSteps[i].active = false;
        return setSteps(newSteps);
      }
    }
  };
  const setNextStep = () => {
    for (let i = 0; i < steps.length; i++) {
      if (!steps[i].active) {
        setStepCount((s: number) => s + 1);
        const newSteps: any = Array.from(steps);
        newSteps[i].active = true;
        return setSteps(newSteps);
      }
    }
  };
  React.useEffect(() => {
    if (!D.crux_createdraft) return;
    setNextStep();
  }, [D]);
  const sss = [
    {
      active: true,
      element: (
        <div>
          <Step text={`Step 1: Select a Draft Type`} />
          <HeroPanel
            small
            rows={1}
            index={typeIndex}
            pageCallback={(n: number) => setTypeIndex(n)}
            cards={[
              {
                // locked: league.locked,
                hoverComponent: (
                  <div>
                    <img
                      src={`http://localhost:7001/static/media/65a2e1decb7c94d5fabbb2fd.png`}
                      className={`w-24 lg:w-44 object-cover m-auto`}
                    />
                  </div>
                ),
                bgImg: `http://localhost:7001/static/media/65a2dee3cb7c94d5fabbb208.png`,
                subText: `Tournament Draft`,
                onClick: () => null,
              },
            ]}
          />
          <NextBttn label={`Next`} setNextStep={setNextStep} />
        </div>
      ),
    },
    {
      element: (
        <div className={`w-full`}>
          <Step text={`Step 2: Create Teams`} />
          <div
            className={`flex justify-center items-end space-x-28 text-background-primary`}
            style={{ textShadow: "none" }}
          >
            <TextField
              hot
              onChange={(e: any) =>
                setTeams((Teams: any) => {
                  const team1 = Teams.team1;
                  team1.name = e.target.value;
                  return { ...teams, team1 };
                })
              }
              value={teams.team1.name}
              label={"Team 1 (Blue Side)"}
              key={0}
              type={"text"}
              variant={"standard"}
            />
            <div className={`text-xl`}>VS</div>
            <TextField
              hot
              onChange={(e: any) =>
                setTeams((Teams: any) => {
                  const team2 = Teams.team2;
                  team2.name = e.target.value;
                  return { ...teams, team2 };
                })
              }
              value={teams.team2.name}
              label={"Team 2 (Red Side)"}
              key={1}
              type={"text"}
              variant={"standard"}
            />
          </div>
          <NextBttn
            label={`Next`}
            setNextStep={setNextStep}
            setBackStep={setBackStep}
          />
        </div>
      ),
    },
    {
      element: (
        <div className={`w-full`}>
          <Step text={`Step 3: Review & Finalize`} />
          <DraftDetails
            fns={fns}
            teams={teams}
            setNextStep={setNextStep}
            setBackStep={setBackStep}
          />
        </div>
      ),
    },
    {
      element: (
        <div
          className={`w-full flex-col space-y-5 text-background-primary`}
          style={{ textShadow: "none" }}
        >
          <Step text={`Draft Details`} />
          <DraftDetails teams={teams} />
          <div className={`cursor-pointer flex-col space-y-5 py-10`}>
            <div
              className={`duration-300 transition-all`}
              style={{
                opacity: !copyHoverIndex || copyHoverIndex === 1 ? 1 : 0.3,
                color: copyHoverIndex === 1 ? "purple" : undefined,
              }}
              onMouseEnter={() => setCopyHoverIndex(1)}
              onMouseLeave={() => setCopyHoverIndex(0)}
              onClick={() => console.log(fns)}
            >
              <div className={`pointer-events-none`}>
                <TextField
                  span
                  onChange={(e: any) => null}
                  value={`djkfl;adsfjadklfajskl;fadsjf;lkadsjfkdals;fjadsl;kfa`}
                  label={"Blue Link (Click to copy)"}
                  key={2}
                  type={"text"}
                  variant={"standard"}
                />
              </div>
            </div>
            <div
              className={`duration-300 transition-all`}
              style={{
                opacity: !copyHoverIndex || copyHoverIndex === 2 ? 1 : 0.3,
                color: copyHoverIndex === 2 ? "purple" : undefined,
              }}
              onMouseEnter={() => setCopyHoverIndex(2)}
              onMouseLeave={() => setCopyHoverIndex(0)}
            >
              <div className={`pointer-events-none`}>
                <TextField
                  span
                  onChange={(e: any) => null}
                  value={`djkfl;adsfjadklfajskl;fadsjf;lkadsjfkdals;fjadsl;kfa`}
                  label={"Red Link (Click to copy)"}
                  key={3}
                  type={"text"}
                  variant={"standard"}
                />
              </div>
            </div>
            <div
              className={`duration-300 transition-all`}
              style={{
                opacity: !copyHoverIndex || copyHoverIndex === 3 ? 1 : 0.3,
                color: copyHoverIndex === 3 ? "purple" : undefined,
              }}
              onMouseEnter={() => setCopyHoverIndex(3)}
              onMouseLeave={() => setCopyHoverIndex(0)}
            >
              <div className={`pointer-events-none`}>
                <TextField
                  span
                  onChange={(e: any) => null}
                  value={`djkfl;adsfjadklfajskl;fadsjf;lkadsjfkdals;fjadsl;kfa`}
                  label={"Spectator Link (Click to copy)"}
                  key={4}
                  type={"text"}
                  variant={"standard"}
                />
              </div>
            </div>
          </div>
          <Button
            onClick={() => {
              setTeams(DEFTEAMS);
              setSteps(sss);
              setStepCount(1);
              delete D.crux_createdraft;
            }}
            type={"standard"}
            size={"md"}
            animation={true}
            label={"Build Next"}
            span
          />
        </div>
      ),
    },
  ];
  const [steps, setSteps] = React.useState<any>(sss);
  return true ? (
    <Page
      fns={fns}
      // backgroundImage={{
      //   src: `http://localhost:7001/static/media/65a2dcffcb7c94d5fabbb1a3.png`,
      //   opacity: 0.5,
      // }}
    >
      <div className={`relative pb-1`}>
        <video
          src={`http://localhost:7001/static/media/65a0617d84efbfeecffaf956.mp4`}
          className={`absolute w-full h-full object-cover opacity-10`}
          muted
          autoPlay
          preload="auto"
          loop
        />
        <Header fns={fns} D={D} />
        <MissionStatement
          title={"Crux Draft"}
          Message={`Crux is a sophisticated champion drafting tool designed specifically for the competitive realm of League of Legends. It stands out as an essential asset for both professional teams and aspiring competitors, offering a deep analysis of champion strengths, weaknesses, and synergies. The tool's interface is sleek and user-friendly, allowing for easy navigation through a vast database of game statistics and historical match data. This cutting-edge tool not only enhances the strategic depth of champion selection but also elevates the overall competitive experience in League of Legends.`}
        />
      </div>
      <div
        className={`w-full relative flex items-center bg-white py-8 flex-col`}
      >
        <div
          className={`text-background-primary text-4xl mb-10`}
          style={{ textShadow: "none" }}
        >
          Draft Builder
        </div>
        <div className={`flex-col space-y-24`}>
          {sss
            .filter((el: any, i: number) => steps[i].active)
            .map((el: any, i: number) => (
              <div
                className={`transition-all duration-500 w-full`}
                style={{
                  opacity: stepCount === i + 1 ? 1 : 0.1,
                  pointerEvents: !(stepCount === i + 1) ? "none" : undefined,
                }}
              >
                {el.element}
              </div>
            ))}
        </div>
      </div>
      <Footer fns={fns} />
    </Page>
  ) : null;
};

export default Home;
