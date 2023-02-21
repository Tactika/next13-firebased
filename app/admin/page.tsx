'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { User } from "firebase/auth";

function Page() {
    const { user }: {user?: User} = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user, router])

    return (<h1>Only logged in users can view this page</h1>);
}

export default Page;