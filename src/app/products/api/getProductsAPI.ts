import { SERVER_URL } from "@/constants/url";
import axios from "axios";

const getProductsAPI = async ()=> {

    try {
        let { data } = await axios.get(`${SERVER_URL}/products`,{
            withCredentials:false,
            headers: {
                'Content-Type': 'application/json',
            },
            
        });

        return data.data.products;
    } catch (error) {
        console.warn(error);
    }
};

export {
    getProductsAPI
}