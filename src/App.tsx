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
        className="absolute top-5 left-5 hover:scale-125 duration-300 z-10"
        onClick={() => setShowMenu(!showMenu)}
      >
        <MenuIcon size={30} showMenu={showMenu} />
      </div>
      <SidePanel showMenu={showMenu} />
      <div className="flex flex-col w-full h-screen">
        <SlideContext.Provider
          value={{ addOrDelete, setAddOrDelete, slideX, setSlideX }}
        >
          <StoreIndexContext.Provider
            value={{ foundIndex, setFoundIndex, Animate, setAnimate }}
          >
            <div className="w-full h-auto flex flex-row items-center gap-3 bg-[#2f3e46] flex-wrap">
              <div className="w-[30px] h-[30px] ml-5"></div>
              <h2 className="text-white text-xl font-bold">Linked List</h2>
              <div className="flex flex-row">
                <AddNode ll={ll} setNodes={setNodes} nodes={nodes} />
                <FindValue
                  ll={ll}
                  setStartAnimation={setStartAnimation}
                  input={input}
                  setInput={setInput}
                />
              </div>
              <div className="flex flex-row gap-1">
                <DeleteNode
                  ll={ll}
                  setNodes={setNodes}
                  nodes={nodes}
                  setStartAnimation={setStartAnimation}
                />
                <Button
                  action={() => GenerateNewLinkkedList("update")}
                  icon={<TrashIcon size={40} />}
                ></Button>
                <Button
                  action={() => GenerateNewLinkkedList("clear")}
                  icon={<TrashIcon size={40} />}
                ></Button>
                {/* <Button
                  action={() => test()}
                  icon={<TrashIcon size={40} />}
                ></Button>
                <Button
                  action={() => test()}
                  icon={<TrashIcon size={40} />}
                ></Button>
                <Button
                  action={() => test()}
                  icon={<TrashIcon size={40} />}
                ></Button>
                <Button
                  action={() => test()}
                  icon={<TrashIcon size={40} />}
                ></Button> */}
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
