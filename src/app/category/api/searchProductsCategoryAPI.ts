import { SERVER_URL } from "@/constants/url";

export const searchProductsCategoryAPI = async (term: string, pageNumber?: string) => {
    try {
        let response = await fetch(`${SERVER_URL}/category?term=${term}&page=${pageNumber}`, {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = await response.json();

        return result.data?.products;
    } catch (error) {
        console.log(error);
    }
};
