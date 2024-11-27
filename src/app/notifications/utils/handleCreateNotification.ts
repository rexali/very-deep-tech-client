'use client'

import { SERVER_URL } from "@/constants/url";
import { savePathLink } from "@/utils/savePathLink";
import axios from "axios";

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
            let { data } = await axios.post(`${SERVER_URL}/notifications`, noticeData, {
                withCredentials: false,
                headers: {
                    'Accept':'application/json',
                    'Content-Type': 'application/json',
                },
            });
            if (data.data.status) {
                setUpdateSuccess(data.data.status)
            } else {
                setUpdateError(data.data.status)
            }
        } catch (error: any) {
            setUpdateError("Error! " + error.message)
            console.warn(error);
        };
    } else {
        savePathLink()
    }
}

export {
    handleCreateNotification
}