
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Counter from "./components/Counter"
=======
<<<<<<< HEAD

=======
>>>>>>> 3b9ebcf0920342d1d7eb51863700a7312244e92f
>>>>>>> main
import Start from './views/Start'
import Quiz from './views/Quiz'
import './App.css';
import Header from "./components/Header";

function App() {
  
  return (
    <div className="App">


      <Header />
      <Counter />

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Start />}/>
          <Route path="/quiz" element={<Quiz />}/>
        </Routes>
      </BrowserRouter>    

     <h1>My Quiz</h1>

    </div>
  );
}

export default App;
