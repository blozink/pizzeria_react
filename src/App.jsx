import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navegacion from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import CartProvider from "./context/CartContext";
import UserProvider from "./context/UserContext";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <UserProvider>
      <CartProvider>
        <div className="d-flex flex-column min-vh-100">
          <Navegacion />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path="/404" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </UserProvider>
  );
};

export default App;
