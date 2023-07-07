import s from "./formFoamSizes.module.css";

export default function FormFoamSizes({
  item,
  formData,
  sizes,
  sizeChoice,
  handleChange,
}) {
  return (
    <>
      <p className={s.subTitleMeasure}>Measure your cushions</p>
      <ul className={s.sizeListContainer}>
        <li
          className={`${formData.size === "CM" ? s.sizeItems : s.inActiveSize}`}
          name={sizes[0]}
          onClick={sizeChoice}
        >
          {sizes[0]}
        </li>
        <li
          className={`${
            formData.size === "INCH" ? s.sizeItems : s.inActiveSize
          }`}
          name={sizes[1]}
          onClick={sizeChoice}
        >
          {sizes[1]}
        </li>
        <li
          className={`${formData.size === "MM" ? s.sizeItems : s.inActiveSize}`}
          name={sizes[2]}
          onClick={sizeChoice}
        >
          {sizes[2]}
        </li>
      </ul>
      {item.sides?.width && (
        <label className={s.label}>
          <span className={s.name}>Side A (Width)</span>
          <input
            className={s.input}
            name="width"
            value={formData.width}
            onChange={handleChange}
            pattern="^(\+?[0-9.\(\)\-\s]*)$"
            title="value may contain only numbers"
            required
          />
        </label>
      )}
      {item.sides?.length && (
        <label className={s.label}>
          <span className={s.name}>Side B (Length)</span>
          <input
            className={s.input}
            name="length"
            value={formData.length}
            onChange={handleChange}
            required
          />
        </label>
      )}
      {item.sides?.depth && (
        <label className={s.label}>
          <span className={s.name}>Side C (Depth)</span>
          <input
            className={s.input}
            name="depth"
            value={formData.depth}
            onChange={handleChange}
            required
          />
        </label>
      )}
      {item.sides?.d && (
        <label className={s.label}>
          <span className={s.name}>Side D </span>
          <input
            className={s.input}
            name="d"
            value={formData.d}
            onChange={handleChange}
            required
          />
        </label>
      )}
      {item.sides?.e && (
        <label className={s.label}>
          <span className={s.name}>Side E</span>
          <input
            className={s.input}
            name="e"
            value={formData.e}
            onChange={handleChange}
            required
          />
        </label>
      )}
      {item.sides?.f && (
        <label className={s.label}>
          <span className={s.name}>Side F</span>
          <input
            className={s.input}
            name="f"
            value={formData.f}
            onChange={handleChange}
            required
          />
        </label>
      )}
    </>
  );
}
