

import "./styles/styles.css";
import { SERVER_URL } from "@/constants/url";

export default async function ProductCategories(props: any) {

  let response = await fetch(`${SERVER_URL}/products`);
  let data = await response.json();
  let products = data.data.products;

  return (
    <div className="scrollmenu">
      <a href="#categories">Categories:</a>
      {
        products.map((product: any, i: number) =>
          <a key={i} href={`/category/?term=${product.product_category}`}>
            {product.product_category}
          </a>)
      }
    </div>
  )
}
