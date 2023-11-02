import { FaArrowRightLong } from "react-icons/fa6";
import DelayRender from "../../Hooks/DelayRender.tsx";
import StoreIndexContext from "../../Context/StoreIndexContext.tsx";
import { useContext } from "react";
import NodeContext from "../../Context/NodeContext.tsx";
const Node = ({ Arrow }: { Arrow: React.ReactNode }) => {
  const shouldRender = DelayRender(1000);
  const { foundIndex, Animate } = useContext(StoreIndexContext);
  const { currentIndex, index, startAddAnimation, node, nodeStatus, length } =
    useContext(NodeContext);
  return (
    <div className="flex flex-col w-[80px]">
      <div
        className={`${
          currentIndex === index ? "animate-fadeAnimation" : ""
        } ml-2 opacity-0`}
      >
        Hello
      </div>
      <div
        className={`flex flex-row items-center  w-[80px] text-white relative ${
          !nodeStatus ? "animate-zoomoutAnimation" : ""
        } 
      
      `}
      >
        <div
          className={`box w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#84a98c] font-bold text-2xl ${
            index == length - 1 && startAddAnimation
              ? "animate-zoominAnimation"
              : ""
          } relative z-10 ${
            currentIndex === index ? "bg-[#a8d6b3] animate-traverAnimate" : ""
          } ${foundIndex === index && Animate ? "animate-flashAnimation" : ""}`}
        >
          {node}
        </div>
        {shouldRender ? (
          <div className={`animate-slideAnimation absolute right-0 z-0}`}>
            <FaArrowRightLong size={30} color="#84a98c" />
          </div>
        ) : null}
        {index === 0 ? Arrow : null}
      </div>
    </div>
  );
};

export default Node;
