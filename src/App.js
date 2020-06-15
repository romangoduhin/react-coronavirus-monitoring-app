import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";

import MainPage from "./components/MainPage/MainPage";
import {Route} from "react-router-dom";


function App() {
  return (
    <div className="app-wrapper">
        <NavBar/>
        <div className="app-wrapper-content">
        <Route exact='' render={()=><MainPage/>} />
        </div>

    </div>
  );
};

export default App;
