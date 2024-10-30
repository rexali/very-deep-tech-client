import { BASE_URL, SERVER_URL } from "@/constants/url";
import axios from "axios";

const isAlReadyAddedToFavouriteByUserAPI = async (userId: string, productId: number) => {

    try {
        let { data: { data: { favourites } } } = await axios.get(`${SERVER_URL}/favourites/` + userId + "/users", {
            withCredentials: false,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (favourites.map((favourite: any) => favourite.product._id).includes(productId)) {
            return true
        }

        return false

    } catch (error) {
        console.warn(error);

    }
};

export {
    isAlReadyAddedToFavouriteByUserAPI
}