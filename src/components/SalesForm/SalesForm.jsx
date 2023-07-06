import { useState } from "react";
import s from "./salesForm.module.css";
import Modal from "../Modal/Modal";

export default function SalesForm({ item }) {
  const [step, setStep] = useState(1);
  const [showModal, setShowmodal] = useState(false);
  const [formData, setFormData] = useState({
    width: "",
    length: "",
    depth: "",
    d: "",
    e: "",
    f: "",
  });

  const togleModal = () => {
    setShowmodal(!showModal);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = () => {
    if (!formData.width && !formData.length) {
      return;
    }
    if (step === 1) {
      togleModal();
    }
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <>
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
                />
              </label>
            )}
          </>
        );
      case 2:
        return (
          <Modal
            onClose={togleModal}
            showModal={showModal}
            item={item}
            formData={formData}
          />
        );

      default:
        return null;
    }
  };
  return (
    <form className={s.form}>
      {renderForm()}
      <p className={s.totalContainer}>
        <span className={s.total}>
          Total: &nbsp;<span className={s.cost}>£9.00</span>
        </span>
        {step > 1 && (
          <button className={s.btn} type="button" onClick={handlePreviousStep}>
            Back
          </button>
        )}
        <button className={s.btn} type="button" onClick={handleNextStep}>
          Next
        </button>
      </p>
      <div className={s.information}>
        <p className={s.subTitle}>Free Postage - 3 day delivery</p>
        <p className={s.info}>
          Please note there is a minimum order of £25 on all made to measure
          Foam
        </p>
      </div>
      <div className={s.guide}>
        <p className={s.guideTitle}>Measuring guide: </p>
        <span className={s.guideDescr}>
          We call "width" the side view or left to right measurement. In a foam
          seat cushion this is the dimension behind your knees. "Length" is the
          front to back measurement.
        </span>
      </div>
    </form>
  );
}
