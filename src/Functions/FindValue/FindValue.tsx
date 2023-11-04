import { useContext, useEffect, useState } from "react";
import FormButton from "../../Components/FormComponent/FormButton";
import LinkedList from "../../Algorithms/linklist";
import { NodeType } from "../../Algorithms/NodeType";
import StoreIndexContext from "../../Context/StoreIndexContext";

const FindValue = ({
  ll,
  setStartAnimation,
  input,
  setInput,
}: {
  ll: LinkedList<NodeType>;
  setStartAnimation: React.Dispatch<React.SetStateAction<boolean>>;
  input: number;
  setInput: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [duration, setDuration] = useState(1000);
  const { foundIndex, setFoundIndex, setAnimate, Animate } =
    useContext(StoreIndexContext);

  useEffect(() => {
    setTimeout(() => {
      setDuration(0);
      setAnimate(false);
    }, 1000);
  }, [Animate]);

  useEffect(() => {
    RunAnimate();
  }, [duration]);

  const RunAnimate = () => {
    if (foundIndex === -1) return;
    setStartAnimation(true);
    const timeout = setTimeout(() => {
      setStartAnimation(false);
      setAnimate(true);
    }, duration);
    return () => {
      clearTimeout(timeout);
    };
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    let index = ll.search({ value: input, isVisible: true });

    index === -1
      ? alert(`${input} does not exist`)
      : setDuration((index + 1) * 1000);
    setFoundIndex(index);
  };

  const onChange = (e: any) => {
    setInput(parseInt(e.target.value));
  };

  return (
    <FormButton
      handleSubmit={handleSubmit}
      onChange={onChange}
      inputNode={input}
    />
  );
};
export default FindValue;
