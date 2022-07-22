import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <Outlet />
        {/* <div>Temporary Title</div> */}
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
