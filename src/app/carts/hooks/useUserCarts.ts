'use client'

import { SERVER_URL } from '@/constants/url';
import { getCarts } from '@/store/actions/app-actions';
import axios from 'axios';
import React, { useEffect } from 'react';

export const useUserCarts = (userId: string, dispatch: any, pageNumber?: number) => {

  const [carts, setCarts] = React.useState<any>([]);

  useEffect(() => {

    const getCartData = async () => {

      try {
        let { data: { data: { carts } } } = await axios.get(`${SERVER_URL}/carts/pages/${pageNumber}/users/${userId}`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        });

        dispatch(getCarts(carts));
        setCarts(carts);

      } catch (error) {
        console.warn(error);
      }

    };

    getCartData();

  }, [dispatch, userId, pageNumber]);

  return { carts };
};
