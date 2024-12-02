'use client'

import "./styles/styles.css";
import React from "react";

export default function ProductCategories(props: any) {
  let products = props.products ?? [];

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
