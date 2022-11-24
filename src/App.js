import { BrowserRouter, Routes, Route } from "react-router-dom";


import Context from './context/Context';
import Start from './views/Start';
import Quiz from './views/Quiz';
import Info from './views/Info';
import './App.css';
import Header from "./components/Header";

function App() {

  return (
    <div className="App">
      <Context>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Start />}/>
            <Route path="/quiz" element={<Quiz />}/>
            <Route path="/info" element={<Info />}/>
          </Routes>
        </BrowserRouter>
      </Context>

    </div>
  );
}

export default App;
