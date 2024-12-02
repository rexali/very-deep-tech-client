'use client'

import "./styles/styles.css";
import React from "react";

export default function ProductCategories(props: any) {
  let products = props.products ?? [];
  let categories = Array.from(new Set(products.map((category: any) => category.product_category.toUpperCase())));

  return (
    <div className="scrollmenu">
      <a href="#categories">Categories:</a>
      {
        categories.map((category: any, i: number) =>
          <a key={i} href={`/category/?term=${category}`}>
            {category}
          </a>)
      }
    </div>
  )
}
