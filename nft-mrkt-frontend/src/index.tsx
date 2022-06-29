import './index.scss';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import SplashPage from './components/SplashPage/SplashPage';
import Maker from './components/Maker/Maker';
import Consumer from './components/Consumer/Consumer';
import About from './components/About/About';
import Browse from './components/SplashPage/Browse/Browse';
// import { QRCodeReader } from "./components/QRCodeReader/QRCodeReader";
// import QRCodeReader from "./components/QRCode/QRCodeReader/QRCodeReader";
// import QRReadResult from "./components/QRCode/QRReadResult/QRReadResult";
// import QRGenerator from "./components/QRCode/QRGenerator/QRGenerator";
// import UploadImageForm from "./components/UploadImageForm/UploadImageForm";
// import UploadJSONDataForm from "./components/UploadJSONDataForm/UploadJSONDataForm";
import ItemDetail from './components/ItemDetail/ItemDetail';


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
              <Route path="maker" element={<Maker />} />
              <Route path="consumer" element={<Browse />} />
              <Route path="/consumer/:userAddress" element={<Browse />} />
              <Route path="about" element={<About />} />
              <Route path="browse" element={<Browse />} />
              <Route path="itemDetail" element={<ItemDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
  </React.StrictMode>
);
