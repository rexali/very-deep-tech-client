'use client'

import Container from "@mui/material/Container";
import * as React from "react";
import ProductList from "../products/ProductList";
import { getToken } from "@/utils/getToken";
import Fallback from "@/components/common/fallback";
import { getUserCartsAPI } from "../carts/api/getUserCartsAPI";
import Box from "@mui/material/Box";
import ReactPagination from "@/components/react-pagination";
import { getCarts } from "@/store/actions/app-actions";
import { AppContext } from "@/context/AppContext";
import { useAuth } from "@/hooks/use-auth";

export default function UserCarts() {
  const [data, setData] = React.useState<any>([]);
  const [activePage, setActivePage] = React.useState(1);
  const {dispatch} = React.useContext(AppContext);

  const auth = useAuth();
  const userId = auth.user?._id as unknown as string || getToken('_id') as string;

  React.useEffect(() => {
    async function getData() {
      const products = await getUserCartsAPI(userId);
      setData(products);
      dispatch(getCarts(products));
    }

    getData();

  }, [userId,dispatch]);

  if (!data.length) {

    return (
      <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
        <Box textAlign={'center'}>No item in your cart found</Box>
      </Container>
    )
  }
  return (
    <Container maxWidth="lg" component={'main'} sx={{ mt: 10 }}>
      <React.Suspense fallback={<Fallback />} >
        <ProductList products={data} />
      </React.Suspense>
      <Box marginTop={4} display={"flex"} justifyContent={'center'} >
        <ReactPagination
          activePage={activePage}
          itemsCountPerPage={4}
          totalItemsCount={data[0]?.totalCarts}
          pageRangeDisplayed={5}
          onchangeCallback={(v: any) => setActivePage(v)} />
      </Box>
    </Container>
  )
}
