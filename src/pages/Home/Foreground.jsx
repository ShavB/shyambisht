import Nav from "./Nav";
import { useRef } from "react";

const Foreground = () => {
  const ref = useRef(null);
  return (
    <div ref={ref} className="absolute top-0 left-9 z-[3] w-full h-full ">
      <Nav reference={ref} />
    </div>
  );
};

export default Foreground;
