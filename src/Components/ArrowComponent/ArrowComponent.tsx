import React from "react";
const ArrowComponent = ({
  IconLeft,
  IconUp,
  nodeStatusRight,
  nodeStatusLeft,
  styleRight,
  styleLeft,
}: {
  IconLeft: any;
  IconUp: any;
  nodeStatusRight: String;
  nodeStatusLeft: String;
  styleRight: React.CSSProperties;
  styleLeft: React.CSSProperties;
}) => {
  return (
    <div className="flex flex-row gap-2 w-[80px] absolute bottom-[-80%] right-[50%]">
      <div
        className={`flex flex-row gap-3 w-fit animate-slideAnimation`}
        style={styleLeft}
      >
        <span className="flex mt-3">{nodeStatusLeft}</span>
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
