import { useState } from "react";
import NodeTraversal from "./Components/NodeTraversal/NodeTraversal.tsx";
import linkedList from "./Algorithms/linklist.ts";
import AddNode from "./Functions/AddNode/index.tsx";
import DeleteNode from "./Functions/DeleteNode/index.tsx";
import SidePanel from "./Components/SidePanel/index.tsx";
import SlideContext from "./Context/SlideContext.tsx";
import { NodeType } from "./Algorithms/NodeType.ts";
import FindValue from "./Functions/FindValue/FindValue.tsx";
import StoreIndexContext from "./Context/StoreIndexContext.tsx";

const ll = new linkedList<NodeType>();
const App = () => {
  const [addOrDelete, setAddOrDelete] = useState(false);
  const [nodes, setNodes] = useState<NodeType[]>([]);
  const [slideX, setSlideX] = useState(4);
  const [startAnimation, setStartAnimation] = useState(false);
  const [foundIndex, setFoundIndex] = useState(-1);
  const [Animate, setAnimate] = useState(false);
  return (
    <div className="flex flex-row">
      <SidePanel />

      <div className="flex flex-col w-full h-screen">
        <SlideContext.Provider
          value={{ addOrDelete, setAddOrDelete, slideX, setSlideX }}
        >
          <StoreIndexContext.Provider
            value={{ foundIndex, setFoundIndex, Animate, setAnimate }}
          >
            <div className="w-full h-[20%] bg-[#2f3e46] flex flex-row px-5 py-5">
              <AddNode ll={ll} setNodes={setNodes} nodes={nodes} />
              <DeleteNode
                ll={ll}
                setNodes={setNodes}
                nodes={nodes}
                setStartAnimation={setStartAnimation}
              />
              <FindValue ll={ll} setStartAnimation={setStartAnimation} />
            </div>

            <NodeTraversal
              nodes={nodes}
              startAnimation={startAnimation}
              setStartAnimation={setStartAnimation}
            />
          </StoreIndexContext.Provider>
        </SlideContext.Provider>
      </div>
    </div>
  );
};

export default App;
