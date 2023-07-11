import s from "./searchForm.module.css";
import { ReactComponent as Search } from "../../images/search.svg";

export default function SearchForm({ title, setFilter, filter }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={s.form}>
      <span className={s.name}>{title}</span>
      <form className={s.formSearch} onSubmit={handleSubmit}>
        <input
          placeholder="Product"
          className={s.btnSearch}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <button type="submit" className={s.iconContainer}>
          <Search className={s.search} />
        </button>
      </form>
    </div>
  );
}
