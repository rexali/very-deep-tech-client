import SideDrawer from "@/components/common/side-drawer";
import ReactPagination from "@/components/react-pagination";
import { Box, Container } from "@mui/material";
import { useState } from "react";
import ProductList from "../ProductList";

export default function QuerySideDrawer(props: any) {

    const [activePage, setActivePage] = useState<number>(1);
    const [products, setProducts] = useState<any>([]);
    const [open, setOpen] = useState<boolean>(false);

    return (
        <Container maxWidth="md" component={'main'} sx={{ mt: 10 }}>
            {open && <SideDrawer searchCallback={undefined}>
                <ProductList products={products} />
                <Box marginTop={4} display={"flex"} justifyContent={'center'} >
                    <ReactPagination
                        activePage={activePage}
                        itemsCountPerPage={4}
                        totalItemsCount={products[0]?.totalProducts}
                        pageRangeDisplayed={5}
                        onchangeCallback={(v: any) => setActivePage(v)} />
                </Box>
            </SideDrawer>
            }
        </Container>
    )
}
