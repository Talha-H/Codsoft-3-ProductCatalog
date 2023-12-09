import Image from "next/image";
import Cover from "./Components/Cover";
import ProductTypes from "./Components/productTypes";

export default function Home() {
  return (
    <div>
      <Cover />
      <ProductTypes />
    </div>
  );
}
