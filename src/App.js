
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD

=======
>>>>>>> 3b9ebcf0920342d1d7eb51863700a7312244e92f
import Start from './views/Start'
import Quiz from './views/Quiz'
import './App.css';
import Header from "./components/Header";

function App() {
  
  return (
    <div className="App">

      <Header />

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
