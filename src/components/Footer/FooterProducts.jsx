import { useState } from "react";
import s from "./footerProducts.module.css";
import { ReactComponent as Telephone } from "../../images/tele.svg";
import { ReactComponent as Email } from "../../images/email.svg";
import { ReactComponent as Clock } from "../../images/clock.svg";

export default function FooterProducts() {
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
    <footer id="contact">
      <h2 className={s.title}>Contact Us</h2>
      <div className={s.container}>
        <div className={s.information}>
          <p className={s.subTitle}>CONTACT INFORMATION</p>
          <p className={s.info}>
            Rubber Products (Leeds) Limited, Ingram Road, Holbeck, Leeds LS11
            9RQ
          </p>
          <ul className={s.list}>
            <li className={s.item}>
              <Telephone className={s.icon} />
              <span className={s.contact}>
                <a href="tel:01132434358">0113 243 4358 - Fax: 0113 245 4945</a>
              </span>
            </li>
            <li className={s.item}>
              <Email className={s.icon} />
              <span className={s.contact}>
                <a href="mailTo:Sales@pll.co.uk">Sales@pll.co.uk</a>
              </span>
            </li>
            <li className={s.item}>
              <Clock className={s.icon} />
              <span className={s.contact}>Mon – Thurs 7.30am – 4.30pm</span>
            </li>
            <li className={s.item}>
              <Clock className={s.icon} />
              <span className={s.contact}>Fri 7.30am – 3.30pm</span>
            </li>
          </ul>
        </div>
        <form className={s.form} onSubmit={handleSubmit}>
          <label className={s.label}>
            full Name
            <input
              className={s.input}
              type="text"
              name="fullName"
              value={formValues.fullName}
              onChange={handleChange}
            />
          </label>
          <div className={s.formBlock}>
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
              Email
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
            Message
            <input
              className={s.input}
              type="text"
              name="message"
              value={formValues.message}
              onChange={handleChange}
            ></input>
          </label>
          <button className={s.btn} type="submit">
            submit
          </button>
        </form>
      </div>
    </footer>
  );
}
