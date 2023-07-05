import { useState } from "react";
import s from "./salesForm.module.css";

export default function SalesForm({ item }) {
  const [sizes, setSizes] = useState({
    width: "",
    length: "",
    depth: "",
    d: "",
    e: "",
    f: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSizes({ ...sizes, [name]: value });
  };
  console.log(sizes);
  return (
    <form className={s.form}>
      <label className={s.label}>
        <span className={s.name}>Side A (Width)</span>
        <input
          className={s.input}
          name="width"
          value={sizes.width}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        <span className={s.name}>Side B (Length)</span>
        <input
          className={s.input}
          name="length"
          value={sizes.length}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}
