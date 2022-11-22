
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Fotter from "./componens/Footer"

import './App.css';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">

      <Header />


      <BrowserRouter>
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>


      
      <Fotter/>
      <Header/>
     <h1>My Quiz</h1>


    </div>
  );
}

export default App;
