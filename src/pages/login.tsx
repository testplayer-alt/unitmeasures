import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Login() {
    const { user, loginWithGoogle } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push("/");
        }
    }, [user, router]);

    return (
        <>
            {user ? (
                <div></div>
            ) : (
                <div className=" grid grid-cols-8 grid-rows-10 h-[100vh]">
                    <section className=" col-span-8 row-span-2 h-[8vw]"></section>
                    <section className=" col-span-2 h-[8vw]"></section>
                    <div className="bg-[#ffff] w-full h-full m-auto col-span-4 row-span-6 rounded-3xl grid grid-cols-4 grid-rows-10">
                        <p className=" text-[#252525] font-bold text-6xl text-center col-span-4 row-span-4 place-content-center">ログイン</p>
                        <section className=" col-span-4 row-span-1" />
                        <section className=" col-span-1" />
                        <Button className=" h-full text-center col-span-2 row-span-2 place-content-center content-center" onClick={loginWithGoogle}>Googleでサインイン</Button>
                    </div>
                </div>
            )}
        </>
    );
}
