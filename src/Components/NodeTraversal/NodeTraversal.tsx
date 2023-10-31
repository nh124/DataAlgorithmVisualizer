import { BsArrow90DegUp } from "react-icons/bs";
import { BsArrow90DegLeft } from "react-icons/bs";
import Node from "../Node/index.tsx";
import { useEffect, useState } from "react";
import { useContext } from "react";
import SlideContext from "../../Context/SlideContext.tsx";
const NodeTraversal = ({ nodes, startAnimation, setStartAnimation }) => {
  const { addOrDelete, setAddOrDelete, slideX } = useContext(SlideContext);
  const [style1, setStyle1] = useState({
    transform: `translateX(${slideX}px)`,
  });
  const [style2, setStyle2] = useState({
    transform: `translateX(${slideX}px)`,
  });
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [nodeStatus1, setNodeStatus1] = useState("T");
  const [nodeStatus2, setNodeStatus2] = useState("H");

  useEffect(() => {
    if (nodes.length < 1 || addOrDelete === null) {
      return;
    } else if (nodes.length > 1) {
      if (addOrDelete === true) {
        const updatedStyle = {
          transform: `translateX(${slideX}px)`,
          transition: "transform 0.3s ease-in-out",
        };
        setStyle1(updatedStyle);
      } else if (addOrDelete === false) {
        const updatedStyle = {
          transform: `translateX(${slideX}px)`,
          transition: "transform 0.3s ease-in-out",
        };
        setStyle2(updatedStyle);
        setTimeout(() => {
          setStyle1(updatedStyle);
        }, 2000);
      }
    }
  }, [nodes.length, addOrDelete, setAddOrDelete]);

  useEffect(() => {
    if (startAnimation && currentIndex < nodes.length) {
      let timeout = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        return () => {
          clearTimeout(timeout);
        };
      }, 1000);
    } else {
      setCurrentIndex(-1);
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
                startAnimation={startAnimation}
              />
            );
          })}
        </div>

        {nodes.length > 0 && (
          <div className="flex flex-row absolute top-[9%] left-0 gap-2">
            <div
              className={`flex flex-row gap-3 w-fit animate-slideAnimation`}
              style={style2}
            >
              <span className="flex mt-3">{nodeStatus2}</span>
              <BsArrow90DegLeft
                size={30}
                style={{ color: "#84a98c", rotate: "90deg" }}
              />
            </div>
            <div
              className={`flex flex-row gap-3 w-fit animate-slideAnimation`}
              style={style1}
            >
              <BsArrow90DegUp size={30} style={{ color: "#84a98c" }} />
              <span className="flex mt-3">{nodeStatus1}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NodeTraversal;
