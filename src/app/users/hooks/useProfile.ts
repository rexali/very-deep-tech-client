import useSWR from 'swr';
import { getToken } from "@/utils/getToken";
import { useEffect } from 'react';
import { fetchUserProfile } from '../api/getUserProfileAPI';
import { SERVER_URL } from "@/constants/url";

function useProfile() {

    const userId = getToken('_id') as string ?? "6712c927857f3a3b3492459f";
    const { data, error, isLoading } = useSWR(`${SERVER_URL}/profiles/` + userId, fetchUserProfile);

    return { user:data, error, isLoading }
}

export {
    useProfile
}
