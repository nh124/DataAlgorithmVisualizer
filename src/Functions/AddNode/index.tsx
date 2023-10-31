import React, { useState, useContext } from "react";
import SlideContext from "../../Context/SlideContext";

const AddNode = ({ ll, setNodes, nodes }) => {
  const [inputNode, setInputNode] = useState("");
  const { setAddOrDelete, setSlideX, slideX } = useContext(SlideContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nodes.length <= 13) {
      ll.add({
        value: inputNode,
        isVisible: true,
      });
      setNodes(ll.display());
      setInputNode("");
      setAddOrDelete(true);
      if (nodes.length >= 1) {
        setSlideX(slideX + 80);
        console.log(slideX);
      }
    } else {
      alert("Max limit reached");
    }
  };

  const onChange = (event) => {
    setInputNode(event.target.value);
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="flex h-[100px] items-center gap-3 px-4 text-white w-fit"
    >
      <div class="flex flex-row gap-3">
        <input
          class="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outlin bg-[#52796f]"
          id="Node"
          type="number"
          placeholder="Ex. 4"
          value={inputNode}
          onChange={onChange}
          required
          max="10"
        />
        <input
          type="submit"
          className="hover:cursor-pointer w-full h-auto bg-[#52796f] rounded-sm py-2 shadow-lg hover:scale-105 ease-in-out duration-300"
        />
      </div>
    </form>
  );
};

export default AddNode;
