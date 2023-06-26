import Container from "../Container/Container";
import s from "./supply.module.css";
import heroImg from "../../images/heroBg.png";

export default function Supply() {
  return (
    <section className={s.supply}>
      <Container>
        <p className={s.subTitle}>
          Rubber Products <span className={s.italic}>(Leeds)</span> Established
          1958
        </p>
        <h2 className={s.title}>
          WE SUPPLY, CUT AND <br></br> SHAPE FOAM FOR ALL<br></br> APPLICATIONS
        </h2>
        <button type="button" className={s.btn}>
          <span className={s.btnText}>CONTACT US</span>
        </button>
        <img className={s.bg} src={heroImg} alt="background" />
        <div className={s.facts}>
          <p className={s.titleFacts}>RPL QUICK FACTS</p>
        </div>
      </Container>
    </section>
  );
}
