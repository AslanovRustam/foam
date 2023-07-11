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
  const [showErrors, setShowErrors] = useState({
    fullName: false,
    phone: false,
    message: false,
    email: false,
  });
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

    if (!hasError) {
      console.log("formValues", formValues);
      setFormValue({
        fullName: "",
        phone: "",
        message: "",
        email: "",
      });
    }
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
            {showErrors.fullName && (
              <span className={s.error}>This field is required</span>
            )}
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
              {showErrors.phone && (
                <span className={s.error}>This field is required</span>
              )}
            </label>
            <label className={s.label}>
              Email
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
            Message
            <input
              className={s.input}
              type="text"
              name="message"
              value={formValues.message}
              onChange={handleChange}
            />
            {showErrors.message && (
              <span className={s.error}>This field is required</span>
            )}
          </label>
          <button className={s.btn} type="submit">
            submit
          </button>
        </form>
      </div>
    </footer>
  );
}
