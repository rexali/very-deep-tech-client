'use client'

import { SERVER_URL } from "@/constants/url";
import axios from "axios";

const updateProductAPI = async (productData: any, setPostSuccess: any, setPostError: any) => {

    try {
        let { data } = await axios.patch(`${SERVER_URL}/products`, productData, {
            withCredentials: false,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

        });
        if (data.status === "success") {
            setPostSuccess(data.status)
        } else {
            setPostError(data.status)
        }

    } catch (error: any) {
        console.warn(error);
        setPostError("Error! " + error.message)
    } finally {
        setTimeout(() => {
            setPostSuccess('')
            setPostError('')
        }, 30000);
    }
};

export {
    updateProductAPI
}