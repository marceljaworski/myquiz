
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Fotter from "./componens/Footer"
import Header from "./componens/Header"
import DataJson from "./data.json"


import './App.css';

function App() {
  return (
    <div className="App">

      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />}/>
        </Routes>
      </BrowserRouter>


      
      <Fotter/>
      <DataJson/>
     <h1>My Quiz</h1>

    </div>
  );
}

export default App;
