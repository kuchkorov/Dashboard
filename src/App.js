import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Order from "./pages/Order";
import Comment from "./pages/Comment";
import Analytics from "./pages/Analytics";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
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
