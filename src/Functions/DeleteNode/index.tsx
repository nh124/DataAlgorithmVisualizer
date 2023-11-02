// import React, { useState } from "react";
import { useContext } from "react";
import SlideContext from "../../Context/SlideContext";
import Button from "../../Components/ButtonComponent/Button";
import { NodeType } from "../../Algorithms/NodeType";
import LinkedList from "../../Algorithms/linklist";

const DeleteNode = ({
  ll,
  setNodes,
  nodes,
  setStartAnimation,
}: {
  ll: LinkedList<NodeType>;
  setNodes: React.Dispatch<React.SetStateAction<NodeType[]>>;
  nodes: NodeType[];
  setStartAnimation: React.Dispatch<boolean>;
}) => {
  const { setAddOrDelete, setSlideX, slideX } = useContext(SlideContext);
  const deleteLastNode = () => {
    let animationDuration = (nodes.length - 1) * 1000;
    if (nodes.length > 0) {
      setStartAnimation(true);
      let nodesCopy = [...nodes];
      const lastItem = nodesCopy[nodesCopy.length - 1];

      setTimeout(() => {
        setNodes(nodesCopy);
        setAddOrDelete(false);
        setSlideX(slideX - 80);
        lastItem.isVisible = false;
      }, animationDuration + 1000);

      setTimeout(() => {
        setStartAnimation(false);
      }, animationDuration + 1000);

      setTimeout(() => {
        ll.deleteLast();
        setNodes(ll.display());
      }, animationDuration + 2000);
    }
  };

  return <Button action={deleteLastNode} value={"Delete Last Node"} />;
};

export default DeleteNode;
