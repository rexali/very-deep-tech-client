"use client"

import SignIn from "@/app/auth/signin/page";
import { useAuth } from "@/hooks/use-auth";
import { goToSavedLinkpath } from "@/utils/goToSavedLinkPath";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }: { children: any }) => {
    const router = useRouter()

    const { user: { _id, role, token } } = useAuth();

    if (typeof window !== 'undefined') {
        if (window.sessionStorage.getItem('next')) {
            router.replace(goToSavedLinkpath() as string);
            window.sessionStorage.clear();
        } else {

            if (role === 'admin' && token && _id !== null) {

                return children;
            } else if (role === 'user' && token && _id !== null) {

                return children;
            }

            return <SignIn />;
        }
    }

}

export default ProtectedRoute

