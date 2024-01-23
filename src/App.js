import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import { Amplify } from 'aws-amplify';
import {useDocTitle} from './components/CustomHook';

// TODO: need to change this to be more secure 
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("CNC Coolant Pumps - Web Applications for your Industrial Sales PRocesses");

  return (
    <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route render={() => <Navigate replace to="/" />} />
          </Routes>
    </>
  );
}


export default App;
