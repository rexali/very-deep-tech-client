'use client'

import { BASE_URL, SERVER_URL } from "@/constants/url";
import axios from "axios";

const deleteCartAPI = async (id: string) => {

    try {
        let { data: { data: { cart } } } = await axios.delete(`${SERVER_URL}/carts/` + id, {
            withCredentials: false,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return cart;
    } catch (error) {
        console.warn(error);
    }
};

export {
    deleteCartAPI
}