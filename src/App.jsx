import './App.css'
import Navegacion from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <>
      <Navegacion/>
      <Register/>
      <Login/>
      {/*<Home/>*/}
      <Footer/>
    </>
  )
}

export default App
