import { useAtom } from "jotai";
import { allDataAtom } from "./atom.js";

export default function Target({ targets }) {
  const [allData] = useAtom(allDataAtom);
  const handleClick = (target) => () => {
    alert(target);
  };

  return (
    <div className={"flex gap-4"}>
      {allData.target.map((target) => (
        <h3 onClick={handleClick(target)} key={target}>
          {target}
        </h3>
      ))}
    </div>
  );
}
