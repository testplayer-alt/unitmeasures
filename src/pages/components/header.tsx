import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import Buttons from "./button_ui";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import $ from 'jquery';

type Props = {
    title: string;
}

export default function Header({ title }: Props) {
    const { user, loading } = useAuth();
    const [command, setcommand] = useState(false);
    const { logout } = useAuth();
    const { loginWithGoogle } = useAuth();

    useEffect(() => {

        const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        let inputSequence: string[] = [];

        const handleKeyDown = (event: KeyboardEvent) => {
            inputSequence.push(event.key);
            console.log(event.key);
            if (inputSequence.length > konamiCode.length) {
                inputSequence.shift(); // 入力シーケンスが長すぎる場合は最初の入力を削除
            }

            if (inputSequence.join(',') === konamiCode.join(',')) {
                console.log("成功！");
                console.log(inputSequence);
                inputSequence = [];
                try {
                    setcommand(prev => !prev);
                } catch (error) {
                    console.error(error);
                }

            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown); // コンポーネントアンマウント時にイベントリスナーを解除
        };
    }, []);

    return (
        <>
            <title>{title} - UnitMeasures</title>
            <div className="header fixed w-full h-[5rem] bg-[#defeff] grid grid-cols-5 grid-rows-1 z-50">
                <Link href={"/"} className=" col-span-1 h-[5rem] grid">
                    <Image
                        src={"/images/title.png"}
                        alt=""
                        width={900}
                        height={10}
                        className="headimg h-[3rem] w-auto m-auto"
                    ></Image>
                </Link>
                {command ?
                    <section className=" col-span-3 grid">
                        <motion.div
                            className=" m-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, rotate: 360 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            key="image-container"
                        >
                            <audio id="overSound" src="/audio/こっちみてんじゃねーよ.mp3" preload="auto"></audio>
                            <Image
                                src="/images/horis.jpg"
                                alt=""
                                width={900}
                                height={10}
                                className="HORI h-[4rem] w-auto m-auto rounded-[5px]"
                                onMouseOver={() => {
                                    const audio = document.getElementById("overSound") as HTMLAudioElement | null;
                                    if (audio) {
                                        audio.currentTime = 0;
                                        audio.play();
                                    }
                                }}
                            />
                        </motion.div>
                    </section> : <section className=" col-span-3"></section>}
                {user ? <Buttons className=" w-[80%] h-[60%]" onClick={logout} text="ログアウト"></Buttons> : <Buttons onClick={loginWithGoogle} className=" w-[80%] h-[60%]" text="ログイン"></Buttons>}
            </div>
        </>
    )
}