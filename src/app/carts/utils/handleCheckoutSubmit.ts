'use client'

import { payWithPaystack } from "@/services/payWithPaystack";

const handleCheckoutSubmit = async (
    event: any,
    setPostSuccess: any,
    setPostError: any,
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

    if(contactData.method==='paystack'){
        
    }

    payWithPaystack(
        contactData.email ?? "alybaba2009@gmail.com",
        contactData.amount ?? 10000,
        orderData,
        transactionData,
        setPostSuccess,
        setPostError,
    );
};

export {
    handleCheckoutSubmit
}