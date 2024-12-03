'use client'

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import * as React from "react";
import ProductList from "../products/ProductList";
import { getUserProductsAPI } from "./api/getUserProductsAPI";
import { getToken } from "@/utils/getToken";
import Fallback from "@/components/common/fallback";
import ReactPagination from "@/components/react-pagination";

export default function UserProducts() {
  const [data, setData] = React.useState<any>([]);
  const [activePage, setActivePage] = React.useState(1);

  const userId = getToken('_id') as string ?? "6712c927857f3a3b3492459f"

  React.useEffect(() => {
    async function getData() {
      const products = await getUserProductsAPI(userId, activePage);
      setData(products);
    }

    getData();

  }, [userId, activePage]);

  if (!data.length) {

    return (
      <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
        <Box textAlign={'center'}>No product(s) found</Box>
      </Container>
    )
  }
  return (
    <Container maxWidth="lg" component={'main'} sx={{ mt: 10 }}>
      <ProductList products={data} activePage={activePage} setActivePage={setActivePage} role={'admin'} />
      <Box marginTop={4} display={"flex"} justifyContent={'center'} >
        <ReactPagination
          activePage={activePage}
          itemsCountPerPage={4}
          totalItemsCount={data[0]?.totalProducts}
          pageRangeDisplayed={5}
          onchangeCallback={(v: any) => setActivePage(v)} />
      </Box>
    </Container>
  )
}
