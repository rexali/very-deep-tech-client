
import * as React from "react";
import HomePage from "./home/page";
import { getProductsAPI } from "./products/api/getProductsAPI";
import { getInitialDataAPI } from "./api/getInitialDataAPI";

export default async function Page(props:any) {
  // let initialData = await getInitialDataAPI() ?? {};
  let products = await getProductsAPI() ?? [];
  return (
    <HomePage data={products} />
  );
}