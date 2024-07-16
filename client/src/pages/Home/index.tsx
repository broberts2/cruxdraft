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
  const [links, setLinks] = React.useState({
    bluelink: undefined,
    redlink: undefined,
    spectatorlink: undefined,
  });
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
    if (
      stepCount === 3 &&
      !links.bluelink &&
      !links.redlink &&
      !links.spectatorlink
    ) {
      setLinks({
        bluelink: D.crux_createdraft.bluelink,
        redlink: D.crux_createdraft.redlink,
        spectatorlink: D.crux_createdraft.spectatorlink,
      });
    }
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
                bgImg: `https://highmountainlabs.io/arclight/static/media/65dec21aa0ce4f406a2ed9c9.png`,
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
            {["Blue", "Red", "Spectator"].map((el: any, n: number) => (
              <div
                className={`duration-300 transition-all`}
                style={{
                  opacity:
                    !copyHoverIndex || copyHoverIndex === n + 1 ? 1 : 0.3,
                  color: copyHoverIndex === n + 1 ? "purple" : undefined,
                }}
                onMouseEnter={() => setCopyHoverIndex(n + 1)}
                onMouseLeave={() => setCopyHoverIndex(0)}
                onClick={() =>
                  links[`${el.toLowerCase()}link`]
                    ? navigator.clipboard.writeText(
                        links[`${el.toLowerCase()}link`]
                      )
                    : null
                }
              >
                <div className={`pointer-events-none`}>
                  <TextField
                    span
                    onChange={(e: any) => null}
                    value={links[`${el.toLowerCase()}link`]}
                    label={`${el} Link (Click to copy)`}
                    key={n + 2}
                    type={"text"}
                    variant={"standard"}
                  />
                </div>
              </div>
            ))}
          </div>
          <Button
            onClick={() => {
              return window.location.reload();
              setTeams(DEFTEAMS);
              setSteps(sss);
              setStepCount(1);
              setLinks({
                bluelink: undefined,
                redlink: undefined,
                spectatorlink: undefined,
              });
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
  return D?.getrecords_settings?.init?.records[0] ? (
    <Page
      fns={fns}
      // backgroundImage={{
      //   src: `http://localhost:7001/static/media/65a2dcffcb7c94d5fabbb1a3.png`,
      //   opacity: 0.5,
      // }}
    >
      <div className={`relative pb-10`}>
        <video
          src={D.getrecords_settings.init.records[0].cruxtheme.backgroundvideo}
          className={`absolute w-full h-full object-cover opacity-10`}
          muted
          autoPlay
          loop
        />
        <Header fns={fns} D={D} />
        <MissionStatement title={"Crux Draft"} Message={``} />
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
