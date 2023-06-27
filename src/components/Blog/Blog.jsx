import Container from "../Container/Container";
import s from "./blog.module.css";
import blog1 from "../../images/products3.png";
import blog2 from "../../images/products1.png";
import blog3 from "../../images/products4.png";

const items = [
  {
    id: 1,
    image: blog1,
    date: "03 May 2023",
    name: "HOW TO CHOOSE THE BEST FURNITURE FOAM FOR YOUR DIY UPHOLSTERY PROJECT",
    description:
      "Selecting the right furniture foam for your DIY upholstery project can make a significant difference in the final outcome. The right foam can provide comfort, support, and durability, while the wrong choice may lead to a less-than-satisfactory result. In this guide, we will explore the factors you need to consider when choosing furniture foam for your DIY project and help you make an informed decision.",
  },
  {
    id: 2,
    image: blog2,
    date: "03 May 2023",
    name: "THE IMPORTANCE OF FOAM QUALITY FOR UPHOLSTERY AND BEDDING",
    description:
      "The quality of foam used in upholstery and bedding is crucial for ensuring comfort, durability, and overall satisfaction. High-quality foam can improve the longevity of your furniture, provide better support, and contribute to a healthier living environment. In this blog, we will discuss the importance of foam quality in upholstery and bedding applications and offer tips on selecting the best foam for your needs.",
  },
  {
    id: 3,
    image: blog3,
    date: "03 May 2023",
    name: "THE DIFFERENT TYPES OF UPHOLSTERY FOAM: WHICH ONE IS RIGHT FOR YOU?",
    description:
      "Selecting the right upholstery foam is essential for creating comfortable and durable furniture. With various foam types available, it can be challenging to determine which one is best suited for your needs. In this blog, we’ll explore the different types of upholstery foam and their ideal uses to help you make an informed decision.",
  },
];

export default function Blog() {
  return (
    <Container>
      <div className={s.container}>
        <h2 className={s.title}>OUR SHOP</h2>
        <span className={s.link}>To shop</span>
      </div>
      <ul className={s.list}>
        {items.map(({ id, image, name, description, date }) => (
          <li className={s.item} key={id}>
            <img className={s.image} src={image} alt={name} />
            <p className={s.date}>{date}</p>
            <p className={s.name}>{name}</p>
            <p className={s.description}>{description}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
