import { createContext } from "react";

const SlideContext = createContext({
  addOrDelete: false,
  setAddOrDelete: (value: boolean) => {},
  slideX: 4,
  setSlideX: (value: number) => {},
});

export default SlideContext;
