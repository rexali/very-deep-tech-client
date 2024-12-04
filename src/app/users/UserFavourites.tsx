'use client'

import Container from "@mui/material/Container";
import * as React from "react";
import ProductList from "../products/ProductList";
import { getToken } from "@/utils/getToken";
import Fallback from "@/components/common/fallback";
import { getUserFavouritesAPI } from "../favourites/api/getUserFavouritesAPI";
import Box from "@mui/material/Box";
import ReactPagination from "@/components/react-pagination";
import { useAuth } from "@/hooks/use-auth";

export default function UserFavourites() {
  const [data, setData] = React.useState<any>([]);
  const [activePage, setActivePage] = React.useState(1);

  const auth = useAuth();
  const userId = auth.user?._id as unknown as string || getToken('_id') as string;

  React.useEffect(() => {
    async function getData() {
      const products = await getUserFavouritesAPI(userId, activePage);
      setData(products);
    }

    getData();

  }, [userId, activePage]);

  if (!data?.length) {

    return (
      <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
        <Box textAlign={'center'}>No item in your wish bag found</Box>
      </Container>
    )
  }

  return (
    <Container maxWidth="lg" component={'main'} sx={{ mt: 10 }}>
      <ProductList products={data} />
      <Box marginTop={4} display={"flex"} justifyContent={'center'} >
        <ReactPagination
          activePage={activePage}
          itemsCountPerPage={4}
          totalItemsCount={data[0]?.totalFavourites}
          pageRangeDisplayed={5}
          onchangeCallback={(v: any) => setActivePage(v)} />
      </Box>
    </Container>
  )
}