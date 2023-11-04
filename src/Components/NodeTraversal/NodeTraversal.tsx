import { BsArrow90DegUp } from "react-icons/bs";
import { BsArrow90DegLeft } from "react-icons/bs";
import Node from "../Node/index.tsx";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import SlideContext from "../../Context/SlideContext.tsx";
import ArrowComponent from "../ArrowComponent/ArrowComponent.tsx";
import { NodeType } from "../../Algorithms/NodeType.ts";
import StoreIndexContext from "../../Context/StoreIndexContext.tsx";
import NodeContext from "../../Context/NodeContext.tsx";
const NodeTraversal = ({
  nodes,
  startAnimation,
  setStartAnimation,
  input,
}: {
  nodes: NodeType[];
  startAnimation: boolean;
  setStartAnimation: React.Dispatch<React.SetStateAction<boolean>>;
  input: number;
}) => {
  const { addOrDelete, setAddOrDelete, slideX } = useContext(SlideContext);
  const { Animate } = useContext(StoreIndexContext);
  const [styleRight, setStyleRight] = useState({
    transform: `translateX(${slideX}px)`,
  });
  const [styleLeft, setStyleLeft] = useState({
    transform: `translateX(${slideX}px)`,
  });
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [counter, setCounter] = useState(0);
  const [nodeStatusRight] = useState("T"); //   const [nodeStatusRight, setNodeStatusRight] = useState("T");
  const [nodeStatusLeft, setNodeStatusLeft] = useState("H");

  const updateStyleForArrow = (direction: string, distance: number) => {
    const updatedStyle = {
      transform: `translateX(${distance}px)`,
      transition: "transform 0.3s ease-in-out",
    };
    if (direction === "right") setStyleRight(updatedStyle);
    if (direction === "left") setStyleLeft(updatedStyle);
  };
  useEffect(() => {
    if (nodes.length < 1 || addOrDelete === null) {
      return;
    } else if (nodes.length >= 1) {
      updateStyleForArrow("right", 80 * (nodes.length - 1) + 10);
      if (currentIndex + 1 === nodes.length) {
        setTimeout(() => {
          updateStyleForArrow("right", slideX);
        }, 500);
      }
    }
  }, [nodes.length, addOrDelete, setAddOrDelete, nodes]);

  useEffect(() => {
    if (startAnimation && currentIndex < nodes.length) {
      let timeout = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        let SlidePx = Animate ? nodes.length - 1 : nodes.length - 2;
        if (counter <= SlidePx) {
          setCounter(counter + 1);
          let AnimateSlidePx = 80 * counter + 20;
          updateStyleForArrow("left", AnimateSlidePx);
          console.log(addOrDelete);
          if (addOrDelete)
            setNodeStatusLeft(
              nodes[counter].value.toString() +
                `${nodes[counter].value === input ? "=" : "=/="}` +
                input
            );
          if (!addOrDelete)
            try {
              nodes[counter + 2].value.toString();
              setNodeStatusLeft(
                `node->-> ${nodes[counter + 2].value.toString()}`
              );
            } catch (e) {
              setNodeStatusLeft("node->-> null");
            }
        }
        return () => {
          clearTimeout(timeout);
        };
      }, 1000);
    } else {
      setCurrentIndex(-1);
      setCounter(0);
      setStartAnimation(false);
      let waitTime = setTimeout(() => {
        let AnimateSlidePx = 20;
        updateStyleForArrow("left", AnimateSlidePx);
        setNodeStatusLeft("H");
      }, 1000);
      return () => clearTimeout(waitTime);
    }
  }, [startAnimation, currentIndex]);

  return (
    <div className="w-full h-full bg-[#354f52] flex flex-col justify-start items-start py-10 px-10 text-[#84a98c] relative">
      <div className="flex flex-col">
        <div className="flex flex-row px-5 py-3 rounded-lg max-sm:max-w-[400px] max-md:max-w-[600px] max-lg:max-w-[800px] max-xl:max-w-full overflow-x-auto whitespace-nowrap h-[150px] ">
          {nodes.map((value, index) => {
            return (
              <NodeContext.Provider
                key={index}
                value={{
                  node: value.value,
                  nodeStatus: value.isVisible,
                  currentIndex: currentIndex,
                  index: index,
                  length: nodes.length,
                  startAddAnimation: addOrDelete,
                  nodeStatusRight: nodeStatusRight,
                  nodeStatusLeft: nodeStatusLeft,
                }}
              >
                <Node
                  key={index}
                  startAnimation={startAnimation}
                  Arrow={
                    <ArrowComponent
                      IconLeft={
                        <BsArrow90DegLeft
                          size={30}
                          style={{ color: "#84a98c", rotate: "90deg" }}
                        />
                      }
                      IconUp={
                        <BsArrow90DegUp
                          size={30}
                          style={{ color: "#84a98c" }}
                        />
                      }
                      styleRight={styleRight}
                      styleLeft={styleLeft}
                    />
                  }
                />
              </NodeContext.Provider>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NodeTraversal;
