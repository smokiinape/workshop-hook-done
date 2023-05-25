import React from 'react';
import Step1 from './step1.jsx';
import Step2 from './step2.jsx';
import Step3 from './step3.jsx';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { MyContextProvider } from './MyContext.jsx'; // Import MyContextProvider

function App() {
  const [stepInfo, setStepInfo] = useState({}); // Add state for step1Info
  return (
    <BrowserRouter>
      <MyContextProvider value={{stepInfo, setStepInfo}}> 
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/step1">Steg 1</Link>
              </li>
              <li>
                <Link to="/step2">Steg 2</Link>
              </li>
              <li>
                <Link to="/step3">Steg 3</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/step1" element={<Step1 />} />
            <Route path="/step2" element={<Step2 />} />
            <Route path="/step3" element={<Step3 />} />
          </Routes>
        </div>
      </MyContextProvider> 
    </BrowserRouter>
  );
}

export default App;
