'use client'

import { BASE_URL, SERVER_URL } from "@/constants/url";
// import { getToken } from "@/utils/getToken";

const createOrderAPI = async (orderData: any) => {
   try {
      //   let jwtoken = getToken('jwtoken') as string;
      let response = await fetch(`${SERVER_URL}/orders`, {
         method: "POST",
         mode: 'cors',
         cache:"no-store",
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer ' + jwtoken,
         },
         body: JSON.stringify(orderData),
      });
      const { status, data } = await response.json();
      if (status === "success") {
         return data.order._id;
      }
   } catch (error) {
      console.warn(error);
   }
}

export {
   createOrderAPI
}