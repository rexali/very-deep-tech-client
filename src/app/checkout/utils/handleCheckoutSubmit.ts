'use client'

import { sendOrderAndTransaction } from "@/app/payment/sendOrderAndTransaction";
import { payWithPaystack } from "@/services/payWithPaystack";

const handleCheckoutSubmit = async (
    event: any,
    setPostSuccess: any,
    setPostError: any,
    setLoading: any,
    orderData: any,
    transactionData?: any
) => {

    event.preventDefault();

    const {
        email_address,
        first_name,
        last_name,
        street_address,
        local_govt,
        state,
        total_amount,
        shipping_cost,
        shipping_method,
        tax,
        payment_method

    } = event.target.elements;

    const contactData = {
        email: email_address.value,
        lastName: last_name.value,
        firstName: first_name.value,
        address: street_address.value,
        localGovt: local_govt.value,
        state: state.value,
        amount: total_amount.value,
        shippingCost: shipping_cost.value,
        shippingMethod: shipping_method.value,
        tax: tax.value,
        method: payment_method.value
    }

    switch (contactData.method) {
        case 'paystack':
        case 'ussd':
        case 'opay':
        case 'bank-transfer':
        case 'card':
            payWithPaystack(
                contactData.email ?? '',
                contactData.amount ?? 0,
                orderData,
                transactionData,
                setPostSuccess,
                setPostError,
                setLoading
            );
            break;

        case 'pay-on-delivery':
            await sendOrderAndTransaction(
                orderData,
                { ...transactionData, paymentMethod: 'Pay on Delivery' },
                setPostSuccess,
                setPostError,
                setLoading
            );
            break;

        case 'direct-bank-transfer':
            await sendOrderAndTransaction(
                orderData,
                { ...transactionData, paymentMethod: 'Direct Bank Transfer' },
                setPostSuccess,
                setPostError,
                setLoading
            );
            alert(
                'Use the details below to make your payment'
            );
            break;

        case 'call-to-order':
            await sendOrderAndTransaction(
                orderData,
                { ...transactionData, paymentMethod: 'Call to Order' },
                setPostSuccess,
                setPostError,
                setLoading
            );

            alert(
                'Use the details below to call us'
            );

            break;

        case 'cash-and-carry':
            await sendOrderAndTransaction(
                orderData,
                { ...transactionData, paymentMethod: 'Cash and Carry' },
                setPostSuccess,
                setPostError,
                setLoading
            );

            alert(
                'Use the detail below to visit us and tap checkout'
            );

            break;

        default:
            console.log('I am the default');
            break;
    }


};

export {
    handleCheckoutSubmit
}