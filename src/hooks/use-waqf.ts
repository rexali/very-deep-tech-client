'use client'

import { BASE_URL } from '@/constants/url';
import { WaqfContext } from '@/context/WaqfContext';
import { getWAQF } from '@/store/actions/waqf-actions';
import { getToken } from '@/utils/getToken';
import axios from 'axios';
import * as React  from 'react';

export const useWaqf = (pageNumber: any = 1) => {

    const [result, setResult] = React.useState<any>([]);
    const { dispatch } = React.useContext(WaqfContext);
    

    React.useEffect(() => {
        const getWaqfData = async () => {

            try {
                let { data } = await axios.get(`${BASE_URL}/waqfs?page=${pageNumber}`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + getToken('jwtoken'),
                    }
                });

                dispatch(getWAQF(data));
                setResult(data);
            } catch (error) {
                console.warn(error);
            }
        };
        
        getWaqfData();

    }, [dispatch,pageNumber]);

    return result;
};