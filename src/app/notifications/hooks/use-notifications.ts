'use client'

import { BASE_URL } from '@/constants/url';
import { getNotifications } from '@/store/actions/app-actions';
import { getToken } from '@/utils/getToken';
import axios from 'axios';
import React, { useEffect } from 'react';

export const useNotifications = (dispatch:any,pageNumber?:any) => {

  const [result, setResult] = React.useState<any>([]);

  useEffect(() => {

    const getNotificationData = async () => {

      try {
        let { data:{data:{notifications}} } = await axios.get(`${BASE_URL}/notifications?page=${pageNumber}`, {
          headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+getToken("jwtoken"),
          }
        });
        dispatch(getNotifications(notifications));
        setResult(notifications);

      } catch (error) {
        console.warn(error);
      }

    };

    getNotificationData();

  }, [dispatch,pageNumber]);

  return result;
};
