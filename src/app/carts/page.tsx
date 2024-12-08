'use client'

import { Container, Box } from "@mui/material";
import { getCarts } from "@/store/actions/app-actions";
import { useState,useContext, useEffect} from "react";
import Fallback from "@/components/common/fallback";
import { getUserCartsAPI } from "./api/getUserCartsAPI";
import { CartListComponent } from "./CartListComponent";
import { AppContext } from "@/context/AppContext";
import { useAuth } from '@/hooks/use-auth';
import { getToken } from "@/utils/getToken";
import ReactPagination from "@/components/react-pagination";


export default function CartPage() {

  const [data, setData] = useState<any>([]);
  const { dispatch, state } = useContext(AppContext);
  const [activePage, setActivePage] =useState(1);
  const { user } = useAuth();

  const userId = user?._id as unknown as string || getToken('_id') as string;

  useEffect(() => {
    async function getData(id: string) {
      const products = await getUserCartsAPI(id, activePage);
      setData(products);
      dispatch(getCarts(products));
    }
    getData(userId);

  }, [dispatch, userId, activePage]);


  if (!data?.length) {
    return <Fallback item={"No product in your cart yet"} />
  }

  return (
    <Container maxWidth="lg" component={'main'} sx={{ mt: 10 }} >
      <Box>Carts: {data.length}</Box>
      <CartListComponent
        products={data || state?.carts}
      // refreshCart={getData}
      />
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
