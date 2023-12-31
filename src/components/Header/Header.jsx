import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import ScrollToTopBtn from "../ScrollToTop/ScrollToTop";
import { ReactComponent as Phone } from "../../images/phone.svg";
import { ReactComponent as Email } from "../../images/email.svg";
import logo from "../../images/logo.png";
import s from "./header.module.css";

export default function Header() {
  return (
    <header>
      <Container>
        <div className={s.contacts}>
          <ul className={s.contactsList}>
            <li className={s.item}>
              <a className={s.link} href="tel:0113 243 4358">
                <Phone className={s.icon} />
                <span>0113 243 4358</span>
              </a>
            </li>
            <li className={s.item}>
              {" "}
              <a className={s.link} href="mailTo:sales@rpll.co.uk">
                <Email className={s.icon} />
                <span>sales@rpll.co.uk</span>
              </a>
            </li>
          </ul>
        </div>
        <div className={s.links}>
          <NavLink to="/">
            <img className={s.logo} src={logo} alt="logo" />
          </NavLink>

          <ul className={s.linksList}>
            <li className={s.linkItem}>
              <NavLink
                className={({ isActive }) => (isActive ? s.active : s.navLink)}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className={s.linkItem}>
              <NavLink
                className={({ isActive }) => (isActive ? s.active : s.navLink)}
                to="/products"
              >
                Product & services
              </NavLink>
            </li>
            <li className={s.linkItem}>
              <a href="#about">About RPL</a>
            </li>
            <li className={s.linkItem}>
              <a href="#contact">Contact US</a>
            </li>
          </ul>
        </div>
      </Container>
      <ScrollToTopBtn />
    </header>
  );
}

// const [shoukdRiderect, setShouldRiderect] = useState(false);
// useEffect(() => {
//   const checkURL = () => {
//     const currentPath = window.location.pathname.includes("products");

//     setShouldRiderect(currentPath);
//   };
//   checkURL();
//   const handleURLChange = () => {
//     checkURL();
//   };
//   window.addEventListener("popstate", handleURLChange);
//   return () => {
//     window.removeEventListener("popstate", handleURLChange);
//   };
// }, []);
