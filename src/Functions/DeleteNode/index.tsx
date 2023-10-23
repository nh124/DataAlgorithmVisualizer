// import React, { useState } from "react";
import { useContext } from "react";
import SlideContext from "../../Context/SlideContext";
const DeleteNode = ({ ll, setNodes, nodes }) => {
  const { addOrDelete, setAddOrDelete, setSlideX, slideX } =
    useContext(SlideContext);
  const deleteLastNode = () => {
    if (nodes.length > 0) {
      let nodesCopy = [...nodes];
      const lastItem = nodesCopy[nodesCopy.length - 1];
      lastItem.isVisible = false;
      setNodes(nodesCopy);
      setAddOrDelete(false);
      if (nodes.length > 1) {
        setSlideX(slideX - 80);
      }

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
