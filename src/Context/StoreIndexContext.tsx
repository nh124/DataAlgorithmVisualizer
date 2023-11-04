import { createContext } from "react";

const StoreIndexContext = createContext({
  foundIndex: -1,
  setFoundIndex: (value: number) => {
    console.log(value);
  },
  Animate: false,
  setAnimate: (value: boolean) => {
    console.log(value);
  },
});

export default StoreIndexContext;
