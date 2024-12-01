'use client'

import * as React from 'react';
import Grid from '@mui/material/Grid';
import CartCard from "./CartCard";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Money from "@material-ui/icons/Money";
import { handleCheckoutSubmit } from './utils/handleCheckoutSubmit';
import { getUserProfileAPI } from '../users/api/getUserProfileAPI';
import ClearCartButton from './components/ClearCartButton';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useAuth } from '@/hooks/use-auth';
import { getToken } from '@/utils/getToken';
import { savePathLink } from '@/utils/savePathLink';
import { useRouter } from 'next/navigation';

export default function CartList(props: any) {
    const [error, setError] = React.useState('');
    const [success, setSuccess] = React.useState('');
    const [loading, setLoading] = React.useState('');
    const [cartTotals, setCartTotal] = React.useState<number>();
    const [method, setMethod] = React.useState('paystack');
    const [directPayment, setDirectPayment] = React.useState(false);
    const router = useRouter()
    const { user } = useAuth();

    const userId = getToken('_id') as string ?? "6712c927857f3a3b3492459f";


    let cartTotal = props.products
        .map((product: any) => Number(product.product_price) * Number(product.cartQuantity))
        .reduce((prev: any, cur: any) => {
            return prev + cur;
        }, 0);


    // read profile with user data for the form
    let userProfile: any;
    (async () => {
        userProfile = await getUserProfileAPI(userId);
    })();

    const orderItems = props.products.map((product: any) => ({
        productId: product.product_id,
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

    React.useEffect(() => {
        setCartTotal(cartTotal)
    }, [cartTotal])

    return (
        <Container>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                <Grid item xs={12} md={8} sx={{ marginTop: 1 }}>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {props.products.map((product: any) => {
                            return <Grid key={product._id} item xs={12} md={6}><CartCard product={product} refreshCart={props.refreshCart} /></Grid>
                        })}
                    </Grid>
                    <ClearCartButton />
                </Grid>

                <Grid item xs={12} md={4} sx={{ marginTop: 1 }}>
                    <Box
                        component="form"
                        onSubmit={async (evt) => {
                            if (userId) {
                                await handleCheckoutSubmit(
                                    evt,
                                    setSuccess,
                                    setError,
                                    setLoading,
                                    orderData,
                                    transactionData
                                );
                                setLoading('Sending data..');
                            } else {
                                savePathLink();
                                router.push('/auth/signin');
                            }
                        }}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <Box>
                            Billing/Contact Address Details:
                        </Box>
                        <TextField
                            autoComplete="given-name"
                            name="first_name"
                            required
                            fullWidth
                            margin={"normal"}
                            id="first_name"
                            label="First Name"
                            defaultValue={userProfile?.firstName}
                            autoFocus
                        />

                        <TextField
                            autoComplete="given-name"
                            name="last_name"
                            required
                            fullWidth
                            margin={"normal"}
                            id="last_name"
                            label="Last Name"
                            defaultValue={userProfile?.lastName}
                            autoFocus
                        />

                        <TextField
                            autoComplete="given-name"
                            name="email_address"
                            required
                            fullWidth
                            margin={"normal"}
                            id="email_address"
                            type='email'
                            label="Email Address"
                            defaultValue={userProfile?.user.email}
                            autoFocus
                        />

                        <TextField
                            autoComplete="given-name"
                            name="street_address"
                            required
                            fullWidth
                            margin={"normal"}
                            id="street_address"
                            label="Address"
                            defaultValue={userProfile?.streetAddress}
                            autoFocus
                        />

                        <TextField
                            autoComplete="given-name"
                            name="local_govt"
                            required
                            fullWidth
                            margin={"normal"}
                            id="local_govt"
                            label="Local Govt"
                            defaultValue={userProfile?.localGovt}
                            autoFocus
                        />

                        <TextField
                            autoComplete="given-name"
                            name="state"
                            required
                            fullWidth
                            margin={"normal"}
                            id="state"
                            label="State"
                            defaultValue={userProfile?.state}
                            autoFocus
                        />

                        <TextField
                            autoComplete="given-name"
                            name="shipping_method"
                            required
                            fullWidth
                            margin={"normal"}
                            id="shipping_method"
                            label="Shipping Method"
                            defaultValue={"GENERAL"}
                            disabled
                        />

                        <TextField
                            autoComplete="given-name"
                            name="shipping_cost"
                            required
                            fullWidth
                            margin={"normal"}
                            id="shipping_cost"
                            label="Shipping Cost"
                            defaultValue={0}
                            disabled
                        />

                        <TextField
                            autoComplete="given-name"
                            name="tax"
                            required
                            fullWidth
                            margin={"normal"}
                            id="tax"
                            label="Tax"
                            defaultValue={0}
                            disabled
                        />

                        <TextField
                            autoComplete="given-name"
                            name="total_amount"
                            required
                            fullWidth
                            margin={"normal"}
                            id="total_amount"
                            label="Total Amount"
                            autoFocus
                            defaultValue={cartTotals}
                            disabled
                        />

                        <FormControl>
                            <FormLabel id='payment_method'>Payment Method</FormLabel>
                            <RadioGroup
                                aria-labelledby='demo-controlled-radio-button-group'
                                name='payment_method'
                                value={method}
                                onChange={(evt) => {
                                    const { value } = evt.target;
                                    setMethod(value);
                                    if (value === 'direct-bank-transfer') {
                                        setDirectPayment(true);
                                    } else {
                                        setDirectPayment(false);
                                    }
                                }}
                            >
                                <FormControlLabel value={'paystack'} control={<Radio />} label='Paystack'></FormControlLabel>
                                <FormControlLabel value={'ussd'} control={<Radio />} label='Paystack USSD'></FormControlLabel>
                                <FormControlLabel value={'opay'} control={<Radio />} label='Paystack Opay'></FormControlLabel>
                                <FormControlLabel value={'card'} control={<Radio />} label='Paystack Card'></FormControlLabel>
                                <FormControlLabel value={'bank-transfer'} control={<Radio />} label='Paystack Bank transfer'></FormControlLabel>
                                <FormControlLabel value={'pay-on-delivery'} control={<Radio />} label='Pay on Delivery'></FormControlLabel>
                                <FormControlLabel value={'direct-bank-transfer'} control={<Radio />} label='Direct Bank Transfer'></FormControlLabel>
                            </RadioGroup>
                        </FormControl>
                        {
                            directPayment &&
                            (<Box sx={{ backgroundColor: 'brown', color: "white" }}>
                                <p>Bank: Jaiz Bank</p>
                                <p>Acct. Number: 0016938829</p>
                                <p>Name: Siniotech Information and Communication...</p>
                            </Box>)
                        }
                        {success && <Box textAlign={"center"} sx={{ backgroundColor: 'green', color: "white", padding: 2, borderRadius: 2 }}>{success.toUpperCase()}</Box>}
                        {error && <Box textAlign={"center"} sx={{ backgroundColor: 'red', color: 'white', padding: 2, borderRadius: 2 }}>{error.toUpperCase()}</Box>}
                        {loading && <Box textAlign={"center"} sx={{ backgroundColor: 'green', color: 'white', padding: 2, borderRadius: 2 }}>{loading.toUpperCase()}</Box>}


                        <Button
                            type="submit"
                            size="large"
                            fullWidth
                            variant="contained"
                            color='success'
                            sx={{ mt: 3, mb: 2 }}
                            startIcon={<Money />}
                        >
                            CHECKOUT
                        </Button>

                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
