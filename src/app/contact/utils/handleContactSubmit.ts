'use client'

import { postMessage } from "../api/postMessage";

const handleContactSubmit = async (event: any, setPostSuccess: any, setPostError: any) => {
    event.preventDefault();
    const {
        email,
        firstName,
        lastName,
        title,
        comment
    } = event.target.elements;

    const contactData = {
        sender: email.value,
        lastName: lastName.value,
        firstName: firstName.value,
        title: title.value,
        comment: comment.value,
        userId: ''
    }
    await postMessage(contactData, setPostSuccess, setPostError);

};

export {
    handleContactSubmit
}