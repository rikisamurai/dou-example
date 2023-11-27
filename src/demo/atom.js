import { atom } from "jotai";
import { fetchAllData } from "./request";

export const allDataAtom = atom(async () => {
  const data = await fetchAllData();
  console.log("data", data, performance.now());
  return data;
});
