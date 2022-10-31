import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Mapeia se autenticação ocorreu com sucesso, isso me permite controla a autenticação sem outros recursos,
// apenas com firebase
import { onAuthStateChanged } from 'firebase/auth';

//Hooks
import { useState , useEffect } from 'react'
import { useAuthentication } from './hooks/UserAuthentication';

// CSS
import './App.css';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard'

// Componentes

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';


function App() {

  // Monitorando status do usuário
  const [ user, setUser ] = useState(undefined);
  const  { auth } =  useAuthentication();

  // se for undefined, significar que está carregando o usuário;
  const loadingAutenticacao = user === undefined;

  // Todas as vezes que mudar valor de auth, essa função será chamada
  useEffect(() => {
    // Verificando a autenticação do usuário
    onAuthStateChanged(auth, (user) => {
    
      setUser(user); // mudando a const usuário, para sair do loader, mesmo que não venha um usuário;
    })
  }, [auth])

  // se estiver carregando, apresentar um loading para o usuário;
  if(loadingAutenticacao){
    return <p>Carregando...</p>
  }

  
  return (
    <div className="App">
      {/* <h1>JESUS CRISTO É O SENHOR!!</h1> */}
      <AuthProvider value={ { user } }> {/* atrvés do context, consigo ter acesso ao meu usuário em todos os lugares */}
        <BrowserRouter >
            <Navbar />
            <div className="container">
              <Routes>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/login' element={ !user ? <Login /> : <Navigate to="/home" /> }></Route> {/*  O ternário é para bloquear usuário não autorizados, não logados */}
                <Route path='/register' element={ !user ? <Register /> : <Navigate to="/home" />}></Route>
                <Route path='/posts/create' element={ user ? <CreatePost /> : <Navigate to="/login" />}></Route>
                <Route path='/dashboard' element={ user ? <Dashboard></Dashboard> : <Navigate to="/login" /> } ></Route>
              </Routes>
            </div>
            <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
