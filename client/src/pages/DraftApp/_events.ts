const A = new Audio();
A.volume = 0.3;

const AA = new Audio();
AA.volume = 0.3;

export default () => {
  const crux_draft = (setDraft, setReplay) => (state) => {
    if (state.stage === "complete") setReplay("none");
    return setDraft(state);
  };
  const lock_action = (fns) => () => fns.setModal(null);
  const play_sfx = (sfx) => {
    if (sfx === "choose")
      A.src = `https://highmountainlabs.io/arclight/static/media/65debf5ba0ce4f406a2ed66e.ogg`;
    else if (sfx === "ban")
      A.src = `https://highmountainlabs.io/arclight/static/media/65debf3da0ce4f406a2ed62e.ogg`;
    try {
      if (A) setTimeout(() => A.play(), 1);
    } catch (e) {
      console.log(e);
    }
  };
  const play_audio = (msg, D) => {
    if (D?.getrecords_champion?.init?.records) {
      const Champion = D.getrecords_champion.init.records.find(
        (C: any) => C.key === `${msg.key}`
      );
      AA.src =
        Champion[`${msg.action === "pick" ? "choose" : msg.action}audio`];
      try {
        if (AA) setTimeout(() => AA.play(), 1250);
      } catch (e) {
        console.log(e);
      }
    }
  };
  return {
    audio: {
      play_sfx,
      play_audio,
    },
    subcribe: (
      fns: { [key: string]: any },
      draft: { [key: string]: any },
      setDraft: Function,
      D: any,
      setReplay: Function
    ) => {
      fns.subscribe("crux_draft", crux_draft(setDraft, setReplay));
      fns.subscribe("lock_action", lock_action(fns));
      fns.subscribe("play_sfx", play_sfx);
      fns.subscribe("play_audio", play_audio);
    },
  };
};
