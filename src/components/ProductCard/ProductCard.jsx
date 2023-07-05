import { NavLink } from "react-router-dom";
import { ReactComponent as ArrowDown } from "../../images/arrowDown.svg";
import { ReactComponent as Star } from "../../images/star.svg";
import s from "./productCard.module.css";
import SalesForm from "../SalesForm/SalesForm";
import { useState } from "react";

const sizes = ["CM", "INCH", "MM"];

export default function ProductCard({ name, item }) {
  const [size, setSize] = useState(sizes[0]);

  const sizeChoice = (e) => {
    setSize(e.target.getAttribute("name"));
  };

  return (
    <div className={s.container}>
      <p className={s.links}>
        <NavLink to="/" className={s.navLink}>
          Home
        </NavLink>{" "}
        <ArrowDown className={s.arrowLeft} />{" "}
        <NavLink to="/products" className={s.navLink}>
          Shop
        </NavLink>
        <ArrowDown className={s.arrowLeft} />
        <NavLink
          to={`/products/${name}`}
          className={({ isActive }) => (isActive ? s.active : s.navLink)}
        >
          {name}
        </NavLink>
        <ArrowDown className={s.arrowLeft} />
      </p>
      <h2 className={s.title}>{item.name}</h2>
      <div className={s.cardContainer}>
        <img className={s.image} src={item.image} alt="foam image" />
        <div className={s.descriptionContainer}>
          <div className={s.starContainer}>
            <Star className={s.star} />
            <Star className={s.star} />
            <Star className={s.star} />
            <Star className={s.star} />
            <Star className={s.star} />
            <span className={s.reviews}>5 reviews</span>
          </div>
          <div className={s.description}>
            <p className={s.subTitle}>Measure your cushions</p>
            <ul className={s.sizeListContainer}>
              <li
                className={`${size === "CM" ? s.sizeItems : s.inActiveSize}`}
                name={sizes[0]}
                onClick={sizeChoice}
              >
                {sizes[0]}
              </li>
              <li
                className={`${size === "INCH" ? s.sizeItems : s.inActiveSize}`}
                name={sizes[1]}
                onClick={sizeChoice}
              >
                {sizes[1]}
              </li>
              <li
                className={`${size === "MM" ? s.sizeItems : s.inActiveSize}`}
                name={sizes[2]}
                onClick={sizeChoice}
              >
                {sizes[2]}
              </li>
            </ul>
            <SalesForm item={item} />
          </div>
        </div>
      </div>
    </div>
  );
}
