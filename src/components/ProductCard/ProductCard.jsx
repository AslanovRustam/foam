import { NavLink } from "react-router-dom";
import { ReactComponent as ArrowDown } from "../../images/arrowDown.svg";
import { ReactComponent as Star } from "../../images/star.svg";
import s from "./productCard.module.css";
import SalesForm from "../SalesForm/SalesForm";
import Descriptions from "../Descriptions/Descriptions";

export default function ProductCard({ name, item, items }) {
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
        <img className={s.image} src={item.image} alt="foam look" />
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
            <SalesForm item={item} />
          </div>
        </div>
      </div>
      <Descriptions items={items} />
    </div>
  );
}
