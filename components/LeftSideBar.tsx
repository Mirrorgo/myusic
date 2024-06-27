import LeftSideContent from "./LeftSideContent";

function LeftSideBar() {
  return (
    <div className="hidden sm:block sm:flex-grow sm:p-4">
      <div className="text-xl font-bold">乐堂</div>
      <LeftSideContent />
    </div>
  );
}

export default LeftSideBar;
