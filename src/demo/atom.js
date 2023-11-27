import { atom } from "jotai";
import { fetchAllData } from "./request";
import { atomWithDefault } from "jotai/utils";

/* 🚨DO-NOT-WRITE */
export const allDataAtom = atom(async () => {
  const data = await fetchAllData();
  console.log("data", data, performance.now());
  return data;
});

export const targetsAtom = atomWithDefault(async (get) => {
  const data = await get(allDataAtom);
  return data.target;
});

export const videosAtom = atomWithDefault(async (get) => {
  const data = await get(allDataAtom);
  return data.video;
});
