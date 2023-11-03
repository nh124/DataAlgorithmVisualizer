import LinkedList from "../../Algorithms/linklist";
import { NodeType } from "../../Algorithms/NodeType";

const GenerateLinkedList = (size: number) => {
  const ll = new LinkedList<NodeType>();
  if (size > 14) return;
  for (let i = 0; i < size; i++) {
    let value = Math.floor(Math.random() * 10);
    let isVisible = true;
    ll.add({ value: value, isVisible: isVisible });
  }

  return ll;
};

export default GenerateLinkedList;
