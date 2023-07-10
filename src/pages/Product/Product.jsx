import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import Variants from "../../components/Variants/Variants";
import s from "./product.module.css";

export default function Product({ items }) {
  const { name } = useParams();
  const item = items.find((item) => item.name === name);

  return (
    <div className={s.container}>
      <Variants />
      <ProductCard name={name} item={item} items={items} />
    </div>
  );
}
