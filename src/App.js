import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// CSS
import './App.css';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

// Componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <h1>JESUS CRISTO É O SENHOR!!</h1> */}
      <BrowserRouter >
      <Navbar />
          <div className="container">
            <Routes>
              <Route path='/home' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
            </Routes>
          </div>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
