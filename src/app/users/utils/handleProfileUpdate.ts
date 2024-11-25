import Form from 'form-data'

import { updateUserProfileAPI } from "../api/updateUserProfile";

const handleProfileUpdate = async (event: any, setPostSuccess: any, setPostError: any) => {
    event.preventDefault();
    const {
        email_address,
        first_name,
        last_name,
        street_address,
        local_govt,
        state,
        photo
    } = event.target.elements;

    const formData = new Form();
     
    formData.append('email', email_address.value);
    let filesObj:any; 
    try {
        filesObj = document.querySelector('#photo') as any;  
        formData.append('photo', filesObj.files[0]);
    } catch (error) {
        console.log(error)
    }
    formData.append('lastName', last_name.value);
    formData.append('firstName', first_name.value);
    formData.append('streetAddress', street_address.value,);
    formData.append('localGovt', local_govt.value);
    formData.append('state', state.value);

    await updateUserProfileAPI(formData, setPostSuccess, setPostError);
};

export {
    handleProfileUpdate
}