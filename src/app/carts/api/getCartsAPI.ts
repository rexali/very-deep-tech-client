'use client'

import { SERVER_URL } from "@/constants/url";
import axios from "axios";

const getCartsAPI = async () => {

    try {
        let { data: { data: { carts } } } = await axios.get(`${SERVER_URL}/carts`, {
            withCredentials: false,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        return carts.map((cart: any) => cart.product);
    } catch (error) {
        console.warn(error);
    }
};

export {
    getCartsAPI
}