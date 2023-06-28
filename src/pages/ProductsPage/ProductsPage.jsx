import s from "./productPage.module.css";
import Variants from "../../components/Variants/Variants";
import ProductList from "../../components/ProductList/ProductList";

export default function ProductsPage() {
  return (
    <div className={s.container}>
      <Variants />
      <ProductList />
    </div>
  );
}
