import s from "./variants.module.css";
import { ReactComponent as Star } from "../../images/star.svg";
import Container from "../Container/Container";

export default function Variants() {
  return (
    <div className={s.variants}>
      <Container>
        <ul className={s.list}>
          <li className={s.item}>Foam Cut to Size</li>
          <li className={s.item}>Foam Sheet Offer</li>
          <li className={s.item}>Bolster Cushions</li>
          <li className={s.item}>Sample Service</li>
        </ul>
        <ul className={s.list}>
          <li className={s.item}>Mattresses / Toppers </li>
        </ul>
        <ul className={s.list}>
          <li className={s.item}>Acoustic Foam</li>
        </ul>
        <ul className={s.list}>
          <li className={s.item}>Packing foam</li>
        </ul>
        <ul className={s.list}>
          <li className={s.item}>Ethafoam semi-regid</li>
          <li className={s.item}>Closed cell/ Plastazote</li>
          <li className={s.item}>Pyrosorb-5 class</li>
          <li className={s.item}>Aquatic Filter Foam</li>
          <li className={s.item}>Other Foam Products</li>
        </ul>
        <div className={s.service}>
          <p className={s.itemStar}>Cushion Refill Service</p>
          <div className={s.raiting}>
            <ul className={s.starList}>
              <li className={s.star}>
                <Star className={s.icon} />
              </li>
              <li className={s.star}>
                <Star className={s.icon} />
              </li>
              <li className={s.star}>
                <Star className={s.icon} />
              </li>
              <li className={s.star}>
                <Star className={s.icon} />
              </li>
              <li className={s.star}>
                <Star className={s.icon} />
              </li>
            </ul>
            <p className={s.raitingTitle}>
              We have the best<br></br> quality foam
            </p>
            <p className={s.raitingInfo}>20992 Verified Reviews</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
