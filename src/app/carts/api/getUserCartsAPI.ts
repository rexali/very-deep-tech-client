import { SERVER_URL } from "@/constants/url";
import axios from "axios";

const getUserCartsAPI = async (userId:string) => {

    try {
        let { data } = await axios.get(`${SERVER_URL}/carts/`+userId, {
            withCredentials: false,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        let carts = data.data.carts.map((cart: any) => cart.product);
        return carts;
    } catch (error) {
        console.warn(error);
    }
};

export {
    getUserCartsAPI
}