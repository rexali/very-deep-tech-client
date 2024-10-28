import { BASE_URL } from "@/constants/url";
// import { getToken } from "@/utils/getToken";

const createOrderAPI = async (orderData: any, setPostSuccess: any, setPostError: any) => {
   try {
      //   let jwtoken = getToken('jwtoken') as string;
      let response = await fetch(`${BASE_URL}/orders`, {
         method: "POST",
         mode: 'cors',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer ' + jwtoken,
         },
         body: JSON.stringify(orderData),
      });
      const { status, data } = await response.json();
      if (status === "success") {
         setPostSuccess("Success");
         return data.order._id;
      }
   } catch (error) {
      setPostError("Error");
      console.warn(error);
   }
}

export {
   createOrderAPI
}