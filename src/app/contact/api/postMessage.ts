'use client'

import { SERVER_URL } from "@/constants/url";
import axios from "axios";

const postMessage = async (messageData: any, setPostSuccess: any, setPostError: any) => {
   try {
      let { data } = await axios.post(`${SERVER_URL}/messages`, messageData, {
         headers: {
            'Content-Type': 'application/json',
         }
      });
      if (data.data.status) {
         setPostSuccess(data.data.status);
      } else {
         setPostError(data.data.status);
      }
   } catch (error: any) {
      setPostError("Error! " + error.message);
      console.warn(error);
   }
}

export {
   postMessage
}