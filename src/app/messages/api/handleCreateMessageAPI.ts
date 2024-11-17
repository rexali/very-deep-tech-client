import { fetchData } from "@/app/messages/api/fetchDataAPI";
import { SERVER_URL } from "@/constants/url";
import { savePathLink } from "@/utils/savePathLink";

const handleCreateMessageAPI = async (
    event: any,
    setSuccess: any,
    setError: any,
    userId: any
) => {
    // prevent default
    event.preventDefault();
    // check userId is defined
    if (userId) {
        try {
            const {
                title,
                comment,
            } = event.target.elements;

            const messageData = {
                userId: userId,
                title: title.value,
                comment: comment.value,
            }
            let result = await fetchData(`${SERVER_URL}/messages`, { body: JSON.stringify(messageData), method: "post" });
            if (result.data.message._id) {
                setSuccess("Success")
            } else {
                setError("Error!")
            }
        } catch (error) {
            setError("Error!")
            console.warn(error);
        };

    } else {
        savePathLink()
    }
}

export {
    handleCreateMessageAPI
}