import { BsArrow90DegUp } from "react-icons/bs";
import { BsArrow90DegLeft } from "react-icons/bs";
import Node from "../Node/index.tsx";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import SlideContext from "../../Context/SlideContext.tsx";
import ArrowComponent from "../ArrowComponent/ArrowComponent.tsx";
import { NodeType } from "../../Algorithms/NodeType.ts";
import StoreIndexContext from "../../Context/StoreIndexContext.tsx";
const NodeTraversal = ({
  nodes,
  startAnimation,
  setStartAnimation,
}: {
  nodes: NodeType[];
  startAnimation: boolean;
  setStartAnimation: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [nodeStatusRight, setNodeStatusRight] = useState("T");
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
    } else if (nodes.length > 1) {
      updateStyleForArrow("right", slideX);
      if (currentIndex + 1 === nodes.length) {
        setTimeout(() => {
          updateStyleForArrow("right", slideX);
        }, 500);
      }
    }
  }, [nodes.length, addOrDelete, setAddOrDelete]);

  useEffect(() => {
    if (startAnimation && currentIndex < nodes.length) {
      let timeout = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        let SlidePx = Animate ? nodes.length - 1 : nodes.length - 2;
        if (counter <= SlidePx) {
          setCounter(counter + 1);
          let AnimateSlidePx = 80 * counter + 4;
          updateStyleForArrow("left", AnimateSlidePx);
        }
        setTimeout(() => {
          let AnimateSlidePx = 4;
          updateStyleForArrow("left", AnimateSlidePx);
        }, 5000);
        return () => {
          clearTimeout(timeout);
        };
      }, 1000);
    } else {
      setCurrentIndex(-1);
      setCounter(0);
      setStartAnimation(false);
    }
  }, [startAnimation, currentIndex]);

  return (
    <div className="w-full h-[80%] bg-[#354f52] flex flex-col justify-start items-start py-10 px-10 text-[#84a98c] relative">
      <div className="flex flex-col">
        <div className="flex flex-row">
          {nodes.map((value, index) => {
            return (
              <Node
                key={index}
                node={value.value}
                nodeStatus={value.isVisible}
                currentIndex={currentIndex}
                index={index}
                length={nodes.length}
                startAddAnimation={addOrDelete}
                Arrow={
                  <ArrowComponent
                    IconLeft={
                      <BsArrow90DegLeft
                        size={30}
                        style={{ color: "#84a98c", rotate: "90deg" }}
                      />
                    }
                    IconUp={
                      <BsArrow90DegUp size={30} style={{ color: "#84a98c" }} />
                    }
                    nodeStatusRight={nodeStatusRight}
                    nodeStatusLeft={nodeStatusLeft}
                    styleRight={styleRight}
                    styleLeft={styleLeft}
                  />
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NodeTraversal;
