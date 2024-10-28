import { BASE_URL, SERVER_URL } from "@/constants/url";
import axios from "axios";

const deleteFavouriteAPI = async (id: string) => {

    try {
        let { data } = await axios.delete(`${BASE_URL}/favourites/` + id, {
            withCredentials: false,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return data.data.cart;
    } catch (error) {
        console.warn(error);
    }
};

export {
    deleteFavouriteAPI
}