import React, { useState } from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

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
        <Navbar />
        <Outlet context={[state, setState]}/>
        {/* <div>Temporary Title</div> */}
        <Footer />
    </div>
  );
}

export default App;
