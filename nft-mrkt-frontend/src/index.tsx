import './index.scss';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SplashPage from './components/SplashPage/SplashPage';
// import Manufacturer from './components/Manufacturer/Manufacturer';
import Consumer from './components/Consumer/Consumer';
// import Browse from './components/Browse/Browse';


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
              {/* <Route path="manufacturer" element={<Manufacturer />} /> */}
              <Route path="consumer" element={<Consumer />} />
              {/* <Route path="browse" element={<Browse />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
  </React.StrictMode>
);
