import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

export default function Logout() {
    const { logout } = useAuth();

    return <Button onClick={logout}>ログアウト</Button>;
}
