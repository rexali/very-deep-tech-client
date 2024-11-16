'use client'

import Button from "@mui/material/Button";
import { getToken } from "@/utils/getToken";
import AddToCart from '@mui/icons-material/AddShoppingCart'
import Box from "@mui/material/Box";
import { useState , useContext} from "react";
import StatusModal from "@/components/common/status-modal";
import { AuthContext } from "@/context/AuthContext";

export default function ProductBottomActions({ product, createCartAPI }: { product: any, createCartAPI: any }) {
    const [open, setOpen] = useState(false);
  const [quantity, setQuantity] =useState<number>(product?.cartQuantity ?? 0);
  const { state } =useContext(AuthContext);
  const userId = state.user?._id ?? "6712c927857f3a3b3492459f";
  var range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);
 
    const handleOpen = ()=>{
        setOpen(true)
    }
    return (
        <Box sx={{ display: 'flex', justifyContent: "space-between", width: "100%" }}>
            <span>N {product.product_price}</span>
            {/* add quantity option here using select element */}
            <label>
                Select Qty: <span style={{ marginRight: 2 }}>{quantity} </span>
          <select onChange={
            async (evt: any) => {
              const { value } = evt.target;
              setQuantity(value);
            }
          }>
            {range(0, Number(product?.product_quantity ?? 1)).map((v) => <option key={v} value={v}>{v}</option>)}
          </select>
        </label>
            <Button
                size="small"
                onClick={async () => {

                    const cart = await createCartAPI({
                        product_id: product._id,
                        user_id: (userId || getToken("_id")) ?? "6712c927857f3a3b3492459f",
                        quantity: quantity,
                        price: product.product_price
                    })
                    if (cart._id) {
                        handleOpen();
                    }
                }}
                startIcon={<AddToCart />}>Add</Button>
            {open && <StatusModal message={{
                title: "Cart Alert",
                body: "Product added to cart successfully"
            }} closeCallback={handleOpen} />}
        </Box>
    )
}
