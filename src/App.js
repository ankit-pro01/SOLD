import React from 'react';
import './App.css';
import { Layout } from './Container/Layout/Layout';
import Login from './Components/login/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Container/home/Home';


class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Layout>
          <Router>
            <Switch>
              <Route  path = "/login" component = {Login} />
              <Route exact path = "/" component = {Home} />

            </Switch>
          </Router>
        </Layout>
      </div>
    );

  }
 
}

export default App;
