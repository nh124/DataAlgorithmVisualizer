import { useState } from "react";
import NodeTraversal from "./Components/NodeTraversal/NodeTraversal.tsx";
import linkedList from "./Algorithms/linklist.ts";
import AddNode from "./Functions/AddNode/index.tsx";
import DeleteNode from "./Functions/DeleteNode/index.tsx";
import SidePanel from "./Components/SidePanel/index.tsx";
import SlideContext from "./Context/SlideContext.tsx";
import { NodeType } from "./Algorithms/NodeType.ts";
import FindValue from "./Functions/FindValue/FindValue.tsx";
import StoreIndexContext from "./Context/StoreIndexContext.tsx";
import Button from "./Components/ButtonComponent/Button.tsx";
import GenerateLinkedList from "./Functions/GenerateLinkedList/GenerateLinkedList.tsx";
import { TiThMenuOutline } from "react-icons/ti";
import MenuIcon from "./Components/Icons/MenuIcon.tsx";
import TrashIcon from "./Components/Icons/TrashIcon.tsx";
import NodeIcon from "./Components/Icons/NodeIcon.tsx";
import { AiFillCaretDown } from "react-icons/ai";
let ll = new linkedList<NodeType>();
const App = () => {
  const [addOrDelete, setAddOrDelete] = useState(false);
  const [nodes, setNodes] = useState<NodeType[]>([]);
  const [slideX, setSlideX] = useState(20);
  const [startAnimation, setStartAnimation] = useState(false);
  const [foundIndex, setFoundIndex] = useState(-1);
  const [Animate, setAnimate] = useState(false);
  const [input, setInput] = useState(-1);
  const [showMenu, setShowMenu] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const GenerateNewLinkkedList = (action: string) => {
    if (action === "update") {
      const newLL = GenerateLinkedList(10);
      ll = newLL;
      setNodes(ll.display());
    } else if (action === "clear") {
      ll = new linkedList<NodeType>();
      setNodes(ll.display());
    }
  };
  const test = () => {
    let ll = new linkedList<NodeType>();
    ll = GenerateLinkedList(10);
    ll.reverse();
    console.log(ll.display());
  };
  return (
    <div className="flex flex-row relative">
      <div
        className="absolute top-8 left-5 hover:scale-125 duration-300 z-40"
        onClick={() => setShowMenu(!showMenu)}
      >
        <MenuIcon size={30} showMenu={showMenu} />
      </div>
      <SidePanel showMenu={showMenu} />
      <div className="flex flex-col w-full h-screen relative">
        <SlideContext.Provider
          value={{ addOrDelete, setAddOrDelete, slideX, setSlideX }}
        >
          <StoreIndexContext.Provider
            value={{ foundIndex, setFoundIndex, Animate, setAnimate }}
          >
            <div
              className={`w-full ${
                showAll
                  ? "transition-height max-sm:h-[200px] max-md:h-[200px] duration-300 ease-in-out items-start"
                  : "transition-height h-auto duration-300 ease-in-out items-center"
              }  min-h-[100px] flex flex-row  gap-1 bg-[#2f3e46] flex-wrap py-8 duration-300`}
            >
              <div className="w-[30px] h-[30px] ml-5"></div>
              <h2 className="text-white text-xl font-bold ml-3 max-sm:text-base">
                Linked List
              </h2>
              <div className="flex flex-row h-auto flex-wrap">
                <div className="flex flex-row items-center bg-[#2f3e46]">
                  <AddNode ll={ll} setNodes={setNodes} nodes={nodes} />
                  <FindValue
                    ll={ll}
                    setStartAnimation={setStartAnimation}
                    input={input}
                    setInput={setInput}
                  />
                  <Button
                    action={() => setShowAll(!showAll)}
                    icon={
                      <AiFillCaretDown
                        size={20}
                        className={`${
                          showAll ? "rotate-180" : ""
                        } duration-300`}
                      />
                    }
                    value="responsive"
                  ></Button>
                </div>

                <div className="flex flex-row bg-[#2f3e46] max-md:absolute top-[100px] max-md:w-full max-md:left-0 h-auto px-4">
                  <DeleteNode
                    ll={ll}
                    setNodes={setNodes}
                    nodes={nodes}
                    setStartAnimation={setStartAnimation}
                  />
                  <Button
                    action={() => GenerateNewLinkkedList("update")}
                    icon={<NodeIcon size={30} status={"create"} />}
                    value="New Linked List"
                  ></Button>
                  <Button
                    action={() => GenerateNewLinkkedList("clear")}
                    icon={<NodeIcon size={30} status={"clear"} />}
                    value="Clear Linked List"
                  ></Button>
                </div>
              </div>
            </div>

            <NodeTraversal
              nodes={nodes}
              startAnimation={startAnimation}
              setStartAnimation={setStartAnimation}
              input={input}
            />
          </StoreIndexContext.Provider>
        </SlideContext.Provider>
      </div>
    </div>
  );
};

export default App;

{
  /* <Button action={() => test()} value="Test"></Button>
<Button action={() => test()} value="Detect Cycle"></Button>
<Button action={() => test()} value="Merge Lists"></Button>
<Button action={() => test()} value="Reorder"></Button> */
}
