import { useState, useEffect } from "react";
import s from "./scrollToTop.module.css";
import arrow from "../../images/arrow.png";

export default function ScrollToTopBtn() {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    const handleScrollBtn = () => {
      const height = window.innerHeight;
      const scrollPosition = window.scrollY;
      //   console.log("scrollPosition", scrollPosition);
      //   console.log("height", height);
      //   console.log("toshow", toshow);
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
    <>
      {/* {showBtn && ( */}
      <div
        className={`${showBtn ? s.btnShow : s.scrollToTop}`}
        onClick={handleScrollToTop}
      >
        <img src={arrow} alt="arrow up" />
      </div>
      {/* )} */}
    </>
  );
}
