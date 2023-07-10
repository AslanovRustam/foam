import s from "./reviews.module.css";
import reviewsData from "../../data/reviews.json";
import { ReactComponent as Star } from "../../images/star.svg";
import { useEffect, useState } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState(
    localStorage.getItem("reviews") ?? reviewsData
  );
  console.log(reviews);
  const [formValues, setFormValue] = useState({
    name: "",
    email: "",
    review: "",
    rate: 0,
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
    setReviews([...reviews, { ...formValues, id: 23113 }]);

    setFormValue({
      name: "",
      email: "",
      review: "",
      rate: 0,
    });
  };
  return (
    <div className={s.container}>
      <p className={s.title}>Latest Foam Cut To Size & Product Reviews</p>
      {reviews.map(({ id, name, rate, review }) => (
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
        <div className={s.starContainerAdd}>
          <Star className={s.starEmpty} />
          <Star className={s.starEmpty} />
          <Star className={s.starEmpty} />
          <Star className={s.starEmpty} />
          <Star className={s.starEmpty} />
        </div>
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
          </label>
          <button className={s.btn} type="submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
