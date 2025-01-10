import { SERVER_URL } from "@/constants/url";

const getInitialDataAPI = async (subdomain?:string, page: number = 1) => {

    try {
        let data = await fetch(`${SERVER_URL}/products/${page}/initial/subdomains/${subdomain}`, { next: { revalidate: 60 } }).then(res => res.json());

        return data.data;
    } catch (error) {
        console.warn(error);
    }
};

export {
    getInitialDataAPI
}
