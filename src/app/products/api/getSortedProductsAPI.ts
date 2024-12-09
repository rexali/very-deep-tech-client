import { SERVER_URL } from "@/constants/url";

const getSortedProductsAPI = async (queryData: any, page: number = 1) => {

    try {
        let data = await fetch(`${SERVER_URL}/products/` + page + '/sorts',{
            body:JSON.stringify(queryData)
        }).then(res => res.json());

        return data.data.products;
    } catch (error) {
        console.warn(error);
    }
};

export {
    getSortedProductsAPI 
}