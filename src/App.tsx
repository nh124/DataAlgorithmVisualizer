import { React, useState } from "react";
import NodeTraversal from "./Components/NodeTraversal/NodeTraversal.tsx";
import linkedList from "./Algorithms/linklist.ts";
import AddNode from "./Functions/AddNode/index.tsx";
import DeleteNode from "./Functions/DeleteNode/index.tsx";
import SidePanel from "./Components/SidePanel/index.tsx";

type NodeType = {
  value: number;
  isVisible: boolean;
};
const ll = new linkedList<NodeType>();
const App = () => {
  const [nodes, setNodes] = useState([]);
  return (
    <div className="flex flex-row">
      <SidePanel />
      <div className="flex flex-col w-full h-screen">
        <div className="w-full h-[20%] bg-slate-200 flex flex-col px-5 py-5 gap-5">
          <AddNode ll={ll} setNodes={setNodes} nodes={nodes} />
          <DeleteNode ll={ll} setNodes={setNodes} nodes={nodes} />
        </div>
        <NodeTraversal nodes={nodes} />
      </div>
    </div>
  );
};

export default App;
