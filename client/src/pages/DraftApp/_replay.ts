import moment from "moment";

export default (
  D: any,
  eventsfns: any,
  setReplay: Function,
  replay?: string,
  draft?: { [key: string]: any },
  setDraft?: Function
) => {
  if (
    replay === "none" ||
    !replay ||
    !replay.includes("transition") ||
    !draft ||
    !setDraft
  )
    return;
  const TIMER = JSON.parse(draft.data).timerseconds;
  const TRANSITION_TIME = 3;
  const run = async () => {
    setDraft((d: any) => ({
      ...d,
      events: [],
      nextevent: JSON.parse(JSON.stringify(draft.events[0])),
      duration: 0,
      timer: TIMER,
      stage: "draftsetup",
    }));
    await new Promise((r: any) => setTimeout(r, 4000));
    const EVENTS = JSON.parse(JSON.stringify(draft.events)).map(
      (e: any, i: number) => ({
        ...e,
        actiontime: (() => {
          if (replay.includes("timed")) return ((4 * 60000) / 20) * (i + 1);
          const diff = moment(e.time).diff(moment(draft.starteddate));
          const m = moment().add(diff);
          return m.diff(moment());
        })(),
      })
    );
    setDraft((d: any) => ({ ...d, stage: "active" }));
    const interval = () => {
      let t = TRANSITION_TIME;
      return () =>
        setDraft((d: any) => {
          if (d.stage === "postchampionselect" && t) {
            t--;
            return { ...d, duration: d.duration + 1 };
          } else if (d.stage === "complete") {
            clearInterval(intervalID);
            return d;
          }
          t = TRANSITION_TIME;
          return {
            ...d,
            stage: "active",
            duration: d.duration + 1,
            timer: d.timer - 1,
          };
        });
    };
    const intervalID = setInterval(interval(), 1000);
    const recurr = (events: any, nextevent?: any) => {
      const E = events.shift();
      setTimeout(() => {
        setDraft((d: any) => ({
          ...d,
          stage: nextevent ? "postchampionselect" : "complete",
          timer: TIMER + 1,
          events: d.events.concat(E),
          nextevent,
        }));
        eventsfns.play_sfx(E.action);
        eventsfns.play_audio(E, D);
      }, E.actiontime);
      return events.length ? recurr(events, events[1]) : null;
    };
    recurr(EVENTS, EVENTS[1]);
  };
  setTimeout(() => {
    setReplay(replay.split("-")[0]);
    if (replay.split("-")[0] !== "view") run();
  }, 1250);
};
