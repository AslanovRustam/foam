import { useState, useEffect } from "react";
import s from "./scrollToTop.module.css";
import arrow from "../../images/arrow.png";
import { ReactComponent as Arrow } from "../../images/arrow.svg";

export default function ScrollToTopBtn() {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    const handleScrollBtn = () => {
      const height = window.innerHeight;
      const scrollPosition = window.scrollY;
      scrollPosition > height ? setShowBtn(true) : setShowBtn(false);
    };
    window.addEventListener("scroll", handleScrollBtn);
    return () => {
      window.removeEventListener("scroll", handleScrollBtn);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`${showBtn ? s.btnShow : s.scrollToTop}`}
      onClick={handleScrollToTop}
    >
      <Arrow className={s.arrow} />
    </div>
  );
}
