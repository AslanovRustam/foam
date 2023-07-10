import { NavLink } from "react-router-dom";
import { ReactComponent as ArrowDown } from "../../images/arrowDown.svg";
import s from "./list.module.css";

export default function List({ items }) {
  return (
    <ul className={s.list}>
      {items.map(({ image, id, name }) => (
        <li className={s.item} key={id}>
          <div className={s.imgWrapper}>
            <img className={s.image} src={image} alt={name} />
          </div>
          <p className={s.name}>{name}</p>
          <NavLink to={`/products/${name}`}>
            <p className={s.select}>
              <span className={s.selectText}>Select options</span>
              <ArrowDown className={s.arrowDown} />
            </p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
