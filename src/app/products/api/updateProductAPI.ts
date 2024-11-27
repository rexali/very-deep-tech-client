'use client'

import { SERVER_URL } from "@/constants/url";
import axios from "axios";

const updateProductAPI = async (productData: any, setPostSuccess: any, setPostError: any) => {

    try {
        let { data} = await axios.patch(`${SERVER_URL}/products`, productData, {
            withCredentials: false,
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json',
            },

        });
        if (data.data?.status === "success") {
            setPostSuccess(data.data?.status)
        } else {
            setPostError("Failed")
        }

    } catch (error) {
        console.warn(error);
    }
};

export {
    updateProductAPI
}