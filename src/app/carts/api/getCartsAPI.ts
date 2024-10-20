import { SERVER_URL } from "@/constants/url";
import axios from "axios";

const getCartsAPI = async () => {

    try {
        let { data } = await axios.get(`${SERVER_URL}/carts`, {
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
    getCartsAPI
}