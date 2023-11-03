import React from "react";
import { useContext } from "react";
import NodeContext from "../../Context/NodeContext.tsx";
const ArrowComponent = ({
  IconLeft,
  IconUp,
  styleRight,
  styleLeft,
}: {
  IconLeft: any;
  IconUp: any;
  styleRight: React.CSSProperties;
  styleLeft: React.CSSProperties;
}) => {
  const { nodeStatusRight, nodeStatusLeft } = useContext(NodeContext);
  return (
    <div className="flex flex-row gap-2 w-[80px] absolute bottom-[-120%] right-[35%] text-xs">
      <div
        className={`flex flex-col w-fit animate-slideAnimation relative py-4`}
        style={styleLeft}
      >
        {IconLeft}
        <span className="flex absolute bottom-[-20px] w-[100px] h-[30px]">
          {nodeStatusLeft}
        </span>
      </div>
      <div
        className={`flex flex-col w-fit animate-slideAnimation items-end relative py-4`}
        style={styleRight}
      >
        {IconUp}
        <span className="flex absolute bottom-[-20px] w-[100px] h-[30px] justify-end">
          {nodeStatusRight}
        </span>
      </div>
    </div>
  );
};

export default ArrowComponent;
