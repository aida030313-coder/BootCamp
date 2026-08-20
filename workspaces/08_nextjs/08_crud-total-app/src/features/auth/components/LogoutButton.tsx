'use client'

import { Button } from "@/components/ui/button";
import { logoutAction } from "../actions";

export default function LogoutButton() {

    const handleLogout = () => {
        logoutAction();
    }

    return (
        <Button onClick={handleLogout} variant="ghost">로그아웃</Button>
    );
}