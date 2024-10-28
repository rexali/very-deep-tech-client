'use client'

import { BASE_URL } from '@/constants/url';
import { getToken } from '@/utils/getToken';
import axios from 'axios';
import React, { useEffect } from 'react';

export const useMessage = (messageId:any) => {

  const [message, setMessage] = React.useState<any>({});

  useEffect(() => {

    const getMessageData = async () => {

      try {
        let { data } = await axios.get(`${BASE_URL}/messages/${messageId}`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken("jwtoken"),
          }
        });

        setMessage(data[0]);

      } catch (error) {
        console.warn(error);
      }

    };

    getMessageData();

  }, [messageId]);

  return {message};
};
