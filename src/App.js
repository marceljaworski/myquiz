import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Start from './views/Start'
import Quiz from './views/Quiz'
import './App.css';
import Header from "./components/Header";

function App() {

  const [name, setName] = useState("");

  console.log(name);
  
  return (
    <div className="App">
     
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Start setName={setName} name={name} />}/>
          <Route path="/quiz" element={<Quiz name={name} />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
