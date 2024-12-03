'use client'

import { SERVER_URL } from "@/constants/url";
import axios from "axios";

const clearUserCartsAPI = async (id: string) => {

    try {
        let { data } = await axios.delete(`${SERVER_URL}/carts/` + id + "/users", {
            withCredentials: false,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if (data.status === 'success') {

            return true
        }

        return false;
    } catch (error) {
        console.warn(error);
    }
};

export {
    clearUserCartsAPI
}