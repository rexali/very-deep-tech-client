'use client'

import { BASE_URL, SERVER_URL } from "@/constants/url";
// import { getToken } from "@/utils/getToken";

const createTransactionAPI = async (transactionData: any) => {
   try {
      //   let jwtoken = getToken('jwtoken') as string;
      let response = await fetch(`${SERVER_URL}/transactions`, {
         method: "POST",
         mode: 'cors',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer ' + jwtoken,
         },
         body: JSON.stringify(transactionData),
      });
      const data = await response.json();
      if (data.data?.status === "success") {
         return data.data.transaction._id
      }
   } catch (error) {
      console.warn(error);
   }
}

export {
   createTransactionAPI
}