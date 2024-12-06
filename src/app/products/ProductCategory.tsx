'use client'

import "./styles/styles.css";
import React from "react";

export default function ProductCategories(props: any) {
  let categoryData = props.categories ?? [];
  let categories = Array.from(new Set(categoryData.map((product: any) => product.product_category)));

  return (
    <div className="scrollmenu">
      <a href="#categories">Categories:</a>
      {
        categories.map((category: any, i: number) => <a key={category+i} href={`/category/?term=${category.toUpperCase()}`}>{category}</a>) 
      }
    </div>
  )
}
