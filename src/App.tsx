import React, { useState } from "react";
import NodeTraversal from "./Components/NodeTraversal/NodeTraversal.tsx";
import linkedList from "./Algorithms/linklist.ts";
import AddNode from "./Functions/AddNode/index.tsx";
import DeleteNode from "./Functions/DeleteNode/index.tsx";
import SidePanel from "./Components/SidePanel/index.tsx";
import SlideContext from "./Context/SlideContext.tsx";
type NodeType = {
  value: number;
  isVisible: boolean;
  animation: boolean;
  timer: number;
};

const ll = new linkedList<NodeType>();
const App = () => {
  const [addOrDelete, setAddOrDelete] = useState(false);
  const [nodes, setNodes] = useState([]);
  const [slideX, setSlideX] = useState(4);
  const [startAnimation, setStartAnimation] = useState(false);
  return (
    <div className="flex flex-row">
      <SidePanel />

      <div className="flex flex-col w-full h-screen">
        <SlideContext.Provider
          value={{ addOrDelete, setAddOrDelete, slideX, setSlideX }}
        >
          <div className="w-full h-[20%] bg-[#2f3e46] flex flex-row px-5 py-5">
            <AddNode ll={ll} setNodes={setNodes} nodes={nodes} />
            <DeleteNode ll={ll} setNodes={setNodes} nodes={nodes} />
            <div className="flex h-[100px] items-center gap-3 px-4 text-white w-fit">
              <button
                className="hover:cursor-pointer w-full h-auto bg-[#52796f] rounded-sm py-2 shadow-lg hover:scale-105 ease-in-out duration-300 px-3"
                onClick={() => setStartAnimation(true)}
              >
                Traverse
              </button>
            </div>
          </div>
          <NodeTraversal
            nodes={nodes}
            startAnimation={startAnimation}
            setStartAnimation={setStartAnimation}
          />
        </SlideContext.Provider>
      </div>
    </div>
  );
};

export default App;
