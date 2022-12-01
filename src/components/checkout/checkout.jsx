import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Arrow from "../images/arrow";
import MainTag from "../images/headtag";
import Lthan from "../images/lthan";
import Tick from "../images/tick";
import "./checkout.css";

const plans = [
  {
    id: 1,
    name: "Business",
    descript: "Analyze performance and do more with your data",
    yearlyprice: "83 USD",
    monthlyprice: "99 USD",
    duration: "a month",
    about: "10k responses",
    responsed: "(up to 50k responses)",
    users: "5 users",
    active: true,
    destination: "business",
  },
  {
    id: 2,
    name: "Plus",
    descript: "Make your forms more beautiful and on-brand",
    yearlyprice: "55 USD",
    monthlyprice: "59 USD",
    duration: "a month",
    about: "10k responses",
    users: "3 users",
    active: false,
    destination: "plus",
  },
  {
    id: 3,
    name: "Basic",
    descript: "Create forms that connect to your workflow",
    yearlyprice: "25 USD",
    monthlyprice: "29 USD",
    duration: "a month",
    about: "100 responses",
    active: false,
    destination: "basic",
  },
  {
    id: 4,
    name: "Free",
    descript: "Discover the possibilities of conversational forms",
    yearlyprice: "0 USD",
    monthlyprice: "0 USD",
    duration: "a month",
    about: "10 responses",
    active: false,
    destination: "free",
  },
];
const navlinks = [
  {
    name: "1. Choose a plan",
    id: "1",
    active: true,
    canChange: true,
    path: "checkout",
  },
  {
    name: "2. Payment",
    id: "2",
    active: false,
    canChange: false,
    path: "/checkout/payment",
  },
  {
    name: "3. Confirmation",
    id: "3",
    active: false,
    canChange: false,
    path: "confirm",
  },
];
const featuretableRows = [
  {
    id: 1,
    business: "",
    plus: "",
    basic: "",
    free: "",
    features: "Forms & responses",
    featuresClass: "font-24 font-weight-300",
  },
  {
    id: 2,
    business: "Unlimited",
    plus: "Unlimited",
    basic: "Unlimited",
    free: "Unlimited",
    features: "Number of typeforms",
  },
  {
    id: 3,
    business: "Unlimited",
    plus: "Unlimited",
    basic: "Unlimited",
    free: "Unlimited",
    features: "Questions per typeform",
  },
  {
    id: 4,
    business: "Unlimited",
    plus: "Unlimited",
    basic: "Unlimited",
    free: "Unlimited",
    features: "Users",
  },
  {
    id: 5,
    business: "",
    plus: "",
    basic: "",
    free: "",
    features: "Interaction",
    featuresClass: "font-24 font-weight-300",
  },
  {
    id: 6,
    businesscheck: true,
    pluscheck: true,
    basiccheck: true,
    freecheck: true,
    features: "Question branching / Logic Jumps",
  },
  {
    id: 7,
    businesscheck: true,
    pluscheck: true,
    basiccheck: true,
    freecheck: true,
    features: "Multiple endings",
  },
  {
    id: 8,
    businesscheck: true,
    pluscheck: true,
    basiccheck: true,
    freecheck: true,
    features: "Recall information",
  },
  {
    id: 9,
    businesscheck: true,
    pluscheck: true,
    basiccheck: true,
    freecheck: true,
    features: "Calculator",
  },
  {
    id: 10,
    businesscheck: true,
    pluscheck: true,
    basiccheck: true,
    freecheck: false,
    features: "Receive file uploads",
  },
  {
    id: 11,
    businesscheck: true,
    pluscheck: true,
    basiccheck: true,
    freecheck: false,
    features: "Personalize with Hidden Fields",
  },
  {
    id: 12,
    businesscheck: true,
    pluscheck: true,
    basiccheck: false,
    freecheck: true,
    features: "Accept payments",
  },
  {
    id: 13,
    businesscheck: true,
    pluscheck: true,
    basiccheck: true,
    freecheck: true,
    features: "Redirect on completion",
  },
  {
    id: 14,
    businesscheck: true,
    pluscheck: true,
    basiccheck: false,
    freecheck: false,
    features: "Redirect from ending screen",
  },
];

const Checkout = () => {
  const [showFeatures, setshowFeatures] = useState(false);
  const [monthly, setmonthly] = useState(true);

  const [business, setbusiness] = useState(true);
  const [plus, setplus] = useState(false);
  const [basic, setbasic] = useState(false);
  const [free, setfree] = useState(false);

  const setPlan = (plan) => {
    if (plan === "Business") {
      setbusiness(true);
      setplus(false);
      setbasic(false);
      setfree(false);
    } else if (plan === "Plus") {
      setbusiness(false);
      setplus(true);
      setbasic(false);
      setfree(false);
    } else if (plan === "Basic") {
      setbusiness(false);
      setplus(false);
      setbasic(true);
      setfree(false);
    } else if (plan === "Free") {
      setbusiness(false);
      setplus(false);
      setbasic(false);
      setfree(true);
    }
  };
  return (
    <>
      <div className="header position-relative" id="mainheader">
        <div className="d-flex align-items-center justify-content-between w-100 ">
          <div className="d-flex align-items-center ">
            <NavLink to="/" className="pr-5 d-xl-block d-none">
              <MainTag />
            </NavLink>
            <NavLink
              to="/"
              className="d-md-none d-block btn-style font-weight-600 bg-transparent h-100 d-flex align-items-center"
            >
              <Lthan />{" "}
              <span className="pl-2 text-grey font-weight-400">
                Plan and Billing
              </span>
            </NavLink>
            <div
              className="pl-5 align-items-center justify-content-between h-100 d-md-flex d-none"
              id="checkout-header-link"
            >
              {navlinks.map((data) => {
                return (
                  <>
                    {data.canChange ? (
                      <NavLink
                        to={`/${data.path}`}
                        key={data.id}
                        className={`btn-style mr-4 p-0 font-weight-600 bg-transparent h-100 d-flex align-items-center ${
                          data.active
                            ? "text-black active-link-border-bottom"
                            : "text-grey"
                        }`}
                        disabled={!data.canChange ? true : false}
                      >
                        <span className={`${data.active ? "pt-1" : ""}`}>
                          {data.name}
                        </span>
                      </NavLink>
                    ) : (
                      <button
                        key={data.id}
                        className={`btn-style mr-4 p-0 font-weight-600 bg-transparent h-100 d-flex align-items-center ${
                          data.active
                            ? "text-black active-link-border-bottom"
                            : "text-grey"
                        }`}
                        disabled={!data.canChange ? true : false}
                      >
                        <span className={`${data.active ? "pt-1" : ""}`}>
                          {data.name}
                        </span>
                      </button>
                    )}
                  </>
                );
              })}
            </div>
          </div>
          <NavLink to="/" className="btn-style text-dark d-md-block d-none">
            <i className="fa-solid fa-xmark"></i>
          </NavLink>
        </div>
      </div>
      <div className="align-items-center justify-content-around h-100 d-md-none d-flex border-bottom">
        {navlinks.map((data) => {
          return (
            <>
              {data.canChange ? (
                <NavLink
                  to={`/${data.path}`}
                  key={data.id}
                  className={`btn-style mr-4 p-0 font-weight-600 bg-transparent h-100 d-flex align-items-center ${
                    data.active
                      ? "text-black active-link-border-bottom"
                      : "text-grey"
                  }`}
                  disabled={!data.canChange ? true : false}
                >
                  <span className={`${data.active ? "pt-1" : ""}`}>
                    {data.name}
                  </span>
                </NavLink>
              ) : (
                <button
                  key={data.id}
                  className={`btn-style mr-4 p-0 font-weight-600 bg-transparent h-100 d-flex align-items-center ${
                    data.active
                      ? "text-black active-link-border-bottom"
                      : "text-grey"
                  }`}
                  disabled={!data.canChange ? true : false}
                >
                  <span className={`${data.active ? "pt-1" : ""}`}>
                    {data.name}
                  </span>
                </button>
              )}
            </>
          );
        })}
      </div>

      <div className="chekcout-main">
        <div className="container p-0 pb-3" id="checkout">
          <div className="d-flex align-items-center justify-content-md-start justify-content-center pt-4 p-3">
            <p
              className={`font-14 font-weight-500 ${
                !monthly ? "text-grey" : "text-dark"
              } pl-1`}
            >
              Monthly
            </p>
            <label className="switch mx-2">
              <input type="checkbox" onChange={() => setmonthly(!monthly)} />
              <span className="slider round"></span>
            </label>
            <p
              className={`font-14 font-weight-500 ${
                monthly ? "text-grey" : "text-dark"
              } `}
            >
              Yearly
              <span className="text-dark font-weight-300 pl-1">(Save 16%)</span>
            </p>
          </div>
          <div className="row pt-4 m-0 ">
            <div className="col-xl-8 col-12" id="planstarget">
              <div className="d-flex justify-content-center align-items-center mb-5">
                <div
                  className="row w-md-100 flex-md-row mr-4 mr-md-0 flex-column m-0 nav nav-pills mb-5 nav  nav-pills d-flex "
                  id="v-pills-tab"
                  role="tablist"
                >
                  {plans.map((data) => {
                    return (
                      <div
                        key={data.id}
                        onClick={() => setPlan(data.name)}
                        className={` col-md-3 col-12 p-0 plan-card cr-p ${
                          data.active ? "active" : ""
                        }`}
                        id={`v-pills-${data.id}-tab`}
                        data-toggle="pill"
                        href={`#v-pills-${data.id}`}
                        role="tab"
                        aria-controls={`v-pills-${data.id}`}
                        aria-selected="true"
                      >
                        <div className="card rounded-md d-md-block d-none p-3">
                          <div className="splitame">
                            <p className="font-22">{data.name}</p>
                            <p className="font-12 text-grey pb-4">
                              {data.descript}
                            </p>
                          </div>
                          <p className="font-30">
                            {monthly ? data.monthlyprice : data.yearlyprice}
                          </p>
                          <p className="font-12 text-grey pb-3">
                            {data.duration}
                          </p>
                          <p className="font-14">
                            <span className="pr-2">
                              <Tick />
                            </span>
                            {data.about}
                          </p>
                          <p className="font-12 text-grey">{data.responsed}</p>
                          {data.users ? (
                            <p className="font-14">
                              <span className="pr-2">
                                <Tick />
                              </span>
                              {data.users}
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                        <button
                          className={`btn-style m-0 w-100 mb-2 reponsive-tabs-btn d-md-none d-block `}
                        >
                          {data.name}
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="card reponsive-plan-card rounded-md d-md-none d-block p-3">
                  <div className="splitame">
                    <p className="font-22">
                      {business ? (
                        "Business"
                      ) : (
                        <>
                          {plus ? (
                            "Plus"
                          ) : (
                            <>{basic ? "Basic" : <>{free ? "Free" : ""}</>}</>
                          )}
                        </>
                      )}
                    </p>
                    <p className="font-12 text-grey pb-4">
                      {business ? (
                        "Analyze performance and do more with your data"
                      ) : (
                        <>
                          {plus ? (
                            "Create forms that connect to your workflow"
                          ) : (
                            <>
                              {basic ? (
                                "Create forms that connect to your workflow:"
                              ) : (
                                <>
                                  {free
                                    ? "Discover the possibilities of conversational forms"
                                    : ""}
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </p>
                  </div>
                  <p className="font-30">
                    {monthly ? (
                      <>
                        {business ? (
                          "89 USD"
                        ) : (
                          <>
                            {plus ? (
                              "59 USD"
                            ) : (
                              <>
                                {basic ? "29 USD" : <>{free ? "0 USD" : ""}</>}
                              </>
                            )}
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        {business ? (
                          "83 USD"
                        ) : (
                          <>
                            {plus ? (
                              "25 USD"
                            ) : (
                              <>
                                {basic ? "25 USD" : <>{free ? "0 USD" : ""}</>}
                              </>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </p>
                  <p className="font-12 text-grey pb-3">a month</p>
                  <p className="font-14">
                    <span className="pr-2">
                      <Tick />
                    </span>

                    {business ? (
                      "10k responses"
                    ) : (
                      <>
                        {plus ? (
                          "1k responses"
                        ) : (
                          <>
                            {basic ? (
                              "100 responses"
                            ) : (
                              <>{free ? "10 responses" : ""}</>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </p>
                  {!basic && !free && (
                    <p className="font-14">
                      <span className="pr-2">
                        <Tick />
                      </span>

                      {business ? "5 users" : <>{plus ? "3 users" : ""}</>}
                    </p>
                  )}
                </div>
              </div>

              <div className="d-md-block d-none">
                <p className="font-24">
                  How many responses a month do you need?
                </p>

                {!free ? (
                  <>
                    <div
                      className="btn-group rounded-0 btn-group-toggle pt-4"
                      data-toggle="buttons"
                    >
                      <label className="btn font-14 bg-grey active mr-2 rounded d-flex align-items-center">
                        <input
                          type="radio"
                          name="options"
                          id="option1"
                          autoComplete="off"
                          checked
                          readOnly
                        />
                        {business ? (
                          <span className="px-2 font-16">10k</span>
                        ) : (
                          ""
                        )}
                        {plus ? <span className="px-2 font-16">1k</span> : ""}
                        {basic ? <span className="px-2 font-16">100</span> : ""}
                      </label>
                      <label className="btn mx-2 font-14 bg-grey rounded d-flex align-items-center">
                        <input
                          type="radio"
                          name="options"
                          id="option2"
                          autoComplete="off"
                          readOnly
                        />
                        {business ? (
                          <span className="px-2 font-16">15k</span>
                        ) : (
                          ""
                        )}
                        {plus ? <span className="px-2 font-16">1.5k</span> : ""}
                        {basic ? (
                          <span className="px-2 font-16">250</span>
                        ) : (
                          ""
                        )}{" "}
                      </label>
                      <label className="btn mx-2 font-14 bg-grey rounded d-flex align-items-center">
                        <input
                          type="radio"
                          name="options"
                          id="option3"
                          autoComplete="off"
                          readOnly
                        />
                        {business ? (
                          <span className="px-2 font-16">25k</span>
                        ) : (
                          ""
                        )}
                        {plus ? <span className="px-2 font-16">1.5k</span> : ""}
                        {basic ? (
                          <span className="px-2 font-16">500</span>
                        ) : (
                          ""
                        )}{" "}
                      </label>
                      <label className="btn mx-2 font-14 bg-grey rounded d-flex align-items-center">
                        <input
                          type="radio"
                          name="options"
                          id="option4"
                          autoComplete="off"
                        />
                        {business ? (
                          <span className="px-2 font-16">50k</span>
                        ) : (
                          ""
                        )}
                        {plus ? <span className="px-2 font-16">2.5k</span> : ""}
                        {basic ? (
                          <span className="px-2 font-16">750</span>
                        ) : (
                          ""
                        )}{" "}
                      </label>
                      {business ? (
                        <label className="btn mx-2 font-14 bg-grey rounded d-flex align-items-center">
                          <input
                            type="radio"
                            name="options"
                            id="option4"
                            autoComplete="off"
                          />
                          <span className="px-2 font-16">&gt;50k</span>
                        </label>
                      ) : (
                        ""
                      )}
                    </div>

                    <p className="pt-4 pr-4 text-grey font-14">
                      A response is counted when someone submits your typeform.
                      We'll email you well before you reach your plan's response
                      limit, and you can adjust how many responses your plan
                      includes whenever you need.
                    </p>
                  </>
                ) : (
                  ""
                )}
                <div className="py-3">
                  <p>Unlock your growth with advanced features and support.</p>
                  <p>
                    <span className="text-dark cr-p">
                      <u>Contact Sales</u>
                    </span>
                    to learn more about our enterprise plan.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-12">
              <div className="new-plan-card">
                <div className="pt-3 pb-2 pl-4 border-bottom d-xl-block d-none">
                  <p className="font-weight-600">Your new plan</p>
                </div>
                <div
                  className="tab-pane fade show active "
                  id={`v-pills-1`}
                  role="tabpanel"
                  aria-labelledby={`v-pills-1-tab`}
                >
                  <div className="px-4 py-3 d-xl-block d-none">
                    <div className="d-flex pb-1 align-items-center justify-content-between">
                      <p>Business (monthly)</p>
                      <p className="font-weight-600">
                        {" "}
                        {monthly ? "99 USD" : "83 USD"}
                      </p>
                    </div>
                    <div>
                      <p className="pb-1">10,000 responses/mo</p>
                      <p className="pb-3 border-bottom">5 users</p>
                    </div>
                  </div>

                  <div className="px-4 pb-3 d-xl-block d-none">
                    <div className="d-flex align-items-center justify-content-between font-weight-600">
                      <p>Total</p>
                      <p className=""> {monthly ? "99 USD" : "83 USD"}</p>
                    </div>
                    <p className="pb-3 border-bottom">(excl. tax)</p>
                  </div>
                  <div className="p-0 px-xl-4 pb-xl-3">
                    <ul className="font-12 text-grey p-0 pl-3 d-xl-block d-none">
                      <li>
                        You'll pay
                        <span className="font-weight-600">
                          {" "}
                          {monthly ? "99 USD" : "83 USD"}{" "}
                        </span>
                        now, which is prorated for the current billing period.
                      </li>
                      <li>
                        Your plan is
                        <span className="font-weight-600">billed monthly</span>
                        and will renew for
                        <span className="font-weight-600">
                          {" "}
                          {monthly ? "99 USD" : "83 USD"}
                        </span>{" "}
                        (plus any applicable taxes and minus any discounts) on
                        <span className="font-weight-600"> Dec 28, 2022</span>.
                      </li>
                      <li>You can cancel any time before this date.</li>
                    </ul>
                    <div className="w-100">
                      <div className="w-100 d-md-none d-block">
                        <p className="font-20 font-weight-300 pb-2 ">
                          Adjust your monthly responses
                        </p>

                        <select
                          name=""
                          id=""
                          className="w-100 py-2 mb-3 btn-style border"
                        >
                          <option value="">10000 responses a month</option>
                          <option value="">15000 responses a month</option>
                          <option value="">25000 responses a month</option>
                          <option value="">50000 responses a month</option>
                          <option value="">+50000 responses a month</option>
                        </select>
                      </div>
                      <NavLink
                        to="/checkout/payment"
                        type="button"
                        className="btn-style py-2 font-16 bg-dark text-light w-100"
                      >
                        Continue
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade "
                  id={`v-pills-2`}
                  role="tabpanel"
                  aria-labelledby={`v-pills-2-tab`}
                >
                  <div className="px-4 py-3 d-xl-block d-none">
                    <div className="d-flex pb-1 align-items-center justify-content-between">
                      <p>Plus (monthly)</p>
                      <p className="font-weight-600">
                        {" "}
                        {monthly ? "59 USD" : "55 USD"}
                      </p>
                    </div>
                    <div>
                      <p className="pb-1">1,000 responses/mo</p>
                      <p className="pb-3 border-bottom">3 users</p>
                    </div>
                  </div>

                  <div className="px-4 pb-3 d-xl-block d-none">
                    <div className="d-flex align-items-center justify-content-between font-weight-600">
                      <p>Total</p>
                      <p className=""> {monthly ? "59 USD" : "55 USD"}</p>
                    </div>
                    <p className="pb-3 border-bottom">(excl. tax)</p>
                  </div>
                  <div className="p-0 px-xl-4 pb-xl-3">
                    <ul className="font-12 text-grey p-0 pl-3 d-xl-block d-none">
                      <li>
                        You'll pay
                        <span className="font-weight-600">
                          {" "}
                          {monthly ? "59 USD" : "55 USD"}{" "}
                        </span>
                        now, which is prorated for the current billing period.
                      </li>
                      <li>
                        Your plan is
                        <span className="font-weight-600">billed monthly</span>
                        and will renew for
                        <span className="font-weight-600"> 59 USD</span> (plus
                        any applicable taxes and minus any discounts) on
                        <span className="font-weight-600"> Dec 28, 2022</span>.
                      </li>
                      <li>You can cancel any time before this date.</li>
                    </ul>
                    <div className="w-100">
                      <div className="w-100 d-md-none d-block">
                        <p className="font-20 font-weight-300 pb-2 ">
                          Adjust your monthly responses
                        </p>

                        <select
                          name=""
                          id=""
                          className="w-100 py-2 mb-3 btn-style border"
                        >
                          <option value="">1000 responses a month</option>
                          <option value="">1500 responses a month</option>
                          <option value="">2000 responses a month</option>
                          <option value="">2500 responses a month</option>
                        </select>
                      </div>
                      <NavLink
                        to="/checkout/payment"
                        type="button"
                        className="btn-style py-2 font-16 bg-dark text-light w-100"
                      >
                        Continue
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade "
                  id={`v-pills-3`}
                  role="tabpanel"
                  aria-labelledby={`v-pills-3-tab`}
                >
                  <div className="px-4 py-3 d-xl-block d-none">
                    <div className="d-flex pb-1 align-items-center justify-content-between">
                      <p>Plus (monthly)</p>
                      <p className="font-weight-600">
                        {" "}
                        {monthly ? "29 USD" : "25 USD"}
                      </p>
                    </div>
                    <div>
                      <p className="pb-1">100 responses/mo</p>
                      <p className="pb-3 border-bottom">1 users</p>
                    </div>
                  </div>

                  <div className="px-4 pb-3 d-xl-block d-none">
                    <div className="d-flex align-items-center justify-content-between font-weight-600">
                      <p>Total</p>
                      <p className=""> {monthly ? "29 USD" : "25 USD"}</p>
                    </div>
                    <p className="pb-3 border-bottom">(excl. tax)</p>
                  </div>
                  <div className="p-0 px-xl-4 pb-xl-3">
                    <ul className="font-12 text-grey p-0 pl-3 d-xl-block d-none">
                      <li>
                        You'll pay
                        <span className="font-weight-600">
                          {" "}
                          {monthly ? "29 USD" : "25 USD"}{" "}
                        </span>
                        now, which is prorated for the current billing period.
                      </li>
                      <li>
                        Your plan is
                        <span className="font-weight-600">billed monthly</span>
                        and will renew for
                        <span className="font-weight-600"> 59 USD</span> (plus
                        any applicable taxes and minus any discounts) on
                        <span className="font-weight-600"> Dec 28, 2022</span>.
                      </li>
                      <li>You can cancel any time before this date.</li>
                    </ul>
                    <div className="w-100">
                      <div className="w-100 d-md-none d-block">
                        <p className="font-20 font-weight-300 pb-2 ">
                          Adjust your monthly responses
                        </p>

                        <select
                          name=""
                          id=""
                          className="w-100 py-2 mb-3 btn-style border"
                        >
                          <option value="">100 responses a month</option>
                          <option value="">250 responses a month</option>
                          <option value="">500 responses a month</option>
                          <option value="">750 responses a month</option>
                        </select>
                      </div>
                      <NavLink
                        to="/checkout/payment"
                        type="button"
                        className="btn-style py-2 font-16 bg-dark text-light w-100"
                      >
                        Continue
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id={`v-pills-4`}
                  role="tabpanel"
                  aria-labelledby={`v-pills-4-tab`}
                >
                  <div className="p-0 px-xl-4 pb-xl-3 ">
                    <div className="py-3 d-xl-block d-none">
                      <p className="pb-1">Free </p>
                      <p className="pb-1">10 responses/mo </p>
                      <p className="pb-1">1 user</p>
                    </div>
                    <div>
                      <button
                        type="button"
                        disabled
                        className="btn-style py-2 font-16 bg-grey text-grey w-100"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="features-detail">
          <div className="px-3 py-3 container d-md-block d-none">
            <div className="d-flex align-items-center">
              <p
                className="font-22 cr-p pr-2 mb-1"
                onClick={() => setshowFeatures(!showFeatures)}
              >
                See all features
              </p>
              <span
                className={`${
                  showFeatures ? "feature-arrow-up" : "feature-arrow-down"
                }`}
              >
                <Arrow />
              </span>
            </div>
            {showFeatures ? (
              <div id="featuretable">
                <table className="w-100">
                  <thead>
                    <tr>
                      <th> </th>
                      <th
                        className={`font-24 font-weight-400 ${
                          business ? "bg-grey" : ""
                        }`}
                      >
                        Business
                      </th>
                      <th
                        className={`font-24 font-weight-400 ${
                          plus ? "bg-grey" : ""
                        }`}
                      >
                        Plus
                      </th>
                      <th
                        className={`font-24 font-weight-400 ${
                          basic ? "bg-grey" : ""
                        }`}
                      >
                        Basic
                      </th>
                      <th
                        className={`font-24 font-weight-400 ${
                          free ? "bg-grey" : ""
                        }`}
                      >
                        Free
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {featuretableRows.map((data,index) => {
                      return (
                        <tr key={index}>
                          <td
                            className={
                              data.featuresClass
                                ? data.featuresClass
                                : "font-14 font-weight-600"
                            }
                          >
                            {data.features}
                          </td>
                          <td className={`${business ? "bg-grey" : ""}`}>
                            {data.business ? (
                              <>{data.business}</>
                            ) : (
                              <>{data.businesscheck ? <Tick /> : ""}</>
                            )}
                          </td>
                          <td className={`${plus ? "bg-grey" : ""}`}>
                            {data.plus ? (
                              <>{data.plus}</>
                            ) : (
                              <>{data.pluscheck ? <Tick /> : ""}</>
                            )}
                          </td>
                          <td className={`${basic ? "bg-grey" : ""}`}>
                            {data.basic ? (
                              <>{data.basic}</>
                            ) : (
                              <>{data.basiccheck ? <Tick /> : ""}</>
                            )}
                          </td>
                          <td className={`${free ? "bg-grey" : ""}`}>
                            {data.free ? (
                              <>{data.free}</>
                            ) : (
                              <>{data.freecheck ? <Tick /> : ""}</>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="  d-md-none d-block">
            <div id="featuretable">
              {business ? (
                <p className="pl-1 pb-3 font-weight-400 font-24">Business</p>
              ) : (
                ""
              )}
              {plus ? (
                <p className="pl-1 pb-3 font-weight-400 font-24">Plus</p>
              ) : (
                ""
              )}
              {basic ? (
                <p className="pl-1 pb-3 font-weight-400 font-24">Basic</p>
              ) : (
                ""
              )}
              {free ? (
                <p className="pl-1 pb-3 font-weight-400 font-24">Free</p>
              ) : (
                ""
              )}
              <table className="w-100">
                <tbody>
                  {featuretableRows.map((data,index) => {
                    return (
                      <tr key={index}>
                        <td
                          className={
                            data.featuresClass
                              ? data.featuresClass
                              : "font-14 font-weight-600"
                          }
                        >
                          {data.features}
                        </td>
                        <td className={`${business ? "d-block" : "d-none"}`}>
                          {data.business ? (
                            <>{data.business}</>
                          ) : (
                            <>{data.businesscheck ? <Tick /> : ""}</>
                          )}
                        </td>
                        <td className={`${plus ? "d-block" : "d-none"}`}>
                          {data.plus ? (
                            <>{data.plus}</>
                          ) : (
                            <>{data.pluscheck ? <Tick /> : ""}</>
                          )}
                        </td>
                        <td className={`${basic ? "d-block" : "d-none"}`}>
                          {data.basic ? (
                            <>{data.basic}</>
                          ) : (
                            <>{data.basiccheck ? <Tick /> : ""}</>
                          )}
                        </td>
                        <td className={`${free ? "d-block" : "d-none"}`}>
                          {data.free ? (
                            <>{data.free}</>
                          ) : (
                            <>{data.freecheck ? <Tick /> : ""}</>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
