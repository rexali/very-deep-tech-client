'use client'

import { BASE_URL } from '@/constants/url';
import { getMessages } from '@/store/actions/app-actions';
import axios from 'axios';
import React, { useEffect } from 'react';

export const useUserMessages = (userId:string, dispatch: any, pageNumber?: number) => {

  const [messages, setMessages] = React.useState<any>([]);

  useEffect(() => {

    const getMessageData = async () => {

      try {
        let { data } = await axios.get(`${BASE_URL}/messages?page=${pageNumber}&userId=`+userId, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        });

        dispatch(getMessages(data))
        setMessages(data);

      } catch (error) {
        console.warn(error);
      }

    };

    getMessageData();

  }, [dispatch, pageNumber]);

  return { messages };
};
