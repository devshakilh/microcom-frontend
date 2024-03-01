import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import ToTop from "components/ToTop/ToTop";

function App() {
  return (
    <Router>
<ToTop/>

      <Routes />
    </Router>
  );
}

export default App;
