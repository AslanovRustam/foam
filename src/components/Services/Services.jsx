import Container from "../Container/Container";
import s from "./services.module.css";
import check from "../../images/check.png";

const items = [
  {
    id: 1,
    title: "MEDICAL FOAM",
    subTitle:
      "RPL work with a wide range of companies who supply the NHS/Private Institution’s through to Medical Retail Shops all using medical foam.",
  },
  {
    id: 2,
    title: "FOAM SHEETS",
    subTitle:
      "Foam sheets can be supplied by RPL to any required depth or shape. We run automated state-of-the-art machinery which can shape…",
  },
  {
    id: 3,
    title: "CUSTOM CUT FOAM",
    subTitle:
      "Perhaps you have inherited a splendid antique bed frame that is no longer considered to be of a standard size. Have you spent hours…",
  },
  {
    id: 4,
    title: "SOFT PLAY",
    subTitle:
      "If you manufacturer soft play furniture don’t hesitate to get in touch. We have just the foam filling for all of your designs! We supply soft…",
  },
  {
    id: 5,
    title: "UPHOLSTERY FOAM",
    subTitle:
      "Upholstery foam has been a large part of RPL since 1958, as we have been working in the furniture market for over 50 years.",
  },
  {
    id: 6,
    title: "CONTRACT FOAM",
    subTitle:
      "Contract Foam is the largest area of RPL’s business and is still an area of growth for us. Over the last 50 years our business has developed…",
  },
];

export default function Services() {
  return (
    <Container>
      <div className={s.services} id="about">
        <h2 className={s.title}>
          OUR MAIN<br></br> SERVICES
        </h2>
        <p className={s.subTitle}>
          See below for all the main services RPL offer. We’re forever improving
          and expanding our lines. Contact us with any queries
        </p>
      </div>
      <ul className={s.list}>
        {items.map((item) => (
          <li className={s.item} key={item.id}>
            <p className={s.titleList}>
              <img className={s.icon} src={check} alt="point" />
              {item.title}
            </p>
            <p className={s.subTitleList}>{item.subTitle}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
