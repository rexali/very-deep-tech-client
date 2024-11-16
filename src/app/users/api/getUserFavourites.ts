import { SERVER_URL } from "@/constants/url";

const getUserFavouritesAPI = async (userId: string, page: number = 1) => {

    try {
        let data = await fetch(`${SERVER_URL}/favourites?page=` + page + '&userId=' + userId).then(res => res.json());

        return data.data.favourites.map((favourite: any) => favourite.product);
    } catch (error) {
        console.warn(error);
    }
};

export {
    getUserFavouritesAPI
}