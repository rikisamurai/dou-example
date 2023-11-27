import { useAtom, useSetAtom } from "jotai";
import { targetsAtom } from "./atom.js";
import { changeTargetsDataAtom } from "./mutation.js";

export default function Target() {
  const [targets] = useAtom(targetsAtom);
  const change = useSetAtom(changeTargetsDataAtom);

  const handleClick = (target) => () => {
    change(target);
  };

  return (
    <div className={"flex gap-4"}>
      {targets.map((target) => (
        <h3 onClick={handleClick(target)} key={target}>
          {target}
        </h3>
      ))}
    </div>
  );
}
