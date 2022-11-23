
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./components/Counter"


import './App.css';
import Header from "./components/Header";

function App() {
  
  return (
    <div className="App">

      <Header />
      <Counter setStop={setStop} questionNumber={questionNumber} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />}/>
        </Routes>
      </BrowserRouter>
      
      

     <h1>My Quiz</h1>


    </div>
  );
}

export default App;
