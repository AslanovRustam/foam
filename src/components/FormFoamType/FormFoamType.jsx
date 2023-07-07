import s from "./formFoamType.module.css";
import standart from "../../images/standart/blue2.png";
import bonded from "../../images/standart/bonded.png";
import { standartFoams, bondedFoams } from "../../data/standartFoams";

export default function FormFoamType({ foamType, setFormData, formData }) {
  const renderFoamTypeList =
    foamType === "standart" ? standartFoams : bondedFoams;
  return (
    <div className={s.foamType}>
      <p className={s.foamTitle}>Select your foam type</p>
      <div className={s.btnContainer}>
        <div className={s.selection}>
          <button
            className={`${s.btn} ${foamType === "standart" ? s.active : ""}`}
            type="button"
            onClick={() => setFormData({ ...formData, foamType: "standart" })}
          >
            <img className={s.foamSelection} src={standart} alt="foam type" />
          </button>
          <p className={s.title}>standart</p>
        </div>
        <div className={s.selection}>
          <button
            className={`${s.btn} ${foamType === "bonded" ? s.active : ""}`}
            type="button"
            onClick={() => setFormData({ ...formData, foamType: "bonded" })}
          >
            <img className={s.foamSelection} src={bonded} alt="foam type" />
          </button>
          <p className={s.title}>Bonded</p>
        </div>
      </div>
      <p className={s.subTitle}>
        Choose between a standard foam make up or bonded (multi foam)
      </p>
      <p className={s.foamTitle}>{foamType} Foams</p>
      <ul className={s.list}>
        {renderFoamTypeList.map(({ id, image, color, code }) => (
          <li
            className={`${s.item} ${
              formData.foamCode === code ? s.active : ""
            }`}
            key={id}
            onClick={() => setFormData({ ...formData, foamCode: code })}
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
