import React, { useState } from "react";
import "../sidebar/sidebar.css";
import CustomModal from "./modal";
import Collapse from "react-bootstrap/Collapse";
import ProgressBar from "react-bootstrap/ProgressBar";
import Gthan from "../images/gthan";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [showModal, setshowModal] = useState(false);
  const [workspace, setWorkspace] = useState("");

  return (
    <>
      <div className="sidebar-main" id="showSideBar">
        <div className="sidebar">
          <div className="sidebar-subdiv">
            <div id="sidebartop">
              <div>
                <div className="p-16">
                  <CustomModal
                    buttontext="Find workspace or typeform"
                    icon={true}
                    icondetail="fa-solid fa-magnifying-glass pr-2"
                    btnStyle="btn-style text-grey"
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

                <div id="sidebarworkspaces">
                  <div className="d-flex justify-content-between pb-0 p-16">
                    <div
                      onClick={() => setOpen(!open)}
                      aria-controls="collapse-1"
                      aria-expanded={open}
                      className="font-12 font-weight-600 d-flex align-items-center cr-p"
                    >
                      <svg
                        className="SVGInline-svg"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 10H10V7.91637C8.62051 6.8026 6.88775 6.13275 5.00002 6.13275C3.11228 6.13275 1.37955 6.8026 0 7.91637V10ZM5.00002 4.68757C6.25521 4.68757 7.27274 3.63823 7.27274 2.34379C7.27274 1.04935 6.25521 0 5.00002 0C3.74482 0 2.72728 1.04935 2.72728 2.34379C2.72728 3.63823 3.74482 4.68757 5.00002 4.68757Z"
                          fill="#737373"
                        ></path>
                      </svg>
                      <span className="pl-2 ">PRIVATE</span>
                    </div>
                    <CustomModal
                      buttontext="+"
                      icon={false}
                      center={true}
                      showModal={showModal}
                      setshowModal={() => setshowModal(!showModal)}
                      btnStyle="btn-style text-grey"
                      footer={true}
                      cancelbtn={[
                        <button
                          className="btn-style bg-grey mr-2"
                          onClick={() => setshowModal(!showModal)}
                        >
                          Cancel
                        </button>,
                      ]}
                    >
                      <div>
                        <div className="p-3 w-100 ">
                          <p className="font-24 text-left">
                            Create a new workspace
                          </p>
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
                          {workspace ? (
                            <button
                              type="button"
                              className="btn-style bg-dark text-light"
                            >
                              Create workspace
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="btn-style "
                              disabled
                            >
                              Create workspace
                            </button>
                          )}
                        </div>
                      </div>
                    </CustomModal>
                  </div>
                  <Collapse in={open}>
                    <div id="collapse-1 " className="">
                      <div className="py-2">
                        <p className="workspaces px-3 py-2">My workspace</p>
                      </div>
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>
            <div id="sidebarbottom">
              <div className="p-16">
                <p className="mb-2 font-16 font-weight-700">
                  raza awan’s <span className="font-weight-500">account</span>
                </p>
                <p className="font-14">Responses collected</p>
                <ProgressBar now={0} visuallyHidden max={10} />
                <p className="font-16">
                  0 <span className="font-12">/ 10</span>
                </p>
                <p className="font-12">Resets on Dec 21</p>
                <p className="font-14 mt-4">Increase response limit</p>
              </div>
              <NavLink to = "/app&integration">
                <div className="p-3 border-top font-14 font-weight-500 d-flex justify-content-between align-items-center cr-p">
                  <p>Apps & Integrations</p>
                  <Gthan />
                </div>
              </NavLink>

              <div className="p-3 border-bottom border-top font-14 font-weight-500 d-flex justify-content-between align-items-center cr-p">
                <p>Brand kit</p>
                <Gthan />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
