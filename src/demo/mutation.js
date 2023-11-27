import { atom } from "jotai";
import { fetchVideoByTarget } from "./request.js";
import { videosAtom } from "./atom.js";

export const changeTargetsDataAtom = atom(null, async (get, set, target) => {
  const videos = await fetchVideoByTarget(target);
  set(videosAtom, videos);
});
