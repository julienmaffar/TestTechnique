import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Banner } from "./components";
import { Details } from "./Details";
import { Home } from "./Home";

export const App = () => {
  return (
    <Router>
      <div>
        <Banner title='EuroStat' />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details/:id' element={<Details />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};
