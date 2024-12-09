import { SERVER_URL } from "@/constants/url";

const getUserCartsAPI = async (userId: string, page: number = 1) => {

    try {
        let data = await fetch(`${SERVER_URL}/carts/pages/${page}/users/${userId}`).then(res => res.json());
        if (data.data === null) {
            return [];
        }
        let carts = data.data?.carts;
        let newcarts = carts.map((cart: any) => ({
            ...cart,
            product: {
                ...cart.product,
                cartId: cart._id,
                cartQuantity: cart.quantity
            }
        }));


        return newcarts.map((cart: any) => cart.product);
    } catch (error) {
        console.warn(error);
    }
};

export {
    getUserCartsAPI
}