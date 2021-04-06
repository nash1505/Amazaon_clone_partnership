import "./App.css";
import "./Upper.css";
import "./Lower.css";
import Upper from "./components/Upper";
import Lower from "./components/Lower";
import "fomantic-ui-css/semantic.css";
import "./assets/fomantic/dist/semantic.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React, { useEffect } from "react";
import Login from "./components/Loginpage";
import { auth } from "./fire";


function App() {
 
  

  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          
          {/*login Link for the nav bar*/}
          <Login />
        </Route>
      </Switch>

      <Switch>
        <Route path="/" exact>
          <Upper />

          <div>
            <Lower />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
