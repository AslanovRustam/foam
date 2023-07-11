import Container from "../Container/Container";
import s from "./customer.module.css";
import service from "../..//images/service.png";
import reputation from "../..//images/reputation.png";
import tech from "../..//images/tech.png";
import { NavLink } from "react-router-dom";

export default function Customer() {
  return (
    <section className={s.section}>
      <ul className={s.list}>
        <li className={s.item}>
          <p className={s.itemCount}>3</p>
          <p className={s.itemTitle}>
            FOAM BLOCK <br></br> SUPPLIERS
          </p>
        </li>
        <li className={s.item}>
          <p className={s.itemCount}>28K</p>
          <p className={s.itemTitle}>
            SQ FT<br></br> FACTORY
          </p>
        </li>
        <li className={s.item}>
          <p className={s.itemCount}>56</p>
          <p className={s.itemTitle}>
            YEARS<br></br> TRADING
          </p>
        </li>
      </ul>
      <div className={s.service}>
        <p className={s.titleService}>
          FOR EXCELLENT CUSTOMER SERVICE AND <br></br> EXPERIENCE
        </p>
        <NavLink to="/products">
          <button className={s.btn} type="button">
            Shop now
          </button>
        </NavLink>
      </div>
      <Container>
        <ul className={s.reputation}>
          <li className={s.reputationItem}>
            <p className={s.subTitle}>
              OUR<br></br> SERVICES
            </p>
            <p className={s.description}>
              Supplying foam to all industries we can help you with any
              requirements. Turn around is fast and with our own haulage fleet
              always on time.
            </p>
            <img className={s.image} src={service} alt="service" />
          </li>{" "}
          <li className={s.reputationItem}>
            <p className={s.subTitle}>
              OUR<br></br> REPUTATION
            </p>
            <p className={s.description}>
              In business for more than 50 years, we are one of the largest foam
              converters in the UK and pride ourselves with nothing but happy
              customers.
            </p>
            <img className={s.image} src={reputation} alt="service" />
          </li>{" "}
          <li className={s.reputationItem}>
            <p className={s.subTitle}>
              OUR<br></br> TECHNOLOGY
            </p>
            <p className={s.description}>
              We pioneer advances in medical and sleep foam – we are experts in
              the field. Call our specialists today for further information.
            </p>
            <img className={s.image} src={tech} alt="service" />
          </li>
        </ul>
      </Container>
    </section>
  );
}
