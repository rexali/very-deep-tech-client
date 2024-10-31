'use client'

import { BASE_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";
import axios from "axios";

const changePasswordAPI = async (passwordData: {
    rCode: string,
    email: string,
    password: string,
    old_password: string,
}) => {

    try {
        let { data } = await axios.post(`${BASE_URL}/change`, passwordData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken('jwtoken'),
            },
        });

        return data;
    } catch (error) {
        console.warn(error);
    }
};

export {
    changePasswordAPI
}