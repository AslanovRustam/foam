import s from "./header.module.css";
import { ReactComponent as Phone } from "../../images/phone.svg";
import { ReactComponent as Email } from "../../images/email.svg";
import logo from "../../images/logo.png";

export default function Header() {
  return (
    <header>
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
        <img className={s.logo} src={logo} alt="logo" />
        <ul className={s.linksList}>
          <li className={s.linkItem}>Home</li>
          <li className={s.linkItem}>Product & services</li>
          <li className={s.linkItem}>About RPL</li>
          <li className={s.linkItem}>Contact US</li>
        </ul>
      </div>
    </header>
  );
}
