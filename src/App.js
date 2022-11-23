
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from './views/Start'
import Quiz from './views/Quiz'

import './App.css';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Start />}/>
          <Route path="/quiz" element={<Quiz />}/>
        </Routes>
      </BrowserRouter>
    


    </div>
  );
}

export default App;
