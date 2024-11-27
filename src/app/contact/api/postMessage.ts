import { SERVER_URL} from "@/constants/url";

const postMessage = async (data: any, setPostSuccess: any, setPostError: any) => {
   try {
      let response = await fetch(`${SERVER_URL}/messages`, {
         method: "POST",
         mode: 'cors',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.data.status) {
         setPostSuccess(result.data.status);
      }else{
         setPostError(result.data.status);
      }
   } catch (error:any) {
      setPostError("Error! "+error.message);
      console.warn(error);
   }
}

export {
   postMessage
}