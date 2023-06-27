import Blog from "../../components/Blog/Blog";
import Customer from "../../components/Customer/Customer";
import Products from "../../components/Products/Products";
import Services from "../../components/Services/Services";
import Shop from "../../components/Shop/Shop";
import Supply from "../../components/Supply/Supply";

export default function Home() {
  return (
    <>
      <Supply />
      <Customer />
      <Products />
      <Services />
      <Shop />
      <Blog />
    </>
  );
}
