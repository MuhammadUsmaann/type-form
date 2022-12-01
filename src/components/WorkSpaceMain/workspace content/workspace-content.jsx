import React from "react";
import Threedots from "../../images/threedots";

const cards = [
  {
    name: "My typeform",
    created: "21 Nov 2022",
    response: "No responses",
    questions: "0",
    completetion: "0%",
    updated: "21 Nov 2022",
  },
  {
    name: "My typeform",
    created: "21 Nov 2022",
    response: "No responses",
    questions: "0",
    completetion: "0%",
    updated: "21 Nov 2022",
  },
  {
    name: "My typeform",
    created: "21 Nov 2022",
    response: "7 responses",
    questions: "0",
    completetion: "0%",
    updated: "21 Nov 2022",
  },
  {
    name: "My typeform",
    created: "21 Nov 2022",
    response: "10 responses",
    questions: "0",
    completetion: "0%",
    updated: "21 Nov 2022",
  },
  {
    name: "My typeform",
    created: "21 Nov 2022",
    response: "No responses",
    questions: "0",
    completetion: "0%",
    updated: "21 Nov 2022",
  },
  {
    name: "My typeform",
    created: "21 Nov 2022",
    response: "No responses",
    questions: "0",
    completetion: "0%",
    updated: "21 Nov 2022",
  },
  {
    name: "My typeform",
    created: "21 Nov 2022",
    response: "No responses",
    questions: "0",
    completetion: "0%",
    updated: "21 Nov 2022",
  },
  {
    name: "My typeform",
    created: "21 Nov 2022",
    response: "15 responses",
    questions: "0",
    completetion: "0%",
    updated: "21 Nov 2022",
  },
];
const Workspacecontent = () => {
  return (
    <>
      <div className="row m-0" id="workspaceitemscontent">
        {cards.map((data, index) => {
          return (
            <div key={index} className="">
              <div className="workspace-card-design m-2">
                <div className="p-3 workspace-card-design-img">
                  <img src="" alt="" />
                  {data.name}
                </div>
                <div className="border-top p-3 d-flex align-items-center justify-content-between">
                  <p className="text-grey">{data.response}</p>
                  <div className="dropdown show">
                    <button
                      className="btn-style bg-transparent font-12 font-weight-500"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <Threedots />
                    </button>
                    <div
                      className="dropdown-menu workspace-dropdown-menu "
                      aria-labelledby="dropdownMenuLink"
                    >
                      <div className="dropdown-item border-bottom py-2">
                        <p className="dropdown-link-style font-14 p-4-16 mb-2 mb-2">
                          Open
                        </p>
                        <p className="dropdown-link-style font-14 p-4-16 mb-2 mb-2">
                          Copy Link
                        </p>
                      </div>
                      <div className="dropdown-item border-bottom pt-2">
                        <p className="dropdown-link-style font-14 p-4-16 mb-2">
                          Connect
                        </p>
                        <p className="dropdown-link-style font-14 p-4-16 mb-2">
                          Share
                        </p>
                      </div>
                      <div className="dropdown-item border-bottom pt-2">
                        <p className="dropdown-link-style font-14 p-4-16 mb-2">
                          Result
                        </p>
                        <p className="dropdown-link-style font-14 p-4-16 mb-2">
                          Duplicate
                        </p>
                        <p className="dropdown-link-style font-14 p-4-16 mb-2">
                          Copy to
                        </p>
                        <p className="dropdown-link-style font-14 p-4-16 mb-2">
                          Move to
                        </p>
                      </div>

                      <div className="dropdown-item mt-2 ">
                        <p className="dropdown-link-style text-red font-14 p-4-16 ">
                          Delete
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Workspacecontent;
