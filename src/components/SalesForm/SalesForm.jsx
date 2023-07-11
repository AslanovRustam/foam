import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Modal from "../Modal/Modal";
import FormFoamSizes from "../FormFoamSizes/FormFoamSizes";
import FormFoamType from "../FormFoamType/FormFoamType";
import FormFoamExtras from "../FormFoamExtras/FormFoamExtras";
import s from "./salesForm.module.css";

const sizes = ["CM", "INCH", "MM"];

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
    size: sizes[0],
    foamType: "standart",
    foamCode: "",
    extras: "",
    dacronWrap: "",
  });
  const [showErrors, setShowErrors] = useState({});

  const { name } = useParams();

  useEffect(() => {
    const { sides } = item;
    const newErrorObject = { ...sides };
    for (const key of Object.keys(newErrorObject)) {
      newErrorObject[key] = false;
    }
    setShowErrors(newErrorObject);
  }, [name]);

  const sizeChoice = (e) => {
    setFormData({ ...formData, size: e.target.getAttribute("name") });
  };
  const togleModal = () => {
    setShowmodal(!showModal);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = () => {
    const newShowErrors = {};
    let hasError = false;

    Object.keys(showErrors).forEach((inputKey) => {
      if (formData[inputKey].trim() === "") {
        newShowErrors[inputKey] = true;
        hasError = true;
      } else {
        newShowErrors[inputKey] = false;
      }
    });

    setShowErrors(newShowErrors);

    if (!hasError) {
      if (step === 1 || step === 3) {
        togleModal();
      }

      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <FormFoamSizes
            item={item}
            formData={formData}
            sizes={sizes}
            sizeChoice={sizeChoice}
            handleChange={handleChange}
            showErrors={showErrors}
          />
        );
      case 2:
        return (
          <>
            <Modal
              onClose={togleModal}
              showModal={showModal}
              item={item}
              formData={formData}
            />
            <FormFoamType
              foamType={formData.foamType}
              formData={formData}
              setFormData={setFormData}
            />
          </>
        );
      case 3:
        return <FormFoamExtras formData={formData} setFormData={setFormData} />;
      case 4:
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
      {step < 4 ? (
        <div className={s.totalContainer}>
          <span className={s.total}>
            Total: &nbsp;<span className={s.cost}>£9.00</span>
          </span>
          <div className={s.btnContainer}>
            {step > 1 && (
              <button
                className={s.btnBack}
                type="button"
                onClick={handlePreviousStep}
              >
                Back
              </button>
            )}
            <button className={s.btn} type="button" onClick={handleNextStep}>
              {step === 3 ? "Add" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div className={s.thanksContainer}>
          <p className={s.thanks}>Thank You</p>
          <p className={s.guide}>Manager will connect you soon</p>
          <NavLink to="/products">
            <div className={s.btnGoToShop}>Go to shop</div>
          </NavLink>
        </div>
      )}
      <div className={s.informationContainer}>
        <p className={s.subTitleMeasure}>Information</p>
        <p className={s.infoContainer}>
          Our 6lb Recon Foam is a very firm grade, used for hard-wearing seats.
          It’s ideal for bar seating and stools, church kneelers, gym mats and
          other hard-wearing commercial furniture.
        </p>
      </div>
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
