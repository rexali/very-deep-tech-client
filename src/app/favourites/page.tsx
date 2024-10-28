'use client'
import { useContext, useEffect, useRef, useState } from "react";
import { Box, Button, Container } from "@mui/material";
import FavouriteList from "./FavouriteList";
import { AppContext } from "@/context/AppContext";
import { getFavourites} from "@/store/actions/app-actions";
import Fallback from "@/components/common/fallback";
import ReactPagination from "@/components/react-pagination";
import Link from "next/link";
import { getUserFavouritesAPI } from "./api/getUserFavouritesAPI";
import { getToken } from "@/utils/getToken";


export default function FavouritePage() {

  const [data, setData] = useState<any>([]);
  const [activePage, setActivePage] = useState<number>(1);
  const mountRef = useRef(true);
  const { dispatch } = useContext(AppContext);
  const userId = getToken("_id") as string;
  async function getData() {
    const result = await getUserFavouritesAPI(userId, activePage)
    setData(result);
    dispatch(getFavourites(result))
  }

  useEffect(() => {
    if (mountRef.current) {
      getData();

      return () => {
        mountRef.current = false;
      }
    }
  });

  if (!data?.length) {
    return <Fallback />
  }

  return (
    <Container maxWidth="md" component={'main'} sx={{ mt: 5 }}>
      <h2 style={{ display: 'flex', justifyContent: "space-between" }}>Favourites <Link style={{ textDecoration: "none", color: 'blue' }} href={"/products"}><Button>See all</Button></Link></h2>
      <FavouriteList products={data} />
      <Box sx={{ mr: "auto", ml: "auto", maxWidth: 100 }} >
        <ReactPagination
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={1000}
          pageRangeDisplayed={5}
          onchangeCallback={(v: any) => setActivePage(v)} />
      </Box>
    </Container>
  )
}
