import { postMessage } from "../api/postMessage";

const handleContactSubmit = async (event: any,setPostSuccess:any,setPostError:any) => {
    event.preventDefault();
    const {
        email,
        firstname,
        lastname,
        subject,
        message
    } = event.target.elements;

    const contactData = {
        email: email.value,
        lastname: lastname.value,
        firstname: firstname.value,
        subject: subject.value,
        message: message.value,
    }
    console.log({ ...contactData });
    await postMessage(contactData,setPostSuccess,setPostError);

};

export {
    handleContactSubmit
}