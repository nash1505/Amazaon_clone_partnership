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
import { useStateValue } from "./StateProvider";

function App() {
  const [{},dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

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
