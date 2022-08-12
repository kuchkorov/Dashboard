import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Order from "./pages/dashboard/Order";
import Comment from "./pages/dashboard/Comment";
import Analytics from "./pages/dashboard/Analytics";
import Product from "./pages/dashboard/Product";
import ProductList from "./pages/dashboard/ProductList";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/order' element={<Order />} />
          <Route path='/comment' element={<Comment />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/product' element={<Product />} />
          <Route path='/productlist' element={<ProductList />} />
        </Routes>
      </Sidebar>
    </>
  );
}

export default App;
