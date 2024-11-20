import { BASE_URL, SERVER_URL } from "@/constants/url";
import axios from "axios";

const isAlReadyAddedToFavouriteByUserAPI = async (userId: string, productId: string) => {

    try {
        let { data: { data: { favourites } } } = await axios.get(`${SERVER_URL}/favourites/` + userId, {
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