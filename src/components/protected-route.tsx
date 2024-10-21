"use client"

import SignIn from "@/app/auth/signin/page";
import { useAuth } from "@/hooks/use-auth";

const ProtectedRoute = ({ children }: { children: any }) => {
    const { user: { _id } } = useAuth();
    // return _id == null ? children : <SignIn />;
    return _id !== null ? children : <SignIn />;
}

export default ProtectedRoute

