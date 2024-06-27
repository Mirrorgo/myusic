import LeftSideContent from "./left-side-content";

function LeftSideBar() {
  return (
    <div className="hidden sm:block sm:flex-grow sm:p-2">
      <div className="text-xl font-bold px-2">乐馆</div>
      <LeftSideContent />
    </div>
  );
}

export default LeftSideBar;
