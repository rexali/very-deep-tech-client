import { SERVER_URL } from "@/constants/url";

const approveProductAPI = async (approvedData: any) => {

    try {
        let data = await fetch(`${SERVER_URL}/products/approveproduct`, {
            method: 'patch',
            body: JSON.stringify(approvedData)
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
    approveProductAPI
}