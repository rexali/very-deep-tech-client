import { BASE_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";

const postMessage = async (data: any, setPostSuccess: any, setPostError: any) => {
   try {
      let jwtoken = getToken('jwtoken') as string;
      let response = await fetch(`${BASE_URL}/messages`, {
         method: "POST",
         mode: 'cors',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwtoken,
         },
         body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.affectedRows) {
         setPostSuccess("Success");
      }
   } catch (error) {
      setPostError("Error");
      console.warn(error);
   }
}

export {
   postMessage
}