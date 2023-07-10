import { createPortal } from "react-dom";
import { useEffect } from "react";
import s from "./modal.module.css";
import close from "../../images/close.png";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onClose, showModal, item, formData }) {
  useEffect(() => {
    document.body.classList.add(s.overvlow);
    return () => {
      document.body.classList.remove(s.overvlow);
    };
  }, []);

  const handleBackDropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className={`${s.modalBackDrop} ${showModal ? s.opacity : ""}`}
      onClick={handleBackDropClick}
    >
      <div className={`${s.container} ${showModal ? s.containerActive : ""}`}>
        <div className={s.formDataContainer}>
          {formData.width !== "" && <p>Side A (Width): {formData.width}</p>}
          {formData.length !== "" && <p>Side B (Length): {formData.length}</p>}
          {formData.depth !== "" && <p>Side C (Depth): {formData.depth}</p>}
          {formData.d !== "" && <p>Side D : {formData.d}</p>}
          {formData.e !== "" && <p>Side E: {formData.e}</p>}
          {formData.foamCode !== "" && <p>Foam Code: {formData.foamCode}</p>}
          {formData.foamType !== "" && <p>Foam Type: {formData.foamType}</p>}
          {formData.dacronWrap !== "" && (
            <p>Dacron Wrap: {formData.dacronWrap}</p>
          )}
          {formData.extras && <p>Extras: yes</p>}
        </div>
        <img className={s.image} src={item.image} alt="foam" />
        <div className={s.iconContainer} onClick={onClose}>
          <img className={s.icon} src={close} alt="close icon" />
        </div>
      </div>
    </div>,
    modalRoot
  );
}
