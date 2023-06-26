import Container from "../Container/Container";
import s from "./shop.module.css";
import product1 from "../../images/products2.png";
import product2 from "../../images/products4.png";
import product3 from "../../images/products1.png";
import product4 from "../../images/products3.png";
const items = [{}];

export default function Shop() {
  return (
    <Container>
      <div className={s.container}>
        <h2 className={s.title}>OUR SHOP</h2>
        <span className={s.link}>To shop</span>
      </div>
      <ul>
        <li className={s.item}>
          <img className={s.image} src={product1} alt="product1" />
          <p className={s.name}></p>
          <p className={s.description}></p>
          <p className={s.price}></p>
          <button className={s.btn} type="button"></button>
        </li>
      </ul>
    </Container>
  );
}
