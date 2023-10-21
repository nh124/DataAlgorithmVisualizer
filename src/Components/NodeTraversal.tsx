import { React } from "react";
import Node from "./Node.tsx";

const NodeTraversal = ({ nodes }) => {
  return (
    <div className="w-full h-[80%] border bottom-3 border-black flex flex-col justify-start items-center py-6 px-4">
      <div className="flex flex-row">
        {nodes.map((value, index) => {
          return (
            <Node key={index} node={value.value} nodeStatus={value.isVisible} />
          );
        })}
      </div>
    </div>
  );
};

export default NodeTraversal;
