import { BASE_URL, SERVER_URL } from "@/constants/url";
import axios from "axios";

const getUserCartsAPI = async (userId: string) => {

    try {
        let { data: { data: { carts } } } = await axios.get(`${SERVER_URL}/carts/` + userId, {
            withCredentials: false,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        let newcarts = carts.map((cart: any) => {
            return {
                ...cart,
                product: {
                    ...cart.product,
                    cartId: cart._id,
                    cartQuantity: cart.quantity
                }
            }
        });


        return newcarts.map((cart: any) => cart.product);
    } catch (error) {
        console.warn(error);
    }
};

export {
    getUserCartsAPI
}