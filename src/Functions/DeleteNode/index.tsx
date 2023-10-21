import React, { useState } from "react";

const DeleteNode = ({ ll, setNodes, nodes }) => {
  const deleteLastNode = () => {
    if (nodes.length > 0) {
      let nodesCopy = [...nodes];
      const lastItem = nodesCopy[nodesCopy.length - 1];
      lastItem.isVisible = false;
      setNodes(nodesCopy);

      setTimeout(() => {
        ll.deleteLast();
        setNodes(ll.display());
      }, 1000);
    }
  };

  return (
    <div className="flex w-[14%] py-2 hover:cursor-pointer h-auto bg-gray-700 rounded-sm shadow-lg hover:scale-105 ease-in-out duration-300 justify-center ml-5">
      <button onClick={deleteLastNode}>Delete Last Node</button>
    </div>
  );
};

export default DeleteNode;
