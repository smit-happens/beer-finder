import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes } from './Routes';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";


class App extends React.Component { 
  public render(): JSX.Element {
    return (
      <div className="bg">
        <Router>
          <Route {...Routes.home}/>
          <Route {...Routes.brewery}/>
        </Router>
      </div>
    );
  }
}

export default App;
