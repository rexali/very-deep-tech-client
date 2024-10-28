import React, { useState } from "react";
import axios from "axios";
import { SERVER_URL } from "@/constants/url";

export const useProducts = () => {
    const [data, setData] = useState<any>();

    const fetchData = async () => {
        try {
            const { data } = await axios.post(`${SERVER_URL}/products`, {
                // header
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            console.warn(error);
        } 
    };

    React.useEffect(() => {

            fetchData();

    }, [data]);

    return {data};
}