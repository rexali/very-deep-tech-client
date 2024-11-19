import { fetchData } from "@/app/messages/api/fetchDataAPI";
import { SERVER_URL } from "@/constants/url";
import { savePathLink } from "@/utils/savePathLink";

const createQouteAPI = async (
    event: any,
    setSuccess: any,
    setError: any,
) => {
    // prevent default
    event.preventDefault();
    // check userId is defined
    try {
        const {
            email,
            phone,
            productId,
            message
        } = event.target.elements;

        const qouteData = {
            email: email.value,
            phone: phone.value,
            productId: productId.value,
            message: message.value
        }
        let result = await fetchData(`${SERVER_URL}/qoutes`, { body: JSON.stringify(qouteData), method: "post" });
        if (result.data.qoute._id) {
            setSuccess("Success")
        } else {
            setError("Error!")
        }
    } catch (error) {
        setError("Error!")
        console.warn(error);
    };
}

export {
    createQouteAPI
}