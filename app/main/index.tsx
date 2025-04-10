import Aside from "./aside";
import LeftSide from "./LeftSide/page";

const Main = () => {
  return (
    <div className="grid grid-cols-[1fr_3.5fr] container1 max-[1024px]:grid-cols-1">
      <div className="flex flex-col gap-2 z-10   max-[1024px]:hidden">
        <Aside />
      </div>
      <div className=" flex-col gap-2  max-[1024px]:flex hidden">
        <Aside />
      </div>
      <div className="bg-[#f4f4f4]">
        <LeftSide />
      </div>
    </div>
  );
};

export default Main;
