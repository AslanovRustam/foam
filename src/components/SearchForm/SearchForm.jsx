import s from "./searchForm.module.css";
import { useState, useEffect } from "react";
import { ReactComponent as ArrowDown } from "../../images/arrowDown.svg";

export default function SearchForm({ options, setSelectedPriceOption }) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setShowOptions(!showOptions);
  };

  useEffect(() => {
    handleSubmit();
  }, [selectedOption]);

  const handleSubmit = () => {
    setSelectedPriceOption(selectedOption);
  };

  return (
    <div className={s.form}>
      <span className={s.name}>Price</span>
      <button
        type="button"
        className={s.option}
        value={selectedOption}
        onClick={handleOptionChange}
      >
        {options[0]}
        <ArrowDown className={s.arrowDown} />
      </button>
      <ul className={`${showOptions ? s.show : s.list}`}>
        {options.map((option) => (
          <li key={option} value={option}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
