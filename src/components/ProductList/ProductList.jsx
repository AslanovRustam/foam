import { NavLink } from "react-router-dom";
import SelectForm from "../SearchForm/SelectForm";
import SearchForm from "../SearchForm/SearchForm";
import List from "../List/List";
import { ReactComponent as ArrowDown } from "../../images/arrowDown.svg";
import s from "./productList.module.css";

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
      <List items={items} />
    </div>
  );
}
