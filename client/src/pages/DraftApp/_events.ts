const A = new Audio();
const AA = new Audio();
A.muted = true;
AA.muted = true;

export default (
  fns: { [key: string]: any },
  draft: { [key: string]: any },
  setDraft: Function,
  D: any
) => {
  fns.subscribe("crux_draft", (state) => setDraft(state));
  fns.subscribe("lock_action", () => fns.setModal(null));
  fns.subscribe("play_sfx", (sfx) => {
    A.muted = false;
    if (sfx === "choose")
      A.src = `https://highmountainlabs.io/arclight/static/media/65debf5ba0ce4f406a2ed66e.ogg`;
    else if (sfx === "ban")
      A.src = `https://highmountainlabs.io/arclight/static/media/65debf3da0ce4f406a2ed62e.ogg`;
    try {
      const fn = () => A.play();
      if (A)
        A.addEventListener("canplay", () => {
          fn();
          A.removeEventListener("canplay", fn);
        });
    } catch (e) {}
  });
  fns.subscribe("play_audio", (msg) => {
    if (D?.getrecords_champion?.init?.records) {
      AA.muted = false;
      const Champion = D.getrecords_champion.init.records.find(
        (C: any) => C.key === msg.key
      );
      AA.src = Champion[`${msg.action}audio`];
      try {
        const fn2 = () => AA.play();
        if (AA)
          AA.addEventListener("canplay", () => {
            fn2();
            AA.removeEventListener("canplay", fn2);
          });
      } catch (e) {}
    }
  });
};
