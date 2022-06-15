import React, { useState } from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { ethers } from "ethers";
import { GeneralObject } from './components/interfaces';

function App() {

  const [state, setState] = useState<GeneralObject>({
    provider: ethers.providers.Web3Provider,
    polyAddr: 0,
  });

  return (
    <div className="App">
        <Navbar state={state} setState={setState}/>
        <Outlet context={[state, setState]}/>
        {/* <div>Temporary Title</div> */}
        <Footer />
    </div>
  );
}

export default App;
