import './App.css';
import Navegacion from './components/Navbar';
//import Home from './components/Home';
import Footer from './components/Footer';
import Pizza from './components/Pizza';
// import Register from './components/Register';
// import Login from './components/Login';


const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navegacion />
      <div className="flex-grow-1">
        {/* <Register /> */}
        {/* <Login /> */}
        {/*<Home />*/}
        {/*<Cart />*/}
      <Pizza/>
      </div>
      <Footer />
    </div>
  );
};

export default App;
