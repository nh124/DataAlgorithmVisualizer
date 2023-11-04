import Logo from "../../assets/Logo.png";
const SidePanel = ({ showMenu }: { showMenu: boolean }) => {
  const Algorithms = [
    "Binary Search Tree",
    "LinkedList",
    "Sorting",
    "Graph Traversal",
    "Path Finding",
  ];
  return (
    <div
      className={`absolute w-[20%] h-screen bg-[#233036] left-0 flex flex-col gap-2 px-5 min-[3000px]:w-[10%] translate-x-[-500px] z-30 max-sm:w-[50%] max-lg:w-[30%] ${
        showMenu ? "translate-x-[0px]" : ""
      } duration-300`}
    >
      <div className="flex justify-center items-center w-full h-[20%]">
        <img src={Logo} alt="" />
      </div>
      {Algorithms.map((algo, index) => {
        return (
          <div
            key={index}
            className="py-4 px-5 flex justify-start items-center hover:cursor-pointer bg-gray-400 hover:scale-110 duration-300 ease-in-out"
          >
            {algo}
          </div>
        );
      })}
    </div>
  );
};

export default SidePanel;
