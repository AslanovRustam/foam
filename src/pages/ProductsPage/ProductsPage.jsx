import { useEffect, useState } from "react";
import s from "./productPage.module.css";
import Variants from "../../components/Variants/Variants";
import ProductList from "../../components/ProductList/ProductList";

const options = ["Standart", "Low to High", "High to Low"];

export default function ProductsPage({ items }) {
  const [filter, setFilter] = useState("");
  const [sortedItems, setSortedItems] = useState(items);
  const [selectedPriceOption, setSelectedPriceOption] = useState(options[0]);
  const [selectedPopularityOption, setSelectedPopularityOption] = useState(
    options[0]
  );

  useEffect(() => {
    if (selectedPriceOption === options[1]) {
      const sorted = [...sortedItems].sort((a, b) => a.price - b.price);
      setSortedItems(sorted);
      return;
    } else if (selectedPopularityOption === options[1]) {
      const sorted = [...sortedItems].sort(
        (a, b) => a.popularity - b.popularity
      );
      setSortedItems(sorted);
      return;
    } else if (selectedPriceOption === options[2]) {
      const sorted = [...sortedItems].sort((a, b) => b.price - a.price);
      setSortedItems(sorted);
      return;
    } else if (selectedPopularityOption === options[2]) {
      const sorted = [...sortedItems].sort(
        (a, b) => b.popularity - a.popularity
      );
      setSortedItems(sorted);
      return;
    } else setSortedItems(items);
  }, [selectedPriceOption, selectedPopularityOption]);

  useEffect(() => {
    if (filter !== "") {
      const sorted = sortedItems.filter((item) =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      );
      setSortedItems(sorted);
      return;
    }
    setSortedItems(items);
  }, [filter]);

  return (
    <div className={s.container}>
      <Variants />
      <ProductList
        items={sortedItems}
        options={options}
        selectedPriceOption={selectedPriceOption}
        setSelectedPriceOption={setSelectedPriceOption}
        selectedPopularityOption={selectedPopularityOption}
        setSelectedPopularityOption={setSelectedPopularityOption}
        setFilter={setFilter}
        filter={filter}
      />
    </div>
  );
}
