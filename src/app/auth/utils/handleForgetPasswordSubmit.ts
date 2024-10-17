import { forgetPasswordAPI } from "../api/forgetPasswordAPI";

const handleForgetPasswordSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    successCallback: any,
    failureCallback: any
) => {
    try {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const result = await forgetPasswordAPI({email});
        if (result.affectedRows===1) {
            successCallback('Success: Check your inbox');
        }else{
           failureCallback('Error');
        }
    } catch (error) {
        console.warn(error);
    }



};

export {
    handleForgetPasswordSubmit
}