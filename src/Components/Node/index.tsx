import { React } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import DelayRender from "../../Hooks/DelayRender.tsx";
const Node = ({ node, nodeStatus }) => {
  const shouldRender = DelayRender(1000);
  return (
    <div
      className={`flex flex-row items-center relative  w-[80px] ${
        !nodeStatus ? "animate-zoomoutAnimation" : ""
      }`}
    >
      <div
        className={`box w-[50px] h-[50px] rounded-full flex justify-center items-center bg-green-800 font-bold text-green-800 text-3xl animate-zoominAnimation relative z-10 `}
      >
        {node}
      </div>

      {shouldRender ? (
        <div className={`animate-slideAnimation absolute right-0 z-0}`}>
          <FaArrowRightLong size={30} color="#2E7D32" />
        </div>
      ) : null}
    </div>
  );
};

export default Node;
