import { BsArrow90DegUp } from "react-icons/bs";
import Node from "../Node/index.tsx";
import { useEffect, useState } from "react";
import { useContext } from "react";
import SlideContext from "../../Context/SlideContext.tsx";
const NodeTraversal = ({ nodes }) => {
  const { addOrDelete, setAddOrDelete, slideX } = useContext(SlideContext);
  const [prevNodesLength, setPrevNodesLength] = useState(0);
  const [style, setStyle] = useState({ transform: `translateX(${slideX}px)` });
  useEffect(() => {
    if (nodes.length < 1 || addOrDelete === null) {
      return;
    }
    if (addOrDelete === true) {
      console.log(slideX);
      const updatedStyle = {
        transform: `translateX(${slideX}px)`,
        transition: "transform 0.3s ease-in-out",
      };
      setStyle(updatedStyle);
    } else if (addOrDelete === false) {
      console.log(slideX);
      const updatedStyle = {
        transform: `translateX(${slideX}px)`,
        transition: "transform 0.3s ease-in-out",
      };
      setStyle(updatedStyle);
    }

    console.log(style);
  }, [nodes.length, addOrDelete, setAddOrDelete]);
  return (
    <div className="w-full h-[80%] border bottom-3 border-black flex flex-col justify-start items-start py-10 px-10">
      <div className="flex flex-col">
        <div className="flex flex-row">
          {nodes.map((value, index) => {
            return (
              <Node
                key={index}
                node={value.value}
                nodeStatus={value.isVisible}
              />
            );
          })}
        </div>

        {nodes.length > 0 && (
          <div
            className={`ml-4 flex flex-row gap-3 mt-2 w-[200px] animate-slideAnimation`}
            style={style}
          >
            <BsArrow90DegUp size={30} />
            <span className="flex mt-4">{slideX}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NodeTraversal;
