import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import FullHeight from "react-full-height";

function App() {
  return (
    <div className="buRadioApp">
      <FullHeight className="section-styles">
        <Navbar></Navbar>
        <Home></Home>
      </FullHeight>
    </div>
  );
}

export default App;
