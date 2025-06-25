"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { checkAdminAuth } from "@/redux/slice/adminSlice"
import { useEffect } from "react"
import Loading from "./Loading"

export default function CheckAdmin({ children }: { children: React.ReactNode }) {
    const dispatch = useAppDispatch();
    const { isCheckingAuth } = useAppSelector((state) => state.admin);

    useEffect(() => {
        dispatch(checkAdminAuth());
    }, [dispatch]);

    if (isCheckingAuth) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <Loading />
            </div>
        );
    }

    return <>{children}</>;
}