import s from "./searchForm.module.css";
import { useState, useEffect } from "react";
import { ReactComponent as ArrowDown } from "../../images/arrowDown.svg";

export default function SearchForm({ options, setSelectedPriceOption }) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = () => {
    setShowOptions(!showOptions);
  };

  useEffect(() => {
    setSelectedPriceOption(selectedOption);
  }, [selectedOption]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(!showOptions);
  };

  return (
    <div className={s.form}>
      <span className={s.name}>Price</span>
      <button
        type="button"
        className={s.btn}
        value={selectedOption}
        onClick={handleOptionChange}
      >
        {options[0]}
        <ArrowDown className={s.arrowDown} />
      </button>
      <ul className={`${showOptions ? s.show : s.list}`}>
        {options.map((option) => (
          <li
            className={s.option}
            key={option}
            value={option}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
