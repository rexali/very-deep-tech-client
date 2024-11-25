// import { postMessage } from "../api/postMessage";

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

    const profileData = {
        email: email_address.value,
        lastName: last_name.value,
        firstName: first_name.value,
        streetAddress: street_address.value,
        localGovt: local_govt.value,
        state: state.value,
        photo: photo.value
    }
    console.log(profileData.photo);
    const filesObj = document.querySelector('#photo') as any;
    console.log(filesObj.files);
    console.log(filesObj.files[0]);



    await updateUserProfileAPI(profileData, setPostSuccess, setPostError);

};

export {
    handleProfileUpdate
}