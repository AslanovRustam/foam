import List from "../List/List";
import Reviews from "../Reviews/Reviews";
import s from "./descriptions.module.css";

export default function Descriptions({ items }) {
  const relatedItems = items.slice(0, 4);
  return (
    <div className={s.container}>
      <p className={s.title}>Description</p>
      <p className={s.info}>
        Need sofa cushion foam cut to size? Simply select your preferred foam
        grade, enter your required dimensions and we’ll do the rest.
      </p>
      <p className={s.infoBold}>
        All furniture foams and fillings comply with the requirements of the
        furniture and furnishings fire safety regulations 1998
      </p>
      <p className={s.info}>
        If you are worried about incorrectly measuring your triangle-shaped
        cushion covers, we can arrange collection of your covers for an
        additional £15. Upon order, please measure your item to the longest
        point on width x length x depth.
      </p>
      <p className={s.titleCentered}>RELATED PRODUCTS</p>
      <List items={relatedItems} />
      <Reviews />
    </div>
  );
}
