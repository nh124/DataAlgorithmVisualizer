const MenuIcon = ({ size, showMenu }: { size: number; showMenu: boolean }) => {
  return (
    <button
      className={`w-[${size}px] h-[${size}px] flex flex-col relative justify-between group`}
    >
      <div
        className={`w-full h-[20%] border-2 border-gray-400 ${
          showMenu
            ? "absolute top-1/2 transform -translate-y-1/2 rotate-45 h-[10%] bg-gray-400"
            : ""
        } rounded-lg duration-300`}
      ></div>
      {!showMenu && (
        <div
          className={`w-full h-[20%] border-2 border-gray-400 rounded-lg duration-300`}
        ></div>
      )}
      <div
        className={`w-full h-[20%] border-2 border-gray-400 ${
          showMenu
            ? "absolute top-1/2 transform -translate-y-1/2 -rotate-45 h-[10%] bg-gray-400"
            : ""
        } rounded-lg duration-300`}
      ></div>
    </button>
  );
};

export default MenuIcon;
