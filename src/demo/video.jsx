import { useAtom } from "jotai";
import { videosAtom } from "./atom.js";

export default function Video() {
  const [videos] = useAtom(videosAtom);
  const handleClick = (target) => () => {
    alert(target);
  };

  return (
    <div className={"flex gap-4"}>
      {videos.map((video) => (
        <h3 onClick={handleClick(video)} key={video}>
          {video}
        </h3>
      ))}
    </div>
  );
}
