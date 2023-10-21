import React, { useState } from "react";

const AddNode = ({ ll, setNodes, nodes }) => {
  const [inputNode, setInputNode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nodes.length <= 13) {
      ll.add({
        value: inputNode,
        isVisible: true,
      });
      setNodes(ll.display());
      setInputNode("");
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
      className="flex h-[100px] items-center gap-3 px-4"
    >
      <div class="flex flex-col gap-3">
        <input
          type="submit"
          className="hover:cursor-pointer w-full h-auto bg-gray-700 rounded-sm py-2 shadow-lg hover:scale-105 ease-in-out duration-300"
        />
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Node"
          type="number"
          placeholder="Ex. 4"
          value={inputNode}
          onChange={onChange}
          required
          max="10"
        />
      </div>
    </form>
  );
};

export default AddNode;
