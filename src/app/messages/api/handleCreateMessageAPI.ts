'use client'

import { SERVER_URL } from "@/constants/url";
import { savePathLink } from "@/utils/savePathLink";
import axios from "axios";

const handleCreateMessageAPI = async (
    event: any,
    setSuccess: any,
    setError: any,
    userId?: any
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
                userId: userId ?? '',
                title: title.value,
                comment: comment.value,
                sender: event.target.elements.value ?? '',
                lastName: event.target.elements.value ?? '',
                firstName: event.target.elements.value ?? '',
            }
            let { data } = await axios.post(`${SERVER_URL}/messages`, messageData, {
                withCredentials: false,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            if (data.data?.status) {
                setSuccess(data.data?.status)
            } else {
                setError(data.data?.status)
            }
        } catch (error: any) {
            setError("Error! " + error.message)
            console.warn(error);
        };

    } else {
        savePathLink()
    }
}

export {
    handleCreateMessageAPI
}