import { SERVER_URL } from "@/constants/url";

const featureProductAPI = async (featuredData: any) => {

    try {
        let data = await fetch(`${SERVER_URL}/products/featureproduct`, {
            method: 'patch',
            body: JSON.stringify(featuredData)
        }).then(res => res.json());
        if (data.status === 'success') {
            return true;
        }

        return false;
    } catch (error) {
        console.warn(error);
    }
};

export {
    featureProductAPI
}