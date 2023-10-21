import React from "react";

const SidePanel = () => {
  return (
    <div className="w-[20%] h-screen bg-black left-0 flex flex-col gap-2 px-2">
      <div className="flex justify-center items-center w-full h-[20%]">
        Logo
      </div>
      {Array.from({ length: 10 })
        .fill(null)
        .map((_, index) => {
          return (
            <div
              key={index}
              className="py-4 px-5 flex justify-start items-center hover:cursor-pointer bg-gray-400"
            >
              Algo
            </div>
          );
        })}
    </div>
  );
};

export default SidePanel;
