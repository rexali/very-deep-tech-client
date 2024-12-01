'use client'

import * as React from "react";
import HomePage from "./home/page";
import { getToken } from "@/utils/getToken";
import { getProducts } from "@/store/actions/app-actions";
import { AppContext } from "@/context/AppContext";
import { getUserCartsAPI } from "./carts/api/getUserCartsAPI";

export default function Page() {
  const { dispatch } = React.useContext(AppContext);
  const userId = getToken('_id') as string ?? '';
  const [data,setData]=React.useState<any>([])

  React.useEffect(() => {
    async function getData() {
      const products = await getUserCartsAPI(userId);
      setData(products);
      dispatch(getProducts(products));
    }

    getData();

  }, [userId, dispatch]);
  return (
    <HomePage products={data} />
  );
}