import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import GeneralContext from "./context/GeneralContext";

const App = () => {
  return (
    <GeneralContext>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/personal-page" replace />} />
          <Route exact path="/personal-page" element={<Home />} />
          <Route exact path="/personal-page/about" element={<About />} />
        </Routes>
      </Router>
    </GeneralContext>
  );
};

export default App;
