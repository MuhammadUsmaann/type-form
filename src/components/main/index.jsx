import Header from "../header";
import Sidebar from "../sidebar";
import WorkSpace from "../WorkSpaceMain/WorkSpace";

function MainTab() {
  return (
    <div className="">
      <Header />
      <div className="d-flex align-items-start myapp">
        <Sidebar />
        <WorkSpace />
      </div>
      
    </div>
  );
}

export default MainTab;
