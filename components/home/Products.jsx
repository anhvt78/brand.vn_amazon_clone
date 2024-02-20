import React, { useEffect } from 'react'
import axios from 'axios';

const Products = () => {
    useEffect(() => {
      async function ProductsData() {
        let data = await axios.get("https://fakestoreapi.com/products");
        console.log(data.data);
      }

      ProductsData()

    })
  return (
    <div>Products</div>
  )
}

export default Products