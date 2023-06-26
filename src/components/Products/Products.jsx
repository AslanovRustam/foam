import s from "./products.module.css";
import products1 from "../../images/products1.png";
import products2 from "../../images/products2.png";
import products3 from "../../images/products3.png";
import products4 from "../../images/products4.png";
import Container from "../Container/Container";
import { ReactComponent as YearsBg } from "../../images/yearsBg.svg";

export default function Products() {
  return (
    <section className={s.section}>
      <Container>
        {" "}
        <h2 className={s.title}>
          A SNAPSHOT OF<br></br> RPL'S PRODUCTS
        </h2>
        <ul className={s.list}>
          <li>
            <img className={s.image} src={products1} alt="products1" />
          </li>
          <li>
            <img className={s.image} src={products2} alt="products2" />
          </li>
          <li>
            <img className={s.image} src={products3} alt="products3" />
          </li>
          <li>
            <img className={s.image} src={products4} alt="products4" />
          </li>
        </ul>
      </Container>
      <div className={s.happy}>
        <h2 className={s.titleHappy}>
          YEARS OF HAPPY<br></br> CUSTOMERS AND COUNTING
        </h2>
        <YearsBg className={s.bg} />
      </div>
    </section>
  );
}
