'use client'

import { BASE_URL, SERVER_URL } from "@/constants/url";
import axios from "axios";

const getMessagesAPI = async (pageNumber:any=1) => {

    try {
      let { data } = await axios.get(`${SERVER_URL}/messages?page=${pageNumber}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });

      return data;

    } catch (error) {
      console.warn(error);
    }

  };

export{
    getMessagesAPI
}