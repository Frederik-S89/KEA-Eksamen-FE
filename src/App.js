import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HubSpot from './HubSpot/HubSpot';
import Bekræftelse from './Bekræftelse/Bekræftelse';



function App() {
  return (
    <div className="HubSpot">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HubSpot/>} exact />
          <Route path="/Bekræftelse" element={<Bekræftelse />} />


        </Routes>
      </BrowserRouter>
    </div>
        


  );
}



export default App;