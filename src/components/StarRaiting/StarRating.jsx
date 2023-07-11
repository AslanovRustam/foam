import s from "./starRaiting.module.css";
import { ReactComponent as Star } from "../../images/star.svg";

export default function StarRating({
  starSelected,
  totalStars,
  onRate,
  formValues,
  showErrors,
}) {
  return (
    <div className={s.starContainerAdd}>
      {[...Array(totalStars)].map((n, i) => (
        <Star
          className={`${s.starEmpty} ${i < starSelected ? s.starFill : ""}`}
          key={i}
          onClick={() => onRate({ ...formValues, rate: i + 1 })}
        />
      ))}
      {showErrors.rate && <span className={s.error}>Please, rate us</span>}
    </div>
  );
}
