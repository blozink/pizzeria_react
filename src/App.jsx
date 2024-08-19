import './App.css'
import Navegacion from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Cart from './components/Cart';
//import Register from './components/Register';
//import Login from './components/Login';

function App() {
  return (
    <>
      <Navegacion/>
     {/*<Register/> */}
     {/*<Login/> */} 
      {/*<Home/>*/}
      <Cart/>
      <Footer/>
    </>
  )
}

export default App
