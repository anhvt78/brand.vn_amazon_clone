import axios from "axios";

export async function getProducts() {
  let products = await axios.get(
    "https://fakestoreapiserver.vercel.app/amazonproducts"
  );
//   console.log(products);
  return products;
}