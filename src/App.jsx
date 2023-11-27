import { useAtom } from "jotai";
import { allDataAtom } from "./demo/atom.js";
import { Suspense } from "react";
import Target from "./demo/target.jsx";
import Video from "./demo/video.jsx";

function App() {
  return (
    <div className={'flex gap-5 flex-col'}>
      <p>组件联动demo</p>
      <div className={"min-h-[200px] border-2 border-solid"}>
        <h2>Target</h2>
        <Suspense fallback={<div>Loading Target</div>}>
          <Target />
        </Suspense>
      </div>
      <div className={"min-h-[200px] border-2 border-solid"}>
        <h2>Video</h2>
        <Suspense fallback={<div>Loading Video</div>}>
          <Video />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
