import { SERVER_URL } from "@/constants/url";
import axios from "axios";

const getProductAPI = async (id: string) => {

    try {
        let { data: { data: { product } } } = await axios.get(`${SERVER_URL}/products/` + id, {
            withCredentials: false,
            headers: {
                'Content-Type': 'application/json',
            },

        });

        return product;
    } catch (error) {
        console.warn(error);
    }
};


export {
    getProductAPI
}