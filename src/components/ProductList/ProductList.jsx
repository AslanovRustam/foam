import { NavLink } from "react-router-dom";
import s from "./productList.module.css";
import { ReactComponent as ArrowDown } from "../../images/arrowDown.svg";
import SelectForm from "../SearchForm/SelectForm";
import SearchForm from "../SearchForm/SearchForm";

export default function ProductList({
  items,
  selectedPriceOption,
  setSelectedPriceOption,
  options,
  setSelectedPopularityOption,
  selectedPopularityOption,
  setFilter,
  filter,
}) {
  return (
    <div className={s.container}>
      <div className={s.filterContainer}>
        <SelectForm
          title="Price"
          options={options}
          selectedPriceOption={selectedPriceOption}
          setSelectedPriceOption={setSelectedPriceOption}
        />
        <SelectForm
          title="Popularity"
          options={options}
          selectedPriceOption={selectedPopularityOption}
          setSelectedPriceOption={setSelectedPopularityOption}
        />
        <SearchForm title="Search" setFilter={setFilter} filter={filter} />
      </div>
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
    </div>
  );
}
