import { NavLink } from "react-router-dom";
import s from "./productList.module.css";
import { ReactComponent as ArrowDown } from "../../images/arrowDown.svg";
import SearchForm from "../SearchForm/SearchForm";

export default function ProductList({
  items,
  setSelectedPriceOption,
  options,
}) {
  return (
    <div className={s.container}>
      <p className={s.links}>
        <NavLink to="/" className={s.navLink}>
          Home
        </NavLink>{" "}
        <ArrowDown className={s.arrowLeft} />{" "}
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? s.active : s.navLink)}
        >
          Shop
        </NavLink>
        <ArrowDown className={s.arrowLeft} />
      </p>
      <SearchForm
        options={options}
        setSelectedPriceOption={setSelectedPriceOption}
      />
      <ul className={s.list}>
        {items.map(({ image, id, name }) => (
          <li className={s.item} key={id}>
            <div className={s.imgWrapper}>
              <img className={s.image} src={image} alt={name} />
            </div>
            <p className={s.name}>{name}</p>
            <p className={s.select}>
              <span className={s.selectText}>Select options</span>
              <ArrowDown className={s.arrowDown} />
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
