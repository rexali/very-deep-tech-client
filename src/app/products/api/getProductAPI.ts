import { SERVER_URL } from "@/constants/url";
import axios from "axios";

const getProductAPI = async (id: string) => {

    try {
        let { data } = await axios.get(`${SERVER_URL}/products/${id}`, {
            withCredentials: false,
            headers: {
                'Content-Type': 'application/json',
            },

        });

        return data.data?.product;
    } catch (error) {
        console.warn(error);
    }
};


export {
    getProductAPI
}