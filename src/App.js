import './App.css';
import Apartments from './components/Apartments'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/Apartments/:id" element={<Apartments/>}exact />

    </Routes>
    </div>
   
  </BrowserRouter>
  );
}

export default App;
