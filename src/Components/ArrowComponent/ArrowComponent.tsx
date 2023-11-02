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
    <div className="flex flex-row gap-2 w-[80px] absolute bottom-[-80%] right-[50%]">
      <div
        className={`flex flex-row gap-3 w-fit animate-slideAnimation`}
        style={styleLeft}
      >
        <span className="flex mt-3">{}</span>
        {IconLeft}
      </div>
      <div
        className={`flex flex-row gap-3 w-fit animate-slideAnimation`}
        style={styleRight}
      >
        {IconUp}
        <span className="flex mt-3">{nodeStatusRight}</span>
      </div>
    </div>
  );
};

export default ArrowComponent;
