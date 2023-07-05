import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SharedLayaut from "./pages/SharedLayaut/SharedLayaut";
import Home from "./pages/Home/Home";
import { items } from "./data/data";
// import ProductsPage from "./pages/ProductsPage/ProductsPage";
// import Product from "./pages/Product/Product";

const ProductsPage = lazy(() => import("./pages/ProductsPage/ProductsPage"));
const Product = lazy(() => import("./pages/Product/Product"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayaut />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<ProductsPage items={items} />} />
        <Route path="/products/:name" element={<Product items={items} />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
