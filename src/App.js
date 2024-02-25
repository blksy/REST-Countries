import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Countries from "./components/Countries";
import CountryInfo from "./components/CountryInfo";

function App() {
  return (
    <>
      <div className="header">
        <div className="container">
          <h5>Where in the world?</h5>
          <p>{/* <button>Change Mode</button> */}</p>
        </div>
      </div>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Countries />} />
            <Route path="/country/:countryName" element={<CountryInfo />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
