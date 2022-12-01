import React, { useState } from "react";
import AutoCreate from "../images/autoCreate";
import Grid from "../images/grid";
import List from "../images/list";
import Scratch from "../images/scratch";
import Share from "../images/share";
import Template from "../images/template";
import Threedots from "../images/threedots";
import FullScreenModal from "../modal/fullSModal";
import CustomModal from "../sidebar/modal";
import "../WorkSpaceMain/workspace.css";
import Workspacecontent from "./workspace content/workspace-content";
const WorkSpace = (props) => {
  const [workspace, setWorkspace] = useState("");
  const [workSpaceName, setworkSpaceName] = useState("My workspace");
  const [share, setshare] = useState(false);
  const [plans, setplans] = useState(null);
  const onChangeHandler = (value) => {
    setworkSpaceName(value);
  };
  function CreateWorkspace() {
    if (workspace) {
      return (
        <button type="button" className="btn-style bg-dark text-light">
          Create workspace
        </button>
      );
    } else {
      return (
        <button type="button" className="btn-style " disabled>
          Create workspace
        </button>
      );
    }
  }

  return (
    <>
      <div className="workspace w-100" id="workspace">
        <div id="upper-div">
          <div className="d-flex justify-content-between sidebar-workspace-responsive">
            <div className="d-flex align-items-center cr-p">
              <Grid />
              <p className="pl-2 font-16 font-weight-600">Workspaces</p>
            </div>
            <div>
              <CustomModal
                icon={true}
                icondetail="fa-solid fa-plus"
                center={true}
                btnStyle="btn-style bg-transparent text-grey font-weight-700"
                modalSize="md"
              >
                <div>
                  <div className="p-3 w-100 ">
                    <p className="font-24 text-left">Create a new workspace</p>
                    <div className="d-flex mt-3 align-items-center w-100 text-grey">
                      <input
                        onChange={(e) => setWorkspace(e.target.value)}
                        value={workspace}
                        type="text"
                        name=""
                        className="w-100 p-2 rounded border-color outline-0 font-16"
                        id="searchorganization"
                        placeholder="Name your organization"
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-end p-3">
                    <button className="btn-style bg-grey mr-2">Cancel</button>
                    <CreateWorkspace />
                  </div>
                </div>
              </CustomModal>
              <CustomModal
                buttontext="Find"
                icon={true}
                icondetail="fa-solid fa-magnifying-glass pr-2"
                btnStyle="btn-style text-grey bg-transparent font-weight-500"
                modalSize="md"
              >
                <div className="d-flex p-3 align-items-center border-bottom w-100 text-grey">
                  <i className="fa-solid fa-magnifying-glass pr-2"></i>
                  <input
                    type="text"
                    name=""
                    className="w-100 border-0 outline-0 font-20"
                    id="searchorganization"
                    placeholder="Search in raza awan organization"
                  />
                </div>
                <div className="d-flex align-items-center p-3 border-0 border-top w-100 flex-column">
                  <p className="font-24">No results found</p>
                  <p className="font-14">
                    Try again using more general search terms
                  </p>
                </div>
              </CustomModal>
            </div>
          </div>
          <div className=" pt-4 px-2 d-flex justify-content-start align-items-center content-bg">
            <input
              style={{ width: `${workSpaceName.length * 15}px` }}
              className="workspace-btn mr-2"
              type="text"
              value={workSpaceName}
              onChange={(e) => {
                onChangeHandler(e.target.value);
              }}
            />
            <br />
            <div
              className="btn-style py-0 rounded-0 bg-transparent border-left"
              onClick={() => setshare(!share)}
            >
              <FullScreenModal
                buttontext="Share"
                btnStyle="btn-style p-0 bg-transparent font-14"
                icon={true}
                icondetail={<Share />}
                modalSize="full-screen"
              >
                <div className="d-flex justify-content-center align-items-center h-100 w-100 flex-column">
                  <p className="font-12 font-weight-700 pb-4">
                    TEAM COLLABORATION
                  </p>
                  <p className="font-36 font-weight-300 pb-3">
                    Team up on typeforms
                  </p>
                  <p className="font-20 text-grey">
                    Your Free plan includes <strong>1 user.</strong>
                  </p>
                  <p className="font-20 pb-4 text-grey">
                    How many do you need?
                  </p>
                  <div className="d-flex pt-2 justify-content-between align-items-center">
                    <button
                      className="share-btn-style px-5 mr-3"
                      onClick={() => setplans(true)}
                    >
                      Up to 5
                    </button>
                    <button
                      className="share-btn-style px-5"
                      onClick={() => setplans(false)}
                    >
                      6 or more
                    </button>
                  </div>

                  <div className="d-flex pt-5 justify-content-between align-items-center">
                    {plans ? (
                      <button
                        className="share-btn-style  bg-green text-white"
                        onClick={() => setplans(true)}
                      >
                        Upgrade my plan
                      </button>
                    ) : (
                      <button
                        className="share-btn-style  bg-green text-white"
                        onClick={() => setplans(false)}
                      >
                        Contact Sales
                      </button>
                    )}
                  </div>
                </div>
              </FullScreenModal>
            </div>

            <div className="dropdown">
              <button
                className="btn-style bg-transparent "
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <Threedots />
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <div className="dropdown-item px-0">
                  <CustomModal
                    buttontext="Rename"
                    btnStyle="btn-style bg-transparent p-0 font-16 w-100 h-100"
                    center={true}
                    modalSize="md"
                    closeX="true"
                  >
                    <div>
                      <div className="p-3 w-100 ">
                        <div className=" pb-3 p-2 d-flex justify-content-between align-items-start">
                          <p className="font-24 text-left">Rename workspace</p>
                        </div>
                        <div className="d-flex mt-3 align-items-center w-100 text-grey">
                          <input
                            value={workspace}
                            onChange={(e) => setWorkspace(e.target.value)}
                            type="text"
                            name=""
                            className="w-100 p-2 rounded border-color outline-0 font-16"
                            id="searchorganization"
                            placeholder="Name your organization"
                          />
                        </div>
                      </div>

                      <div className="d-flex justify-content-end p-3">
                        <button className="btn-style bg-grey mr-2">
                          Cancel
                        </button>
                        <button className="btn-style bg-dark text-white mr-2">
                          Save
                        </button>
                      </div>
                    </div>
                  </CustomModal>
                </div>
                <div className="dropdown-item px-0">
                  <CustomModal
                    buttontext="Leave"
                    btnStyle="btn-style bg-transparent p-0 font-16 w-100 h-100"
                    center={true}
                    modalSize="md"
                    closeX="true"
                  >
                    <div>
                      <div className="p-4 w-100 ">
                        <div className=" pb-3 p-2 d-flex justify-content-between align-items-start">
                          <p className="font-24 text-left">Leave workspace?</p>
                        </div>
                        <div className=" p-2">
                          <p>If you leave workspace with name:</p>
                          <p className="font-weight-700 mb-3">My workspace</p>
                          <p>You'll lose access to all typeforms in it.</p>
                        </div>
                      </div>

                      <div className="d-flex justify-content-end p-3">
                        <button className="btn-style bg-grey mr-2">
                          Cancel
                        </button>
                        <button className="btn-style bg-danger text-white mr-2">
                          Leave
                        </button>
                      </div>
                    </div>
                  </CustomModal>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 pt-2 flex-column flex-sm-row  pb-3 border-bottom d-flex justify-content-between align-items-sm-center align-items-start content-bg">
            <CustomModal
              buttontext="Create typeform"
              btnStyle="btn-style bg-dark text-light"
              center={true}
              icon={true}
              icondetail="fa-solid fa-plus"
              modalSize="xl"
              closeX="true"
            >
              <div className="p-4 d-flex justify-content-between align-items-start">
                <p className="font-24">Create a new typeform</p>
              </div>
              <div className="px-4 pb-4">
                <div className="row">
                  <div className="col-4 ">
                    <div className="card h-100 p-3">
                      <Scratch />
                      <p className="font-20">Start from scratch</p>
                      <p className="font-12">
                        Jump right in and build something beautiful
                      </p>
                    </div>
                  </div>
                  <div className="col-4 ">
                    <div className="card h-100 p-3">
                      <Template />
                      <p className="font-20">Start from scratch</p>
                      <p className="font-12">
                        Pick a premade typeform and customize it as you please
                      </p>
                      <span className="d-flex align-items-center font-12">
                        Or
                        <button className="btn-style font-12 p-0 pl-1 bg-transparent">
                          import your questions
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="col-4 ">
                    <div className="card h-100 p-3">
                      <AutoCreate />
                      <p className="font-20">Start from scratch</p>
                      <p className="font-12">
                        Tell us what you need and we will generate a typeform
                        based on that
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CustomModal>

            <div className="d-flex justify-content-between align-items-center pt-sm-0 pt-2">
              <select name="cars" id="cars" className="btn-style bg-grey">
                <option value="volvo">Date created</option>
                <option value="saab">Last updated</option>
                <option value="mercedes">Alphabetical</option>
              </select>
              <div
                className="btn-group btn-group-toggle ml-3"
                data-toggle="buttons"
              >
                <label className="btn font-14 bg-grey active d-flex align-items-center">
                  <input
                    type="radio"
                    name="options"
                    id="option1"
                    autoComplete="off"
                    checked
                    readOnly
                  />
                  <Grid />
                  <span className="pl-2">Grid</span>
                </label>
                <label className="btn font-14 bg-grey d-flex align-items-center">
                  <input
                    type="radio"
                    name="options"
                    id="option2"
                    autoComplete="off"
                  />
                  <List />
                  <span className="pl-2">List</span>
                </label>
              </div>
            </div>
          </div>
          <div id="lower-div" className="px-4 pt-4">
            <Workspacecontent />
          </div>
        </div>

        {/* {share ? (
          <div className="share-div-main">
            <div className="share-div-sub"></div>
          </div>
        ) : (
          ""
        )} */}
      </div>
    </>
  );
};

export default WorkSpace;
