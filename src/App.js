import React from 'react';

import './App.css';
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import Contacts from "./Contacts";
import Project from "./Project";
import Skills from "./Skills";
import Slogan from "./Slogan";


function App() {
  return (
    <div className="App">
      <div className="portfolio">
        <Header/>
        <Main/>
        <Skills/>
        <Project/>
        <Slogan/>
        <Contacts/>
        <Footer/>
      </div>

    </div>
  );
}

export default App;
