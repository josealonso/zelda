import React, { useState } from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { ethers } from "ethers";

function App() {

  // const [state, setState] = useState<GeneralObject>({
  //   provider: ethers.providers.Web3Provider,
  //   polyAddr: 0,
  // });

  return (
    <div className="App">
        <Navbar />
        <Outlet />
        {/* <div>Temporary Title</div> */}
        <Footer />
    </div>
  );
}

export default App;
