import { createContext } from "react";

const SlideContext = createContext({
  addOrDelete: false,
  setAddOrDelete: (value: boolean) => {},
  slideX: 20,
  setSlideX: (value: number) => {},
});

export default SlideContext;
