import { SERVER_URL } from "@/constants/url";

const getUserProductsAPI = async (userId:string,page: number = 1) => {

    try {
        let data = await fetch(`${SERVER_URL}/products?page=` + page +'&userId='+userId).then(res=>res.json());

        return data.data?.products;
    } catch (error) {
        console.warn(error);
    }
};

export {
    getUserProductsAPI
}