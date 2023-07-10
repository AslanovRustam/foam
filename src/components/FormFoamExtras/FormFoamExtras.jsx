import { extras } from "../../data/standartFoams";
import s from "./formFoamExtras.module.css";
import extrasImg from "../../images/extras.png";

export default function FormFoamExtras({ formData, setFormData }) {
  return (
    <div>
      <p className={s.title}>Pick your extras</p>
      <p className={s.subTitle}>Extras are a great way to add to your foam</p>
      <div
        className={`${s.wrapper} ${formData.extras ? s.active : ""}`}
        onClick={() => setFormData({ ...formData, extras: !formData.extras })}
      >
        <img className={s.extras} src={extrasImg} alt="extra" />
        <p className={s.extrasCost}>
          add Stockinette <br></br>(+£3.00)
        </p>
      </div>
      <p className={s.description}>
        You should always fit stockinette to your order. In simple terms
        Stockinette makes it much easier to slide the foam in an out of your
        cover and will not only reduce creasing of fabric but prevent premature
        wear to both the foam and the cover - ensuring your cushions retain
        their shape better and last longer. Read More About Stockinette (Please
        Note Maximum Width for Stockinette = 135cm)
      </p>
      <p className={s.title}>Dacron Wrap</p>
      <ul className={s.list}>
        {extras.map(({ id, image, color, code }) => (
          <li
            className={`${s.item} ${
              formData.dacronWrap === code ? s.active : ""
            }`}
            key={id}
            onClick={() => setFormData({ ...formData, dacronWrap: code })}
          >
            <img className={s.image} src={image} alt={color} />
            <p className={s.code}>{code}</p>
            <p className={s.color}>{color}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
