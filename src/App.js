import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppsIntegration from "./components/apps & integration";
import Checkout from "./components/checkout/checkout";

import MainTab from "./components/main";
import Payment from "./components/payment/payment";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainTab />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/payment" element={<Payment />} />
          <Route path="/app&integration" element={<AppsIntegration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
