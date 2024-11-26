'use client'

import { BASE_URL, SERVER_URL } from "@/constants/url";
import axios from "axios";

const createTransactionAPI = async (transactionData: any) => {
   try {
      let {data} = await axios.post(`${SERVER_URL}/transactions`,transactionData, {
         headers: {
            'Content-Type': 'application/json',
         }
      });

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