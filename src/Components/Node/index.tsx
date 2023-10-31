import { React } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import DelayRender from "../../Hooks/DelayRender.tsx";
const Node = ({ node, nodeStatus, index, currentIndex, startAnimation }) => {
  const shouldRender = DelayRender(1000);
  return (
    <div
      className={`flex flex-row items-center relative  w-[80px] text-white ${
        !nodeStatus ? "animate-zoomoutAnimation" : ""
      } 
      
      `}
    >
      <div
        className={`box w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#84a98c] font-bold text-2xl ${
          !startAnimation ? "animate-zoominAnimation" : ""
        } relative z-10 ${
          currentIndex === index ? "bg-[#84a98c] animate-traverAnimate" : ""
        }`}
      >
        {node}
      </div>

      {shouldRender ? (
        <div className={`animate-slideAnimation absolute right-0 z-0}`}>
          <FaArrowRightLong size={30} color="#84a98c" />
        </div>
      ) : null}
    </div>
  );
};

export default Node;
