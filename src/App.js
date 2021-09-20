import React from "react";
import SideNav from "./SideNav";


export default function App() {
  return (
    <div  >
      <SideNav/>
       
    </div>
  );
}




/*
import React, { Component } from "react";
import { HashRouter} from "react-router-dom";
import SideNav from "./SideNav";
import './App.css';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
           <div className="header">header </div>
           <h1>Simple SPA</h1>
              <SideNav/>
                 <Switch>
        <Route exact from="/" render={props => <About {...props} />} />
        <Route exact path="/experience" render={props => <Experience {...props} />} />
        <Route exact path="/project" render={props => <Project {...props} />} />
      </Switch>
          
        </div>
      </HashRouter>
    );
  }
}

export default Main;
*/