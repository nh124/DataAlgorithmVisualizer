import { createContext } from "react";

const NodeContext = createContext({
  node: 0,
  index: 0,
  nodeStatus: true,
  currentIndex: -1,
  length: 0,
  startAddAnimation: false,
  nodeStatusRight: "",
  nodeStatusLeft: "",
});

export default NodeContext;
