import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import StarRating from "../StarRaiting/StarRating";
import reviewsData from "../../data/reviews.json";
import { ReactComponent as Star } from "../../images/star.svg";
import s from "./reviews.module.css";

export default function Reviews() {
  const [reviews, setReviews] = useState(
    JSON.parse(localStorage.getItem("reviews")) ?? reviewsData
  );
  const [formValues, setFormValue] = useState({
    name: "",
    email: "",
    review: "",
    rate: 0,
  });
  const [showErrors, setShowErrors] = useState({
    name: false,
    email: false,
    review: false,
    rate: false,
  });
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormValue({ ...formValues, [name]: value });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newShowErrors = {};
    let hasError = false;

    Object.keys(formValues).forEach((inputKey) => {
      if (!formValues[inputKey]) {
        newShowErrors[inputKey] = true;
        hasError = true;
      } else {
        newShowErrors[inputKey] = false;
      }
    });

    setShowErrors(newShowErrors);
    console.log("hasError", hasError);
    console.log("newShowErrors", newShowErrors);

    if (!hasError) {
      setReviews([...reviews, { ...formValues, id: nanoid() }]);

      setFormValue({
        name: "",
        email: "",
        review: "",
        rate: 0,
      });
    }
  };

  return (
    <div className={s.container}>
      <p className={s.title}>Latest Foam Cut To Size & Product Reviews</p>
      {reviews?.map(({ id, name, rate, review }) => (
        <li className={s.item} key={id}>
          <div className={s.name}>
            <span>{name}</span>
            <div className={s.starContainer}>
              {Array.from({ length: rate }, (_, index) => (
                <Star key={index} className={s.star} />
              ))}
            </div>
          </div>
          <p className={s.review}>{review}</p>
        </li>
      ))}
      <div className={s.formContainer}>
        <p className={s.name}>Your review </p>
        <p className={s.review}>Your rating *</p>
        {/* //////////////////star rating component//////////////////////////// */}
        <StarRating
          starSelected={formValues.rate}
          totalStars={5}
          onRate={setFormValue}
          formValues={formValues}
          showErrors={showErrors}
        />
        {/* //////////////////star rating component//////////////////////////// */}
        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.inputContainer}>
            <label className={s.label}>
              Name*
              <input
                className={s.input}
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
              />
              {showErrors.name && (
                <span className={s.error}>This field is required</span>
              )}
            </label>
            <label className={s.label}>
              Email*
              <input
                className={s.input}
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              {showErrors.email && (
                <span className={s.error}>This field is required</span>
              )}
            </label>
          </div>
          <label className={s.label}>
            Message*
            <textarea
              className={`${s.input} ${s.message}`}
              type="text"
              name="review"
              rows={4}
              value={formValues.review}
              onChange={handleChange}
            ></textarea>
            {showErrors.review && (
              <span className={s.error}>This field is required</span>
            )}
          </label>
          <button className={s.btn} type="submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
