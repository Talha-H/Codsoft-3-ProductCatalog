import Image from "next/image";
import Cover from "./Components/Cover";
import ProductTypes from "./Components/productTypes";
import Collection from "./Components/Collection";
import Products from "./Components/Products";

export default function Home() {
  return (
    <div>
      <Cover />
      <ProductTypes />
      <Collection/>
      <Products/>
    </div>
  );
}
