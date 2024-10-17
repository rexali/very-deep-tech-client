import { handleSignUp } from "./handleSignUp";

/**
 * 
 * @param event : a form event
 * @param setSignUpError : an error callback
 * @param setSignUpSuccess : a success callback
 * @param url : a given
 */
export const handleSignUpSubmit = (
    event: any,
    setSignUpError: any,
    setSignUpSuccess: any,
) => {
    // prevent default behaviour
    event.preventDefault();
    try {
        // get user data
        const { first_name, last_name, email, password, confirm_password, remember_me } = event.target.elements;
        //   check if user password and confirm password before posting user data   
        if (password.value === confirm_password.value) {
            // call handleSignUp method and collect user data
            handleSignUp(
                first_name.value,
                last_name.value,
                email.value,
                password.value,
                remember_me.value
            ).then(((result) => {
                if (result) {
                    // send success message
                    setSignUpSuccess("success");
                } else {
                    // send failure message
                    setSignUpSuccess("fail");
                }
            })).catch((err) => {
                // log error message
                setSignUpError(err.message)
            })
        }

    } catch (error) {
        // log error
        console.warn(error);
    }

}