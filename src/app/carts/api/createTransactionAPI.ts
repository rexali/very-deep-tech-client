'use client'

import { BASE_URL, SERVER_URL } from "@/constants/url";

const createTransactionAPI = async (transactionData: any) => {
   try {
      let response = await fetch(`${SERVER_URL}/transactions`, {
         method: "POST",
         mode: 'cors',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(transactionData),
      });
      const data = await response.json();
      if (data.data?.status === "success") {
         console.log(data.data);
         return data.data.transaction._id
      }
   } catch (error) {
      console.warn(error);
   }
}

export {
   createTransactionAPI
}