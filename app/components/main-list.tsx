import { ArrowLeft } from "lucide-react";
import LeftSideBar from "./left-side-bar";
import LeftSideSheet from "./left-side-sheet";

function MainList() {
  return (
    <div className="hidden sm:block sm:flex-grow sm:p-2">
      {/* <LeftSideSheet /> */}
      <ArrowLeft />
      <div>list</div>
    </div>
  );
}

export default MainList;
