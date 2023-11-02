import { createContext } from "react";

const StoreIndexContext = createContext({
  foundIndex: -1,
  setFoundIndex: (value: number) => {},
  Animate: false,
  setAnimate: (value: boolean) => {},
});

export default StoreIndexContext;
