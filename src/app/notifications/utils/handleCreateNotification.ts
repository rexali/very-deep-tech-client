import { fetchData } from "@/app/messages/api/fetchDataAPI";
import { BASE_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";
import { savePathLink } from "@/utils/savePathLink";

const handleCreateNotification = async (
    event: any,
    setUpdateSuccess: any,
    setUpdateError: any,
    userId: any) => {
    // prevent default
    event.preventDefault();
    // check userId is defined
    if (userId) {
        try {
            const {
                subject,
                body,
            } = event.target.elements;

            const updateData = {
                userId: getToken('userId') || userId,
                subject: subject.value,
                body: body.value,
            }
            let result = await fetchData(`${BASE_URL}/notifications`, { body: JSON.stringify(updateData), method: "post" });
            if (result.affectedRows === 1) {
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