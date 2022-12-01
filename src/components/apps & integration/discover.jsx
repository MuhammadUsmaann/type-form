import React from "react";
import Hubspot from "../images/hubspot";
import GoogleSheets from "../images/google-sheets";
import Slack from "../images/slack";

import Search from "../images/search";
import { NavLink } from "react-router-dom";
import Zapier from "../images/zapier";
import Visit from "../images/visit";
const mostpopularcard = [
  {
    id: 1,
    name: "HubSpot",
    about:
      "Send contact, company, or deal info to HubSpot to quickly follow up on new leads or update existing details to your free HubSpot account.",
    icon: <Hubspot height="30" width="30" />,
  },
  {
    id: 2,
    name: "Google Sheets",
    about:
      "Send your data straight to Google Sheets. Automatically syncs as results come in. Oh sheet!",
    icon: <GoogleSheets height="30" width="30" />,
  },
  {
    id: 3,
    name: "Slack",
    about:
      "Notify a channel or individual in Slack with real-time typeform responses so the right person can react in an instant.",
    icon: <Slack height="30" width="30" />,
  },
];
const smallcard = [
  {
    id: 1,
    name: "HubSpot",
    about:
      "Send contact, company, or deal info to HubSpot to quickly follow up on new leads or update existing details to your free HubSpot account.",
    icon: <Hubspot height="15" width="15" />,
  },
  {
    id: 2,
    name: "Google Sheets",
    about:
      "Send your data straight to Google Sheets. Automatically syncs as results come in. Oh sheet!",
    icon: <GoogleSheets height="15" width="15" />,
  },
  {
    id: 3,
    name: "Slack",
    about:
      "Notify a channel or individual in Slack with real-time typeform responses so the right person can react in an instant.",
    icon: <Slack height="15" width="15" />,
  },
  {
    id: 4,
    name: "Google Sheets",
    about:
      "Send your data straight to Google Sheets. Automatically syncs as results come in. Oh sheet!",
    icon: <GoogleSheets height="15" width="15" />,
  },
  {
    id: 5,
    name: "Slack",
    about:
      "Notify a channel or individual in Slack with real-time typeform responses so the right person can react in an instant.",
    icon: <Slack height="15" width="15" />,
  },
  {
    id: 6,
    name: "HubSpot",
    about:
      "Send contact, company, or deal info to HubSpot to quickly follow up on new leads or update existing details to your free HubSpot account.",
    icon: <Hubspot height="15" width="15" />,
  },
  {
    id: 7,
    name: "Google Sheets",
    about:
      "Send your data straight to Google Sheets. Automatically syncs as results come in. Oh sheet!",
    icon: <GoogleSheets height="15" width="15" />,
  },
  {
    id: 8,
    name: "Slack",
    about:
      "Notify a channel or individual in Slack with real-time typeform responses so the right person can react in an instant.",
    icon: <Slack height="15" width="15" />,
  },
  {
    id: 9,
    name: "Google Sheets",
    about:
      "Send your data straight to Google Sheets. Automatically syncs as results come in. Oh sheet!",
    icon: <GoogleSheets height="15" width="15" />,
  },
  {
    id: 10,
    name: "Slack",
    about:
      "Notify a channel or individual in Slack with real-time typeform responses so the right person can react in an instant.",
    icon: <Slack height="15" width="15" />,
  },
  {
    id: 11,
    name: "Google Sheets",
    about:
      "Send your data straight to Google Sheets. Automatically syncs as results come in. Oh sheet!",
    icon: <GoogleSheets height="15" width="15" />,
  },
  {
    id: 12,
    name: "Slack",
    about:
      "Notify a channel or individual in Slack with real-time typeform responses so the right person can react in an instant.",
    icon: <Slack height="15" width="15" />,
  },
  {
    id: 13,
    name: "HubSpot",
    about:
      "Send contact, company, or deal info to HubSpot to quickly follow up on new leads or update existing details to your free HubSpot account.",
    icon: <Hubspot height="15" width="15" />,
  },
  {
    id: 14,
    name: "Google Sheets",
    about:
      "Send your data straight to Google Sheets. Automatically syncs as results come in. Oh sheet!",
    icon: <GoogleSheets height="15" width="15" />,
  },
  {
    id: 15,
    name: "Slack",
    about:
      "Notify a channel or individual in Slack with real-time typeform responses so the right person can react in an instant.",
    icon: <Slack height="15" width="15" />,
  },
  {
    id: 16,
    name: "Google Sheets",
    about:
      "Send your data straight to Google Sheets. Automatically syncs as results come in. Oh sheet!",
    icon: <GoogleSheets height="15" width="15" />,
  },
  {
    id: 17,
    name: "Slack",
    about:
      "Notify a channel or individual in Slack with real-time typeform responses so the right person can react in an instant.",
    icon: <Slack height="15" width="15" />,
  },
  {
    id: 18,
    name: "HubSpot",
    about:
      "Send contact, company, or deal info to HubSpot to quickly follow up on new leads or update existing details to your free HubSpot account.",
    icon: <Hubspot height="15" width="15" />,
  },
];

const Discover = () => {
  return (
    <div className="discover-main position-relative">
      <NavLink id="close" to="/">
        <i className="fa-solid fa-xmark"></i>
      </NavLink>
      <div className="d-flex justify-content-between flex-md-row flex-column align-items-md-center mb-5 align-items-start">
        <p className="font-36 font-weight-300 pb-md-0 pb-3 font-weight-300">
          Discover Apps & Integrations
        </p>
        <div className="d-flex justify-content-between  align-items-center px-2 mt-2 border rounded bg-white">
          <Search />
          <input
            type="text"
            placeholder="Enter a search term"
            className="font-14 px-2 py-1 border-0 rounded py-1"
          />
        </div>
      </div>
      <div className="border-bottom pb-5">
        <div className="pb-4">
          <p className="font-24 font-weight-300">Most popular</p>
          <p className="font-14 text-grey mt-1">
            Save time and effort with these top integrations for Typeform
          </p>
        </div>
        <div className="row m-0">
          {mostpopularcard.map((data, index) => {
            return (
              <div key={index} className="pl-0 pb-md-0 pb-3 col-md-4 col-12 ">
                <div className="mp-card h-100">
                  <div className="mp-card-icon">{data.icon}</div>
                  <p className="font-14 font-weight-600 mt-4">{data.name}</p>
                  <p className="font-12 pt-1">{data.about}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-bottom py-5">
        <div className="row m-0">
          {smallcard.map((data, index) => {
            return (
              <div key={index} className="pl-0 pb-3 col-md-4 col-12 ">
                <div className="mp-card p-3">
                  <div className="d-flex justify-content-left align-items-start">
                    <div className="mp-card-icon-small">{data.icon}</div>
                    <div className="pl-3">
                      <p className="font-14 font-weight-600 ">{data.name}</p>
                      <p className="font-12 pt-1">{data.about}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-bottom py-5">
        <div className="pb-4">
          <p className="font-24 font-weight-300">Built by our partners</p>
          <p className="font-14 text-grey mt-1">
            Third-party apps with Typeform integrations
          </p>
        </div>
        <div className="row m-0">
          {smallcard.map((data, index) => {
            return (
              <div key={index} className="pl-0 pb-3 col-md-4 col-12 ">
                <div className="mp-card p-3">
                  <div className="d-flex justify-content-left align-items-start">
                    <div className="mp-card-icon-small">{data.icon}</div>
                    <div className="pl-3">
                      <p className="font-14 font-weight-600 ">{data.name}</p>
                      <p className="font-12 pt-1">{data.about}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-bottom py-5">
        <div className="pb-4">
          <p className="font-24 font-weight-300">More options with Zapier</p>
          <p className="font-14 text-grey mt-1">
            Connect Typeform to thousands of apps via Zapier{" "}
          </p>
        </div>
        <div className="row m-0">
          <div className="col-md-8 col-12 pb-3 pl-0">
            <div className="mp-card p-3">
              <div className="d-flex justify-content-left align-items-start">
                <div className="mp-card-icon-small">
                  <Zapier />
                </div>
                <div className="pl-3 w-100">
                  <div className="border-bottom pb-3">
                    <p className="font-14 font-weight-600 ">Zapier</p>
                    <p className="font-12 pt-1">
                      Our integration with Zapier helps you easily push data you
                      collect on Typeform to over 2.000 services
                    </p>
                  </div>
                  <div className="d-flex justify-content-left align-items-start py-3 border-bottom ">
                    <div className="mp-card-icon-small">
                      <Zapier />
                    </div>
                    <div className="pl-2 w-100">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="font-14 font-weight-600 ">Zapier</p>
                        <button className="font-12 py-0 btn-style bg-grey">Visit</button>
                      </div>
                      <p className="font-12 pt-1">
                        Our integration with Zapier helps you easily push data
                        you collect on Typeform to over 2.000 services
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-left align-items-start py-3 border-bottom ">
                    <div className="mp-card-icon-small">
                      <Zapier />
                    </div>
                    <div className="pl-2 w-100">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="font-14 font-weight-600 ">Zapier</p>
                        <button className="font-12 py-0 btn-style bg-grey">Visit</button>
                      </div>
                      <p className="font-12 pt-1">
                        Our integration with Zapier helps you easily push data
                        you collect on Typeform to over 2.000 services
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-left align-items-start py-3 border-bottom ">
                    <div className="mp-card-icon-small">
                      <Zapier />
                    </div>
                    <div className="pl-2 w-100">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="font-14 font-weight-600 ">Zapier</p>
                        <button className="font-12 py-0 btn-style bg-grey">Visit</button>
                      </div>
                      <p className="font-12 pt-1">
                        Our integration with Zapier helps you easily push data
                        you collect on Typeform to over 2.000 services
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-left align-items-start py-3 border-bottom ">
                    <div className="mp-card-icon-small">
                      <Zapier />
                    </div>
                    <div className="pl-2 w-100">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="font-14 font-weight-600 ">Zapier</p>
                        <button className="font-12 py-1 btn-style bg-grey">Visit</button>
                      </div>
                      <p className="font-12 pt-1">
                        Our integration with Zapier helps you easily push data
                        you collect on Typeform to over 2.000 services
                      </p>
                    </div>
                  </div>
                  <button className="btn-style bg-grey mt-3"><Visit/><span className="pl-2">Visit Zapier</span></button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 pl-0">
            <div className="question-check">
              <p>Can't find what you’re looking for?</p>
              <button className="btn-style bg-dark text-light mt-2">
                Request an integration
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
