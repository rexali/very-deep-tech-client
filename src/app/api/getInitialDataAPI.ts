import { SERVER_URL } from "@/constants/url";

const getInitialDataAPI = async (page: number = 1) => {

    try {
        let data = await fetch(`${SERVER_URL}/products/` + page + '/initial', {
            cache: 'force-cache',
            next: {
                revalidate: 7200
            }
        }).then(res => res.json());

        return data.data;
    } catch (error) {
        console.warn(error);
    }
};

export {
    getInitialDataAPI
}