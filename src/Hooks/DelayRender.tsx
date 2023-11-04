import { useState, useEffect } from "react";

function useDelayRender(delayTime: number) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, delayTime);

    return () => {
      clearTimeout(timer);
    };
  }, [delayTime]);

  return shouldRender;
}

export default useDelayRender;
