import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Menu from "../pages/Menu";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PaymentSuccess from "../pages/PaymentSuccess";
import { Header } from "../components/Header";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
