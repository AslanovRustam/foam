import s from "./footer.module.css";
import { useState } from "react";

export default function Footer() {
  const [formValues, setFormValue] = useState({
    fullName: "",
    phone: "",
    message: "",
    email: "",
  });
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormValue({ ...formValues, [name]: value });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("formValues", formValues);
  };
  return (
    <footer>
      <h2 className={s.title}>
        CONTACT <br></br> INFORMATION
      </h2>
      <section className={s.section}>
        <div className={s.information}>
          <p className={s.subtitle}>
            Rubber Products (Leeds) Limited, Ingram Road, Holbeck, Leeds LS11
            9RQ
          </p>
          <p className={s.credentionals}>0113 243 4358 - Fax: 0113 245 4945</p>
          <p className={s.credentionals}>Sales@rpll.co.uk</p>
          <p className={s.credentionals}>Mon – Thurs 7.30am – 4.30pm</p>
          <p className={s.credentionals}>Fri 7.30am – 3.30pm</p>
        </div>
        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.formLeft}>
            <label className={s.label}>
              full Name*
              <input
                className={s.input}
                type="text"
                name="fullName"
                value={formValues.fullName}
                onChange={handleChange}
              />
            </label>
            <label className={s.label}>
              Message *
              <textarea
                className={`${s.input} ${s.message}`}
                type="text"
                name="message"
                value={formValues.message}
                onChange={handleChange}
              ></textarea>
            </label>{" "}
          </div>
          <div className={s.formRight}>
            <label className={s.label}>
              Phone
              <input
                className={s.input}
                type="tel"
                name="phone"
                pattern="^(\+?[0-9.\(\)\-\s]*)$"
                title="Phone number must be digits"
                value={formValues.phone}
                onChange={handleChange}
              />
            </label>{" "}
            <label className={s.label}>
              Email *
              <input
                className={s.input}
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
            </label>
            <button className={s.btn} type="submit">
              submit
            </button>
          </div>
        </form>
      </section>
    </footer>
  );
}
