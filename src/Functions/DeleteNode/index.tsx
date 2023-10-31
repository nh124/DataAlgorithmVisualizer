// import React, { useState } from "react";
import { useContext } from "react";
import SlideContext from "../../Context/SlideContext";
const DeleteNode = ({ ll, setNodes, nodes }) => {
  const { setAddOrDelete, setSlideX, slideX } = useContext(SlideContext);
  const deleteLastNode = () => {
    if (nodes.length > 0) {
      let nodesCopy = [...nodes];
      const lastItem = nodesCopy[nodesCopy.length - 1];
      lastItem.isVisible = false;
      setNodes(nodesCopy);
      setAddOrDelete(false);

      setSlideX(slideX - 80);
      setTimeout(() => {
        ll.deleteLast();
        setNodes(ll.display());
      }, 1000);
    }
  };

  return (
    <div className="flex h-[100px] items-center gap-3 px-4 text-white w-fit">
      <button
        className="hover:cursor-pointer w-full h-auto bg-[#52796f] rounded-sm py-2 shadow-lg hover:scale-105 ease-in-out duration-300 px-3"
        onClick={deleteLastNode}
      >
        Delete Last Node
      </button>
    </div>
  );
};

export default DeleteNode;
