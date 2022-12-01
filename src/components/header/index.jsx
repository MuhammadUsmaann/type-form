import React from "react";
import { NavLink } from "react-router-dom";
import ReactTooltip from "react-tooltip";

import "../header/header.css";
const Header = () => {
  return (
    <>
      <div className="header" id="mainheader">
        <div className="d-flex align-items-center">
          <p
            className="contact-preview-box font-weight-600 text-white"
            data-tip="<p>Raza Awan</p><div id ='sddf'>Free plan - Just you</div>"
            data-html={true}
          >
            R
          </p>
          <ReactTooltip html={true} />
          <p className="font-weight-600">raza awan</p>
        </div>

        <div className="d-flex align-items-center">
          <NavLink
            to="checkout"
            className="btn-style text-white bg-green mr-12px"
          >
            View plans
          </NavLink>

          <div className="dropdown show">
            <button
              className="header-dropdown font-12 font-weight-500"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-tip="<p>Raza Awan</p><span>raza.awan@redfireai.com</span>"
              data-html={true}
            >
              RA
            </button>
            <ReactTooltip html={true} className="tooltip" />
            <div
              className="dropdown-menu header-dropdown-menu "
              aria-labelledby="dropdownMenuLink"
            >
              <div className="dropdown-item border-bottom">
                <div className="p-4-16 mb-2 d-flex align-items-center">
                  <button className="mr-12px header-dropdown font-12 font-weight-500">
                    RA
                  </button>
                  <div>
                    <p className="font-14 font-weight-500">raza awan</p>
                    <p className="font-12">raza.awan@redfirreai</p>
                  </div>
                </div>
              </div>
              <div className="dropdown-item border-bottom py-2">
                <p className="p-4-16 mb-2 font-12 font-weight-700">PROFILE</p>
                <p className="dropdown-link-style font-14 p-4-16 mb-2 mb-2">
                  Setting
                </p>
              </div>
              <div className="dropdown-item border-bottom">
                <p className="p-4-16 mb-2 font-12 font-weight-700">RESOURCES</p>
                <p className="dropdown-link-style font-14 p-4-16 mb-2">
                  Quick Help
                </p>
                <p className="dropdown-link-style font-14 p-4-16 mb-2">
                  Help Center
                </p>
                <p className="dropdown-link-style font-14 p-4-16 mb-2">
                  Ask the Community
                </p>
                <p className="dropdown-link-style font-14 p-4-16 mb-2">
                  Apps & Integrations
                </p>
                <p className="dropdown-link-style font-14 p-4-16 mb-2">
                  What's new
                </p>
              </div>
              <div className="dropdown-item mt-2 ">
                <p className="dropdown-link-style text-red font-14 p-4-16 ">
                  Log out
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
