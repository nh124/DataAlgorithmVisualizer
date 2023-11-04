import { useState, useContext } from "react";
import SlideContext from "../../Context/SlideContext";
import FormButton from "../../Components/FormComponent/FormButton";
import LinkedList from "../../Algorithms/linklist";
import { NodeType } from "../../Algorithms/NodeType";

const AddNode = ({
  ll,
  setNodes,
  nodes,
}: {
  ll: LinkedList<NodeType>;
  setNodes: React.Dispatch<React.SetStateAction<NodeType[]>>;
  nodes: NodeType[];
}) => {
  const [inputNode, setInputNode] = useState("");
  const { setAddOrDelete, setSlideX, slideX } = useContext(SlideContext);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (nodes.length <= 13) {
      ll.add({
        value: parseInt(inputNode),
        isVisible: true,
      });
      setNodes(ll.display());
      setInputNode("");
      setAddOrDelete(true);
      if (nodes.length >= 1) {
        setSlideX(slideX + 80);
      }
    } else {
      alert("Max limit reached");
    }
  };

  const onChange = (event: any) => {
    setInputNode((event.target as HTMLInputElement).value);
  };
  return (
    <FormButton
      handleSubmit={handleSubmit}
      inputNode={parseInt(inputNode)}
      onChange={onChange}
    />
  );
};

export default AddNode;
