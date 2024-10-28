import { fetchData } from "@/app/messages/api/fetchDataAPI";
import { BASE_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";
import { savePathLink } from "@/utils/savePathLink";

const handleCreateMessage = async (
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
                message,
                from,
                to,
            } = event.target.elements;

            const updateData = {
                userId: getToken('userId') || userId,
                subject: subject.value,
                from: from.value || getToken('email'),
                message: message.value,
                email: to.value
            }
            let result = await fetchData(
                `${BASE_URL}/messages`,
                {
                    body: JSON.stringify(updateData),
                    method: "post"
                }
            );
            if (result.affectedRows === 1) {
                setUpdateSuccess("Success");
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
    handleCreateMessage
}