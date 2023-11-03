import { BsCircle, BsArrowRight } from "react-icons/bs";
const NodeIcon = ({ size, status }: { size: number; status: string }) => {
  return (
    <div className={`w-fit h-fit flex flex-row relative group overflow-hidden`}>
      <div className="w-full h-full flex flex-row group-hover:opacity-0 duration-300">
        <div>
          <BsCircle size={size} />
        </div>
        <div>
          <BsArrowRight size={size} />
        </div>
      </div>
      <div
        className={`absolute w-full h-full  ${
          status === "create"
            ? "group-hover:animate-nodeSlideUpAnimation translate-y-10"
            : ""
        }
         duration-300`}
      >
        <div className="w-full h-full relative flex flex-row">
          <div
            className={`${
              status === "create"
                ? "absolute"
                : "group-hover:animate-nodeSlideDownAnimation"
            }`}
          >
            <BsCircle size={size} />
          </div>
          <div
            className={` ${
              status === "create"
                ? "group-hover:animate-nodeSlideAnimation absolute"
                : "group-hover:animate-nodeSlideDownAnimation"
            }

              duration-300`}
          >
            <BsArrowRight size={size} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NodeIcon;
