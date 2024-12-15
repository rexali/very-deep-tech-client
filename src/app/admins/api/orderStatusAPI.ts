import { SERVER_URL } from "@/constants/url";

const orderStatusAPI = async (orderStatusData: any) => {

    try {
        let data = await fetch(`${SERVER_URL}/orders`, {
            method: 'patch',
            body: JSON.stringify(orderStatusData)
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
    orderStatusAPI
}