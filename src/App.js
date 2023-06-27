import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SharedLayaut from "./pages/SharedLayaut/SharedLayaut";
import Home from "./pages/Home/Home";
import ProductsPage from "./pages/ProductsPage/ProductsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayaut />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
