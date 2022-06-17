import './index.scss';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SplashPage from './components/SplashPage/SplashPage';
import Manufacturer from './components/Manufacturer/DepContract/DepContract';
import Consumer from './components/Consumer/Consumer';
import Browse from './components/Browse/Browse';
import DepContract from './components/Manufacturer/DepContract/DepContract';
import ManuRouting from './components/Manufacturer/ManuRouting';
import MintToken from './components/Manufacturer/MintToken/MintToken';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
          <Routes>
              <Route path="/health" element={<div>Hey There!!! The App is Healthy</div>} />
              <Route path="/" element={<App />} >
              <Route index element={<SplashPage />} />
              <Route path="ManuRouting" element={<ManuRouting />} />
                <Route path="DepContract" element={<DepContract />} />
                <Route path="MintToken" element={<MintToken />} />
              <Route path="consumer" element={<Consumer />} />
              <Route path="browse" element={<Browse />} />
            </Route>
          </Routes>
        </BrowserRouter>
  </React.StrictMode>
);
