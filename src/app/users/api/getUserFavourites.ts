import { SERVER_URL } from "@/constants/url";

const getUserFavouritesAPI = async (userId: string, page: number = 1) => {

    try {
        let data = await fetch(`${SERVER_URL}/favourites/pages/${page}/users/${userId}/subdomains/maindomain`).then(res => res.json());
        if (data.data === null) {
            return [];
        }
        return data.data?.favourites.map((favourite: any) => favourite.product);
    } catch (error) {
        console.warn(error);
    }
};

export {
    getUserFavouritesAPI
}