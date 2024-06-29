import LeftSideContent from "./left-side-content";

function LeftSideBar() {
  return (
    <div className="hidden sm:block sm:flex-grow sm:p-2">
      <LeftSideContent />
    </div>
  );
}

export default LeftSideBar;
