import './App.css';
import Apartments from './components/Apartments'
// import Home from './pages/Home'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from '//components/pages/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/Apartments" element={<Apartments/>}exact />

      <Route exact path='/'>
        <Home />
      </Route>

      <Route path='/about'>
        <About />
      </Route>

      <Route path='/contact'>
        <Contact />
      </Route>

    </Routes>
    </div>
   
  </BrowserRouter>
  );
}

export default App;
