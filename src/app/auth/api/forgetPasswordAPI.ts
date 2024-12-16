'use client'

import { SERVER_URL } from "@/constants/url";
import axios from "axios";

const forgetPasswordAPI = async (forgetData: { email: any }) => {

    try {
        let { data } = await axios.post(`${SERVER_URL}/confirm`, forgetData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });

        return data.data;
    } catch (error) {
        console.warn(error);
    }
};

export {
    forgetPasswordAPI
}