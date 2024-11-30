import "./styles/styles.css";
import { SERVER_URL } from "@/constants/url";
import Fallback from "@/components/common/fallback";
import React from "react";


export default async function ProductCategories(props: any) {

  let response = await fetch(`${SERVER_URL}/products`);
  let data = await response.json();
  let products = data.data.products;

  return (
    <React.Suspense fallback={<Fallback />}>
      <div className="scrollmenu">
        <a href="#categories">Categories:</a>
        {
          products.map((product: any, i: number) =>
            <a key={i} href={`/category/?term=${product.product_category}`}>
              {product.product_category}
            </a>)
        }
      </div>
    </React.Suspense>
  )
}
