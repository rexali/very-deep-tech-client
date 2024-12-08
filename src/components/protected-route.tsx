"use client"

import SignIn from "@/app/auth/signin/page";
import { useAuth } from "@/hooks/use-auth";
import { goToSavedLinkpath } from "@/utils/goToSavedLinkPath";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }: { children: any }) => {
    const router = useRouter();

    const { user: { _id, role, token } } = useAuth();

    if (role === 'admin' && token && _id !== null) {

        router.push('/admins');
    } else if (role === 'user' && token && _id !== null) {

        router.push('/users');
    } else {

        router.push('/auth/signin');
    }

    return children

}

export default ProtectedRoute

