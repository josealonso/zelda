import React, { useState } from 'react';
import './App.scss';
import {Outlet, BrowserRouter as Router} from 'react-router-dom';
import { ethers } from "ethers";

import Navbar from './components/Navbar/Navbar';

function App() {

  const [state, setState] = useState({
    working: false,
    // provider: {},
    // signer: {},
    // w3User: false,
    // displayAddr: "",
    // ethAddr: 0,
    // MMConnected: false,
    // DbLoaded: false,
    // menuOpen: false,
    // fishblnc: 0,
    // redeemable: 0,
  });

  return (
    <div className="App">
        <Router>
            <Navbar />
        </Router>
      <Outlet context={[state, setState]}/>
        <div>Temporary Title</div>
    </div>
  );
}

export default App;
