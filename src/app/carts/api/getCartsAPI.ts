'use client'

import { SERVER_URL } from "@/constants/url";
import axios from "axios";

const getCartsAPI = async (page: number = 1) => {

    try {
        let { data } = await axios.get(`${SERVER_URL}/carts?page=` + page, {
            withCredentials: false,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        let newcarts = data.data?.carts.map((cart: any) => {
            return {
                ...cart,
                product: {
                    ...cart.product,
                    cartId: cart._id,
                    cartQuantity: cart.quantity,
                    totalCarts: cart.totalCarts
                }
            }
        });


        return newcarts.map((cart: any) => cart.product);
    } catch (error) {
        console.warn(error);
    }
};

export {
    getCartsAPI
}