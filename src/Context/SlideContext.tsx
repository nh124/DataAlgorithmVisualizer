import { createContext } from "react";

const SlideContext = createContext({
  addOrDelete: false,
  setAddOrDelete: (value: boolean) => {
    console.log(value);
  },
  slideX: 20,
  setSlideX: (value: number) => {
    console.log(value);
  },
});

export default SlideContext;
