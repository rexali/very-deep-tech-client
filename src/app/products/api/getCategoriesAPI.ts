import { SERVER_URL } from "@/constants/url";

const getCategoriesAPI = async (page: number = 1) => {

    try {
        let data = await fetch(`${SERVER_URL}/products/`+ page+'/categories').then(res=>res.json());

        return data.data.categoryData;
    } catch (error) {
        console.warn(error);
    }
};

export {
    getCategoriesAPI 
}