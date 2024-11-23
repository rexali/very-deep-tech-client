import { subscribeToNewsLetter } from "../api/subscribeToNewsLetter";

const handleSubscribeSubmit = async (event: any, setPostSuccess: any, setPostError: any) => {
    event.preventDefault();
    const {
        email
    } = event.target.elements;

    await subscribeToNewsLetter(email, setPostSuccess, setPostError);

};

export {
    handleSubscribeSubmit
}