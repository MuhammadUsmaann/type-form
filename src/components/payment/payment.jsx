import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MainTag from "../images/headtag";
import Lthan from "../images/lthan";
import "../payment/payment.css";
import CreditCardInput from "react-credit-card-input";

const navlinks = [
  {
    name: "1. Choose a plan",
    id: "1",
    active: false,
    canChange: true,
    path: "checkout",
  },
  {
    name: "2. Payment",
    id: "2",
    active: true,
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

const Payment = () => {
  const [monthly, setmonthly] = useState(false);
  const [coupen, setcoupen] = useState("");
  const [editbilldetail, seteditbilldetail] = useState(true);
  const [editpaydetail, seteditpaydetail] = useState(true);

  const [cardNumber, setcardNumber] = useState("");
  const [expiry, setexpiry] = useState("");
  const [cvc, setcvc] = useState("");
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [postalcode, setpostalcode] = useState("");
  const [country, setcountry] = useState("");
  const [city, setcity] = useState("");
  const [nameoncard, setnameoncard] = useState("");

  const handleCardNumberChange = (e) => {
    setcardNumber(e.target.value);
  };
  const handleCardExpiryChange = (e) => {
    setexpiry(e.target.value);
  };
  const handleCardCVCChange = (e) => {
    setcvc(e.target.value);
  };
  const setBillingCheck = (e) => {
    e.preventDefault();
    seteditbilldetail(!editbilldetail);
  };
  const setPaymentCheck = (e) => {
    e.preventDefault();
    seteditpaydetail(!editpaydetail);
  };
  let ccNumber = cardNumber;
  let lastFourDigits = ccNumber.substr(-4);
  return (
    <>
      <div className="header position-relative" id="mainheader">
        <div className="d-flex align-items-center justify-content-between w-100 ">
          <div className="d-flex align-items-center ">
            <NavLink to="/" className="pr-5 d-md-block d-none">
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
                  <div key={data.id}>
                    {data.canChange ? (
                      <NavLink
                        to={`/${data.path}`}
                        className={`btn-style mr-4 p-0 font-weight-600 bg-transparent h-100 d-flex align-items-center ${
                          data.active
                            ? "text-black active-link-border-bottom"
                            : "text-grey"
                        }`}
                      >
                        <span className={`${data.active ? "pt-1" : ""}`}>
                          {data.name}
                        </span>
                      </NavLink>
                    ) : (
                      <button
                        className={`btn-style mr-4 p-0 font-weight-600 bg-transparent h-100 d-flex align-items-center ${
                          data.active
                            ? "text-black active-link-border-bottom"
                            : "text-grey"
                        }`}
                      >
                        <span className={`${data.active ? "pt-1" : ""}`}>
                          {data.name}
                        </span>
                      </button>
                    )}
                  </div>
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
            <div key={data.id}>
              {data.canChange ? (
                <NavLink
                  to={`/${data.path}`}
                  className={`btn-style mr-4 p-0 font-weight-600 bg-transparent h-100 d-flex align-items-center ${
                    data.active
                      ? "text-black active-link-border-bottom"
                      : "text-grey"
                  }`}
                >
                  <span className={`${data.active ? "pt-1" : ""}`}>
                    {data.name}
                  </span>
                </NavLink>
              ) : (
                <button
                  className={`btn-style mr-4 p-0 font-weight-600 bg-transparent h-100 d-flex align-items-center ${
                    data.active
                      ? "text-black active-link-border-bottom"
                      : "text-grey"
                  }`}
                >
                  <span className={`${data.active ? "pt-1" : ""}`}>
                    {data.name}
                  </span>
                </button>
              )}
            </div>
          );
        })}
      </div>

      <div className="chekcout-main" id="payment">
        <div className="container p-0 pb-3" id="checkout">
          <div className="row  m-0 ">
            <div
              className="col-lg-8 col-md-6 p-md-3 p-0 col-12"
              id="planstarget"
            >
              <div className="payment-card mt-md-0 mx-md-0 m-4">
                <p className="mb-3 font-16 font-weight-500">
                  1. Billing details
                </p>

                {editbilldetail ? (
                  <form onSubmit={setBillingCheck}>
                    <div className="d-flex flex-column mb-3">
                      <label className="font-14 text-grey pb-1" htmlFor="name">
                        Name or company*
                      </label>
                      <input
                        type="text"
                        className="styled-input"
                        required
                        id="name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                      />
                    </div>

                    <div className="row m-0 mb-3">
                      <div className="d-flex col-8 pl-0 flex-column">
                        <label
                          className="font-14 text-grey pb-1"
                          htmlFor="address"
                        >
                          Address*
                        </label>
                        <input
                          type="text"
                          className="styled-input"
                          required
                          id="address"
                          value={address}
                          onChange={(e) => setaddress(e.target.value)}
                        />
                      </div>

                      <div className="d-flex col-4 p-0 flex-column">
                        <label
                          className="font-14 text-grey pb-1"
                          htmlFor="pcode"
                        >
                          Postal code*
                        </label>
                        <input
                          type="text"
                          className="styled-input"
                          required
                          id="pcode"
                          value={postalcode}
                          onChange={(e) => setpostalcode(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="d-flex flex-column mb-3">
                      <label
                        className="font-14 text-grey pb-1"
                        htmlFor="country"
                      >
                        Country*
                      </label>
                      <select
                        name=""
                        id=""
                        value={country}
                        className="w-100"
                        onChange={(e) => setcountry(e.target.value)}
                      >
                        <option value="Pakistan">Pakistan</option>
                        <option value="Chine">Chine</option>
                        <option value="India">India</option>
                        <option value="Iran">Iran</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Austrailia">Austrailia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Dubai">Dubai</option>
                        <option value="Qatar">Qatar</option>
                      </select>
                    </div>

                    <div className="d-flex flex-column mb-3">
                      <label className="font-14 text-grey pb-1" htmlFor="city">
                        City*
                      </label>
                      <input
                        type="text"
                        className="styled-input"
                        id="city"
                        value={city}
                        onChange={(e) => setcity(e.target.value)}
                      />
                    </div>
                    <div className="mt-4">
                      <button className="btn bg-dark  text-light mr-3">
                        Save
                      </button>
                      <button className="btn bg-grey ">Cancel</button>
                    </div>
                  </form>
                ) : (
                  <div>
                    <p className="font-14 text-grey pb-1">Name or Company</p>
                    <p className="pb-3 font-14">{name}</p>
                    <p className="font-14 text-grey pb-1">Adress</p>
                    <p className="pb-3 font-14">{address}</p>
                    <p className="font-14 text-grey pb-1">
                      Postal code, city, country
                    </p>
                    <p className="pb-3 font-14">
                      {postalcode}, {city}, {country}
                    </p>
                    <button
                      onClick={() => seteditbilldetail(!editbilldetail)}
                      className="btn-style bg-grey font-16 mt-4 font-weight-400 px-3"
                    >
                      Edit billing detail
                    </button>
                  </div>
                )}
              </div>
              <div className="payment-card mx-md-0 m-4">
                <p className="mb-3 font-16 font-weight-500">
                  2. Payment method
                </p>

                {editpaydetail ? (
                  <form onSubmit={setPaymentCheck}>
                    <div className="d-flex flex-column mb-3">
                      <label
                        className="font-14 text-grey pb-1"
                        htmlFor="nameoncard"
                      >
                        Name on card*
                      </label>
                      <input
                        type="text"
                        className="c-card-input"
                        required
                        id="nameoncard"
                        value={nameoncard}
                        onChange={(e) => setnameoncard(e.target.value)}
                      />
                    </div>

                    <div className="d-flex flex-column mb-3">
                      <label
                        className="font-14 text-grey pb-1"
                        htmlFor="nameoncard"
                      >
                        Card number
                      </label>
                      <CreditCardInput
                        cardNumberInputProps={{
                          value: cardNumber,
                          onChange: handleCardNumberChange,
                        }}
                        cardExpiryInputProps={{
                          value: expiry,
                          onChange: handleCardExpiryChange,
                        }}
                        cardCVCInputProps={{
                          value: cvc,
                          onChange: handleCardCVCChange,
                        }}
                        fieldClassName="c-card-input"
                      />
                    </div>

                    <div className="mt-4">
                      <button
                        type="submit"
                        className="btn bg-dark text-light mr-3"
                      >
                        Save
                      </button>
                      <button className="btn bg-grey ">Cancel</button>
                    </div>
                  </form>
                ) : (
                  <div>
                    <p className="font-14 text-grey pb-1">Credit card</p>
                    <p className="font-14 ">Visa ending in {lastFourDigits}</p>
                    <button
                      onClick={() => seteditpaydetail(!editpaydetail)}
                      className="btn-style bg-grey font-16 mt-4 font-weight-400 px-3"
                    >
                      Edit payment detail
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-md-3 p-0 col-12">
              <div className="new-plan-card-payment d-md-block d-none">
                <div className="pt-3 pb-2 pl-4 border-bottom d-md-block d-none">
                  <p className="font-weight-600">Your new plan</p>
                </div>
                <div
                  className="tab-pane fade show active "
                  id={`v-pills-1`}
                  role="tabpanel"
                  aria-labelledby={`v-pills-1-tab`}
                >
                  <div className="px-4 py-3 d-md-block d-none">
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

                  <div className="px-4 pb-3 d-md-block d-none">
                    <div className="d-flex align-items-center justify-content-between font-weight-600">
                      <p>Total</p>
                      <p className=""> {monthly ? "99 USD" : "83 USD"}</p>
                    </div>
                    <p className="pb-3 border-bottom">(excl. tax)</p>
                  </div>
                  <div className="p-0 px-md-4 pb-md-3">
                    <ul className="font-12 text-grey p-0 pl-3 d-md-block d-none">
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
                      <button
                        disabled={!editpaydetail ? false : true}
                        type="button"
                        className={`btn-style py-2 font-16 ${
                          !editpaydetail
                            ? "bg-dark text-light"
                            : "bg-grey text-grey"
                        } font-weight-400  w-100 `}
                      >
                        Pay and Upgrade
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade "
                  id={`v-pills-2`}
                  role="tabpanel"
                  aria-labelledby={`v-pills-2-tab`}
                >
                  <div className="px-4 py-3 d-md-block d-none">
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

                  <div className="px-4 pb-3 d-md-block d-none">
                    <div className="d-flex align-items-center justify-content-between font-weight-600">
                      <p>Total</p>
                      <p className=""> {monthly ? "59 USD" : "55 USD"}</p>
                    </div>
                    <p className="pb-3 border-bottom">(excl. tax)</p>
                  </div>
                  <div className="p-0 px-xl-4 pb-xl-3">
                    <ul className="font-12 text-grey p-0 pl-3 d-md-block d-none">
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
                      <button
                        type="button"
                        className="btn-style py-2 font-16 bg-dark text-light w-100"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade "
                  id={`v-pills-3`}
                  role="tabpanel"
                  aria-labelledby={`v-pills-3-tab`}
                >
                  <div className="px-4 py-3 d-md-block d-none">
                    <div className="d-flex pb-1 align-items-center justify-content-between">
                      <p>Plus (monthly)</p>
                      <p className="font-weight-600">
                        {monthly ? "29 USD" : "25 USD"}
                      </p>
                    </div>
                    <div>
                      <p className="pb-1">100 responses/mo</p>
                      <p className="pb-3 border-bottom">1 users</p>
                    </div>
                  </div>

                  <div className="px-4 pb-3 d-md-block d-none">
                    <div className="d-flex align-items-center justify-content-between font-weight-600">
                      <p>Total</p>
                      <p className=""> {monthly ? "29 USD" : "25 USD"}</p>
                    </div>
                    <p className="pb-3 border-bottom">(excl. tax)</p>
                  </div>
                  <div className="p-0 px-xl-4 pb-xl-3">
                    <ul className="font-12 text-grey p-0 pl-3 d-md-block d-none">
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
                      <button
                        type="button"
                        className="btn-style py-2 font-16 bg-dark text-light w-100"
                      >
                        Continue
                      </button>
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
                    <div className="py-3 d-md-block d-none">
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
              <div className="pb-3 coupen-code px-md-0 px-4 border-bottom">
                <div className="d-flex align-items-center justify-content-between pt-4 pb-3 w-100">
                  <label className="d-flex align-items-center cr-p w-100 justify-content-between">
                    Coupon code
                    <input
                      type="checkbox"
                      className="custom-toggle-input2 ml-2"
                      onChange={() => setmonthly(!monthly)}
                    />
                  </label>
                </div>
                {monthly ? (
                  <div className="d-flex align-items-center justify-content-between">
                    <input
                      type="text"
                      placeholder=""
                      className="py-1 w-100"
                      value={coupen}
                      onChange={(e) => setcoupen(e.target.value)}
                    />
                    {coupen ? (
                      <button className="btn-style ml-2">Apply</button>
                    ) : (
                      <button disabled className="btn-style ml-2">
                        Apply
                      </button>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
