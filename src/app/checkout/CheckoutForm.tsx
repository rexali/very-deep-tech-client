'use client'

import * as React from 'react';
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

export default function CheckoutForm({
    tax,
    shippingMethod,
    shippingCost,
    cartTotal,
    orderData,
    transactionData,
}: {
    tax: any,
    shippingMethod: any,
    shippingCost: any,
    cartTotal: any
    orderData: any,
    transactionData: any,

}) {

    const [error, setError] = React.useState('');
    const [success, setSuccess] = React.useState('');
    const [loading, setLoading] = React.useState('');
    const [method, setMethod] = React.useState('paystack');
    const [directPayment, setDirectPayment] = React.useState(false);
    const [cashAndCarry, setCashAndCarry] = React.useState(false);
    const [callToOrder, setCallToOrder] = React.useState(false);
    const auth = useAuth();
    const userId = auth.user?._id as unknown as string || getToken('_id') as string;
    const router = useRouter()

    const { user } = useProfile(userId);

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
            router.replace('/auth/signin?next=' + goToSavedLinkpath());
        }
    }

    return (
        <Container>
            <Box
                component="form"
                onSubmit={handleSubmit}
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
                    defaultValue={user?.firstName}
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
                    defaultValue={user?.lastName}
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
                    defaultValue={user?.user.email}
                />

                <TextField
                    autoComplete="given-name"
                    name="street_address"
                    required
                    fullWidth
                    margin={"normal"}
                    id="street_address"
                    label="Address"
                    defaultValue={user?.streetAddress}
                />

                <TextField
                    autoComplete="given-name"
                    name="local_govt"
                    required
                    fullWidth
                    margin={"normal"}
                    id="local_govt"
                    label="Local Govt"
                    defaultValue={user?.localGovt}
                />

                <TextField
                    autoComplete="given-name"
                    name="state"
                    required
                    fullWidth
                    margin={"normal"}
                    id="state"
                    label="State"
                    defaultValue={user?.state}
                />

                <TextField
                    autoComplete="given-name"
                    name="shipping_method"
                    required
                    fullWidth
                    margin={"normal"}
                    id="shipping_method"
                    label="Shipping Method"
                    defaultValue={shippingMethod}
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
                    defaultValue={shippingCost}
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
                    defaultValue={tax}
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
                    defaultValue={cartTotal}
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

                            if (value === 'call-to-order') {
                                setCallToOrder(true);
                            } else {
                                setCallToOrder(false);
                            }

                            if (value === 'cash-and-carry') {
                                setCashAndCarry(true);
                            } else {
                                setCashAndCarry(false);
                            }

                        }}
                    >
                        <FormControlLabel value={'call-to-order'} control={<Radio />} label='Call to Order'></FormControlLabel>
                        <FormControlLabel value={'cash-and-carry'} control={<Radio />} label='Cash and Carry'></FormControlLabel>
                        <FormControlLabel value={'pay-on-delivery'} control={<Radio />} label='Pay on Delivery'></FormControlLabel>
                        <FormControlLabel value={'direct-bank-transfer'} control={<Radio />} label='Direct Bank Transfer'></FormControlLabel>
                        <FormControlLabel value={'paystack'} control={<Radio />} label='Paystack'></FormControlLabel>
                        <FormControlLabel value={'ussd'} control={<Radio />} label='Paystack USSD'></FormControlLabel>
                        <FormControlLabel value={'opay'} control={<Radio />} label='Paystack Opay'></FormControlLabel>
                        <FormControlLabel value={'card'} control={<Radio />} label='Paystack Card'></FormControlLabel>
                        <FormControlLabel value={'bank-transfer'} control={<Radio />} label='Paystack Bank transfer'></FormControlLabel>
                    </RadioGroup>
                </FormControl>
                {
                    directPayment &&
                    (<Box sx={{ backgroundColor: 'green', color: "white" }}>
                        <p>&nbsp;&nbsp;Bank: Jaiz Bank</p>
                        <p>&nbsp;&nbsp;Acct. Number: 0016938829</p>
                        <p>&nbsp;&nbsp;Name: Siniotech Information and Communication...</p>
                    </Box>)
                }
                {
                    cashAndCarry &&
                    (<Box sx={{ backgroundColor: 'green', color: "white" }}>
                        <p>&nbsp;&nbsp;Visit: Siniotech Ltd</p>
                        <p>&nbsp;&nbsp;Address: 230 Naibawa Gasa A, Titi Dan Hassan, Kumbotso, Kano Sate</p>
                        <p>&nbsp;&nbsp;Call: 07016807004</p>
                    </Box>)
                }
                {
                    callToOrder &&
                    (<Box sx={{ backgroundColor: 'green', color: "white" }}>
                        <p>&nbsp;&nbsp;Call: 07016807004</p>
                        <p>&nbsp;&nbsp;Visit: Siniotech Ltd</p>
                        <p>&nbsp;&nbsp;Address: 230 Naibawa Gasa A, Titi Dan Hassan, Kumbotso, Kano Sate</p>
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
                    PAY NOW
                </Button>

            </Box>
        </Container>
    )
}