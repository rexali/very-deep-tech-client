'use client'

import { BASE_URL, SERVER_URL } from "@/constants/url";
import axios from "axios";

const clearUserCartsAPI = async (id: string) => {

    try {
        let { data } = await axios.delete(`${SERVER_URL}/carts/` + id + "/users", {
            withCredentials: false,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return data.data?.cart;
    } catch (error) {
        console.warn(error);
    }
};

export {
    clearUserCartsAPI
}