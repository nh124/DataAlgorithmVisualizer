import { React, useState } from "react";
import NodeTraversal from "./Components/NodeTraversal.tsx";
import linkedList from "./Algorithms/linklist.ts";

type NodeType = {
  value: number; // Change the type as needed
  isVisible: boolean;
};

const ll = new linkedList<NodeType>();

const App = () => {
  const [inputNode, setInputNode] = useState(null);
  const [nodes, setNodes] = useState([]);

  const deleteLastNode = () => {
    let nodesCopy = [...nodes];
    const lastItem = nodesCopy[nodesCopy.length - 1];
    lastItem.isVisible = false;
    setNodes(nodesCopy);
    setTimeout(() => {
      ll.deleteLast();
      setNodes(ll.display());
    }, 1000);
    console.log(nodes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nodes.length <= 13) {
      ll.add({
        value: inputNode,
        isVisible: true,
      });
      setNodes(ll.display());
      setInputNode("");
    } else {
      alert("max has been reached");
    }
  };
  const onChange = (event) => {
    setInputNode(event.target.value);
  };
  return (
    <div className="w-full h-screen bg-slate-200 flex justify-center items-center flex-col">
      <form action="" onSubmit={handleSubmit}>
        <label>
          Enter Node:
          <input
            type="number"
            value={inputNode}
            onChange={onChange}
            required
            max="10"
          />
        </label>
        <input type="submit" className="hover:cursor-pointer" />
      </form>
      <button onClick={deleteLastNode}>Delete</button>
      <NodeTraversal nodes={nodes} />
    </div>
  );
};

export default App;
