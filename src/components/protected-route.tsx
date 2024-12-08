"use client"

import SignIn from "@/app/auth/signin/page";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }: { children: any }) => {
    const router = useRouter();

    const { user: { _id, role, token } } = useAuth();

    if (role === 'admin' && token && _id !== null) {

        return children
    } else if (role === 'user' && token && _id !== null) {

        return children
    }

    return router.push('/auth/signin');

}

export default ProtectedRoute

