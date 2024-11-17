import { fetchData } from "@/app/messages/api/fetchDataAPI";
import { SERVER_URL } from "@/constants/url";
import { savePathLink } from "@/utils/savePathLink";

const handleCreateNotification = async (
    event: any,
    setUpdateSuccess: any,
    setUpdateError: any,
    userId: any
) => {
    // prevent default
    event.preventDefault();
    // check userId is defined
    if (userId) {
        try {
            const {
                title,
                body,
            } = event.target.elements;

            const noticeData = {
                userId: userId,
                title: title.value,
                body: body.value,
            }
            let result = await fetchData(`${SERVER_URL}/notifications`, { body: JSON.stringify(noticeData), method: "post" });
            if (result.data.notification._id) {
                setUpdateSuccess("Success")
            } else {
                setUpdateError("Error!")
            }
        } catch (error) {
            setUpdateError("Error!")
            console.warn(error);
        };

    } else {
        savePathLink()
    }
}

export {
    handleCreateNotification
}