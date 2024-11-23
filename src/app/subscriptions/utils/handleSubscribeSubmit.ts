import { createSubscription } from "../api/createSubscription";

const handleSubscribeSubmit = async (event: any, setPostSuccess: any, setPostError: any) => {
    event.preventDefault();
    const {
        email
    } = event.target.elements;

    await createSubscription(email, setPostSuccess, setPostError);

};

export {
    handleSubscribeSubmit
}