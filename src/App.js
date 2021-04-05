import './App.css';
import './Upper.css';
import './Lower.css';
import Upper from './components/Upper';
import Lower from './components/Lower';
import 'fomantic-ui-css/semantic.css';
import './assets/fomantic/dist/semantic.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Sample from './components/Sample';
import React from 'react';
import Login from './components/Loginpage'

class App extends React.Component{
  
  render() {
    
    return (
      <Router>
        <Switch>
        
         </Switch>
        <div>
          
        
        
          <Upper/>
          </div>
         
          <div>
            <Switch>
            <Route path="/link" component={Login}>
         
            </Route>
              <Route path="/:category" component={Sample}>
                
              
              </Route>
              
            </Switch>
          </div>
          <div>
          <Lower />

          
          </div>
        
      </Router>
    );
  }

}

export default App;
