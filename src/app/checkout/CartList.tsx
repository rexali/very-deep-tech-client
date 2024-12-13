'use client'

import * as React from 'react';
import Grid from '@mui/material/Grid';
import CartCard from "../carts/CartCard";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Money from "@material-ui/icons/Money";
import { handleCheckoutSubmit } from './utils/handleCheckoutSubmit';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useProfile } from '../users/hooks/useProfile';
import { useAuth } from '@/hooks/use-auth';
import { getToken } from '@/utils/getToken';
import { goToSavedLinkpath } from '@/utils/goToSavedLinkPath';
import { useRouter } from 'next/navigation';
import CheckoutForm from './CheckoutForm';


export default function CartList(props: any) {
    const [error, setError] = React.useState('');
    const [success, setSuccess] = React.useState('');
    const [loading, setLoading] = React.useState('');
    const [cartTotals, setCartTotal] = React.useState<number>();
    const [method, setMethod] = React.useState('paystack');
    const [directPayment, setDirectPayment] = React.useState(false);
    const [cashAndCarry, setCashAndCarry] = React.useState(false);
    const [callToOrder, setCallToOrder] = React.useState(false);
    const auth = useAuth();
    const userId = auth.user?._id as unknown as string || getToken('_id') as string;
    const router = useRouter()

    const { user } = useProfile(userId);

    let cartTotal = props.products
        .map((product: any) => Number(product.product_price) * Number(product.cartQuantity))
        .reduce((prev: any, cur: any) => {
            return prev + cur;
        }, 0);

    const orderItems = props.products.map((product: any) => ({
        product: product._id,
        quantity: product.cartQuantity,
        price: product.product_price,
        total: parseInt(product.cartQuantity) * parseInt(product.product_price)
    }))

    const orderData = {
        userId: userId,
        items: orderItems,
        orderStatus: "pending",
        tax: 0,
        shippingCost: 0,
        subtotal: orderItems
            .map((item: any) => parseInt(item.price))
            .reduce((prev: any, cur: any) => {
                return prev + cur;
            }, 0)
        ,
        total: cartTotal,
        paymentStatus: "pending",
        shippingMethod: "GENERAL"
    };

    const transactionData = {
        userId: userId,
        orderId: "",
        amount: orderData.total,
        type: "payment", // tranfer, withdraw
        reference: "",
        currency: "NG",
        paymentMethod: "Paystack"

    }

    const handleSubmit = async (event: any) => {
        if (userId) {
            await handleCheckoutSubmit(
                event,
                setSuccess,
                setError,
                setLoading,
                orderData,
                transactionData
            );
        } else {
            router.replace('/auth/signin?next='+goToSavedLinkpath());
        }
    }


    React.useEffect(() => {
        setCartTotal(cartTotal)
    }, [cartTotal])

    return (
        <Container>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
 
                <Grid item xs={12} md={8} sx={{ marginTop: 1 }}>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {props?.products.map((product: any) => {
                            return <Grid key={product._id} item xs={12} md={6}><CartCard product={product} refreshCart={props.refreshCart}/></Grid>
                        })}
                    </Grid>
                </Grid>

                <Grid item xs={12} md={4} sx={{ marginTop: 1 }}>
                    <CheckoutForm orderData={orderData} transactionData={transactionData} tax={0} shippingMethod={'GENERAL'} shippingCost={0} cartTotals={cartTotals} />
                </Grid>
            </Grid>
        </Container>
    )
}
