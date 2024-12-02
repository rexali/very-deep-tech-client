
import * as React from "react";
import HomePage from "./home/page";
import { getProductsAPI } from "./products/api/getProductsAPI";

export default async function Page() {
  let products = await getProductsAPI() ?? [];
  return (
    <HomePage products={products} />
  );
}