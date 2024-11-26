'use client'

import axios from "axios";
import { BASE_URL, SERVER_URL } from "@/constants/url";


const createOrderAPI = async (orderData: any) => {
   try {
      let {data} = await axios.post(`${SERVER_URL}/orders`, orderData, {
         headers: {
            'Content-Type': 'application/json',
         },
      });
      if (data.data?.status === "success") {
         return data.data.order._id;
      }
   } catch (error) {
      console.warn(error);
   }
}

export {
   createOrderAPI
}