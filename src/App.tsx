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
  const [slideX, setSlideX] = useState(0);
  return (
    <div className="flex flex-row">
      <SidePanel />

      <div className="flex flex-col w-full h-screen">
        <SlideContext.Provider
          value={{ addOrDelete, setAddOrDelete, slideX, setSlideX }}
        >
          <div className="w-full h-[20%] bg-slate-200 flex flex-col px-5 py-5 gap-5">
            <AddNode ll={ll} setNodes={setNodes} nodes={nodes} />
            <DeleteNode ll={ll} setNodes={setNodes} nodes={nodes} />
          </div>
          <NodeTraversal nodes={nodes} />
        </SlideContext.Provider>
      </div>
    </div>
  );
};

export default App;
