import React from "react";

const catagories = [
  {
    id: 1,
    name: "CMS",
    number: 3,
  },
  {
    id: 2,
    name: "Collaboration",
    number: 28,
  },
  {
    id: 3,
    name: "Developer tools",
    number: 2,
  },
  {
    id: 4,
    name: "Document",
    number: 14,
  },
  {
    id: 5,
    name: "Online learning",
    number: 2,
  },
  {
    id: 6,
    name: "Payments & e-commerce",
    number: 3,
  },
  {
    id: 7,
    name: "Research & customer experience",
    number: 3,
  },
  {
    id: 8,
    name: "Rewards",
    number: 1,
  },
  {
    id: 9,
    name: "Sales",
    number: 2,
  },
  {
    id: 10,
    name: "Scheduling",
    number: 1,
  },
  {
    id: 11,
    name: "Marketing automation",
    number: 19,
  },
  {
    id: 12,
    name: "Lead generation",
    number: 22,
  },
  {
    id: 13,
    name: "File management",
    number: 6,
  },
  {
    id: 14,
    name: "Analytics & reporting",
    number: 21,
  },
  {
    id: 15,
    name: "Automation",
    number: 1,
  },
  {
    id: 16,
    name: "Customer support",
    number: 5,
  },
  {
    id: 17,
    name: "Digital signature",
    number: 1,
  },
];
const Integrationsidebar = () => {
  return (
    <div className="sidebar-main">
      <div className="sidebar">
        <div className="border-bottom pb-4 upper-div text-center">
          <p className="font-24 px-3">Apps & Integrations</p>
          <button className="btn-style px-3 rounded-0 py-3 bg-grey font-weight-500 w-100 justify-content-start mt-4">
            Discover
          </button>
        </div>
        <div className="border-bottom pb-4 lower-div pt-4">
          <p className="px-3 pt-1 font-16 font-weight-500 pb-3">Catagories</p>
          {catagories.map((data) => {
            return (
              <button
                key={data.id}
                className="catagories-btn w-100 justify-content-between"
              >
                <span className="text-left">{data.name}</span>
                <span className="pl-4">{data.number}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Integrationsidebar;
