import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import "./App.css";
import AdminLayout from "./layout/AdminLayout";
import UserLayout from "./layout/UserLayout";
import ProductDashboard from "./components/AdminLayout/AdminPage/ProductDashboard";
import InvoiceDashboard from "./components/AdminLayout/AdminPage/InvoiceDashboard";
import Manufacturer from "./components/AdminLayout/AdminPage/Manufacturer";
import Goodsnote from "./components/AdminLayout/AdminPage/Goodsnote";
import Employee from "./components/AdminLayout/AdminPage/Employee";
import Customer from "./components/AdminLayout/AdminPage/Customer";
import Category from "./components/AdminLayout/AdminPage/Category";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<ProductDashboard />} />
          <Route path="invoice" element={<InvoiceDashboard />} />
          <Route path="category" element={<Category />} />
          <Route path="customer" element={<Customer />} />
          <Route path="employee" element={<Employee />} />
          <Route path="goodsnote" element={<Goodsnote />} />
          <Route path="manufacturer" element={<Manufacturer />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
