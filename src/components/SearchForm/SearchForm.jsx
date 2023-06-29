import s from "./searchForm.module.css";
import { useState, useEffect } from "react";

export default function SearchForm({ options, setSelectedPriceOption }) {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    handleSubmit();
  }, [selectedOption]);

  const handleSubmit = () => {
    setSelectedPriceOption(selectedOption);
  };

  return (
    <form>
      <label>
        <span>Price</span>
        <select value={selectedOption} onChange={handleOptionChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
          {/* <option value="Standart">Standart</option>
          <option value="Low to High">Low to High</option>
          <option value="High to Low">High to Low</option> */}
        </select>
      </label>
    </form>
  );
}
