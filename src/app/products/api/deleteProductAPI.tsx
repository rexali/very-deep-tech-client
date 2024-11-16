import { SERVER_URL } from "@/constants/url";
import axios from "axios";

const deleteProductAPI = async (productId: string) => {

    try {
        let { data: { data: { product } } } = await axios.get(`${SERVER_URL}/products/` + productId, {
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
    deleteProductAPI
}