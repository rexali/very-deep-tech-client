'use client'

import { BASE_URL } from '@/constants/url';
import { getToken } from '@/utils/getToken';
import axios from 'axios';
import React, { useEffect } from 'react';

export const useNotification = (notificationId:any) => {

  const [notification, setNotification] = React.useState<any>({});

  useEffect(() => {

    const getNotificationData = async () => {

      try {
        let { data } = await axios.get(`${BASE_URL}/notifications/${notificationId}`, {
          headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+getToken("jwtoken"),
          }
        });

        setNotification(data[0]);

      } catch (error) {
        console.warn(error);
      }

    };

    getNotificationData();

  }, [notificationId]);

  return {notification};
};
