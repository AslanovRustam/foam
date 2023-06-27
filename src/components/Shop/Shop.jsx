import Container from "../Container/Container";
import s from "./shop.module.css";
import product1 from "../../images/products2.png";
import product2 from "../../images/products4.png";
import product3 from "../../images/products1.png";
import product4 from "../../images/products3.png";
import { Link } from "react-router-dom";
const items = [
  {
    id: 1,
    image: product1,
    name: "Average- Soft Foam",
    description: "76x100cmHospital Mattress Single Manufactures ",
    price: "From £12.00",
    link: "",
  },
  {
    id: 2,
    image: product2,
    name: "Cot Safe High Quality Foam",
    description: "Hospital Mattress Single Manufactures  ",
    price: "From £450.00",
    link: "",
  },
  {
    id: 3,
    image: product3,
    name: "Medium- Soft Foam",
    description: "Hospital Mattress Single Manufactures",
    price: "From £140.00",
    link: "",
  },
  {
    id: 4,
    image: product4,
    name: "High-Firm Foam Best",
    description: "Luxury Reflex Pink Foam (+£0.00)",
    price: "From £8.00",
    link: "",
  },
];

export default function Shop() {
  return (
    <Container>
      <div className={s.container}>
        <h2 className={s.title}>OUR SHOP</h2>
        <span className={s.link}>
          <Link to="/products">To shop</Link>
        </span>
      </div>
      <ul className={s.list}>
        {items.map(({ id, image, name, description, price }) => (
          <li className={s.item} key={id}>
            <img className={s.image} src={image} alt={name} />
            <p className={s.name}>
              {name} <br></br>Sheet
            </p>
            <p className={s.description}>{description}</p>
            <p className={s.price}>{price}</p>
            <Link to="/products">
              <button className={s.btn} type="button">
                <span className={s.btnText}>Buy now</span>
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
