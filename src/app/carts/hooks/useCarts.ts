'use client'

import { SERVER_URL } from '@/constants/url';
import { getCarts } from '@/store/actions/app-actions';
import axios from 'axios';
import React, { useEffect } from 'react';

export const useCarts = (dispatch: any, pageNumber?: number) => {

    const [carts, setCarts] = React.useState<any>([]);

    useEffect(() => {

        const getCartData = async () => {

            try {
                let { data: { data: { carts } } } = await axios.get(`${SERVER_URL}/carts?pages/${pageNumber}`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                });

                dispatch(getCarts(carts))
                setCarts(carts);

            } catch (error) {
                console.warn(error);
            }

        };

        getCartData();

    }, [dispatch, pageNumber]);

    return { carts };
};
