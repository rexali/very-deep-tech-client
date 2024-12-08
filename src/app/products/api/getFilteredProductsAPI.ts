import { SERVER_URL } from "@/constants/url";

const getFilteredProductsAPI = async (queryData: any, page: number = 1) => {

    try {
        let data = await fetch(`${SERVER_URL}/products/` + page + '/filters',{
            body:JSON.stringify(queryData)
        }).then(res => res.json());

        return data.data.products;
    } catch (error) {
        console.warn(error);
    }
};

export {
    getFilteredProductsAPI
}