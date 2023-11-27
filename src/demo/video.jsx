import { useAtom } from "jotai";
import { allDataAtom } from "./atom.js";

export default function Video({ video }) {
  const [allData] = useAtom(allDataAtom);
  const handleClick = (target) => () => {
    alert(target);
  };

  return (
    <div className={'flex gap-4'}>
      {allData.video.map((video) => (
        <h3 onClick={handleClick(video)} key={video}>
          {video}
        </h3>
      ))}
    </div>
  );
}
