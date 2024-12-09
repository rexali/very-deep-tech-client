import React, { useState } from "react";
import axios from "axios";
import { SERVER_URL } from "@/constants/url";

export const useQueryData = (page:number) => {
    const [data, setData] = useState<any>([]);

    
    React.useEffect(() => {
        const fetchQueryData = async () => {
            try {
                const { data } = await axios.get(`${SERVER_URL}/products?page=${page}`, {
                    // header
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
                setData(data);
            } catch (error) {
                console.warn(error);
            } 
        };
    
            fetchQueryData();
    }, [data, page]);

    return {data};
}