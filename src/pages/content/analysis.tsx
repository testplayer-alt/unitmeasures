'use cliant'
import { useAuth } from "@/context/AuthContext";
import $ from 'jquery';
import Image from "next/image";
import { useEffect, useState } from "react";
import Contents from "../components/contents";
import Header from "../components/header"
import Class from "../components/class";
import * as React from "react"
import { Minus, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import Buttons from "../components/button_ui";

export default function ProtectedPage() {
    const { user, loading } = useAuth();
    const [schedule, setSchedule] = useState(Array(30).fill("")); // 時間割の状態を保持する配列

    const handleSubjectChange = (subject: string, tag: number) => {
        const newSchedule = [...schedule];

        if (subject !== "空きコマ") {
            newSchedule[tag] = subject;
        } else {
            newSchedule[tag] = "";
        }

        if (subject.includes("プログラミング")) {
            console.log("プログラミング");
            if (tag + 1 < newSchedule.length) {
                newSchedule[tag + 1] = subject;
            }
        } else if (subject.includes("イノベーション特講")) {
            console.log("イノベーション");
            if (tag + 1 < newSchedule.length) {
                newSchedule[tag + 1] = subject;
            }
        }

        setSchedule(newSchedule);
        console.log(`Tag ${tag} の授業が ${subject} に変更されました`);
    };


    const analysis = () => {
        console.log(schedule);
    }

    if (loading) return <p>Loding...</p>;

    return (
        <div>
            <Header title={"英語"} />
            <div className="">
                <div className="h-[20vh]"></div>
                <div className=" whatunit content w-[80%] m-auto bg-[#ffffff] rounded-[5px] border-2">
                    <h1 className=" text-center font-bold text-[3rem] border-b-2 py-[1rem]">
                        講義分析・対策
                    </h1>
                    <div className="m-auto">
                        <p className=" p-[3rem]">
                            あなたの時間割を入力すると、その授業ごとの成績評価基準、必要な提出物など、今あなたに必要なことを分析し表示します。
                        </p>
                    </div>
                </div>

                <div className=" bg-[#fff] border-2 w-[80%] m-auto">
                    <h1 className=" text-[2rem] font-bold text-center">時間割</h1>
                    <div className="grid grid-cols-6 grid-rows-1 text-center">
                        <section></section>
                        <section className="border-2 bg-[#eee]">月</section>
                        <section className="border-2 bg-[#eee]">火</section>
                        <section className="border-2 bg-[#eee]">水</section>
                        <section className="border-2 bg-[#eee]">木</section>
                        <section className="border-2 bg-[#eee]">金</section>
                    </div>
                    <div className="grid grid-cols-6 grid-rows-6 text-center">
                        <div className="border-2 h-[5rem] bg-[#eee] grid">
                            <p className=" m-auto">1限</p>
                        </div>
                        <Class classname={schedule[0] || ""} tag={0} onSubjectChange={handleSubjectChange} />
                        <Class classname={schedule[6] || ""} tag={6} onSubjectChange={handleSubjectChange} />
                        <Class classname={schedule[12] || ""} tag={12} onSubjectChange={handleSubjectChange} />
                        <Class classname={schedule[18] || ""} tag={18} onSubjectChange={handleSubjectChange} />
                        <Class classname={schedule[24] || ""} tag={24} onSubjectChange={handleSubjectChange} />
                        <div className="border-2 h-[5rem] bg-[#eee] grid">
                            <p className=" m-auto">2限</p>
                        </div>
                        <Class classname={schedule[1] || ""} tag={1} onSubjectChange={handleSubjectChange} />
                        <Class classname={schedule[7] || ""} tag={7} onSubjectChange={handleSubjectChange} />
                        <Class classname={schedule[13] || ""} tag={13} onSubjectChange={handleSubjectChange} />
                        <Class classname={schedule[19] || ""} tag={19} onSubjectChange={handleSubjectChange} />
                        <Class classname={schedule[25] || ""} tag={25} onSubjectChange={handleSubjectChange} />
                        <div className="border-2 h-[5rem] bg-[#eee] grid">
                            <p className=" m-auto">3限</p>
                        </div>
                        <Class classname={schedule[2] || ""} tag={2} onSubjectChange={handleSubjectChange} />
                        <Class classname={schedule[8] || ""} tag={8} onSubjectChange={handleSubjectChange} />
                        <Class classname={schedule[14] || ""} tag={14} onSubjectChange={handleSubjectChange} />
                        <Class classname={schedule[20] || ""} tag={20} onSubjectChange={handleSubjectChange} />
                        <Class classname={schedule[26] || ""} tag={26} onSubjectChange={handleSubjectChange} />
                        <div className="border-2 h-[5rem] bg-[#eee] grid">
                            <p className=" m-auto">4限</p>
                        </div>
                        <Class classname={schedule[3] || ""} tag={3} onSubjectChange={handleSubjectChange} />
                        <Class classname={schedule[9] || ""} tag={9} onSubjectChange={handleSubjectChange} />
                        <Class classname={schedule[15] || ""} tag={15} onSubjectChange={handleSubjectChange} />
                        <Class classname={schedule[21] || ""} tag={21} onSubjectChange={handleSubjectChange} />
                        <Class classname={schedule[27] || ""} tag={27} onSubjectChange={handleSubjectChange} />
                        <div className="border-2 h-[5rem] bg-[#eee] grid">
                            <p className=" m-auto">5限</p>
                        </div>
                        <Class classname={schedule[4] || ""} tag={4} onSubjectChange={handleSubjectChange} />
                        <Class classname={schedule[10] || ""} tag={10} onSubjectChange={handleSubjectChange} />
                        <Class classname={schedule[16] || ""} tag={16} onSubjectChange={handleSubjectChange} />
                        <Class classname={schedule[22] || ""} tag={22} onSubjectChange={handleSubjectChange} />
                        <Class classname={schedule[28] || ""} tag={28} onSubjectChange={handleSubjectChange} />
                        <div className="border-2 h-[5rem] bg-[#eee] grid">
                            <p className=" m-auto">6限</p>
                        </div>
                        <Class classname={schedule[5] || ""} tag={5} onSubjectChange={handleSubjectChange} />
                        <Class classname={schedule[11] || ""} tag={11} onSubjectChange={handleSubjectChange} />
                        <Class classname={schedule[17] || ""} tag={17} onSubjectChange={handleSubjectChange} />
                        <Class classname={schedule[23] || ""} tag={23} onSubjectChange={handleSubjectChange} />
                        <Class classname={schedule[29] || ""} tag={29} onSubjectChange={handleSubjectChange} />
                    </div>
                </div>
                <div className="h-[30vh] text-center">
                    <Buttons className=" w-[10rem] h-[3rem] mt-[2px]" text="分析" onClick={analysis}></Buttons>
                </div>
                {/*<a className=" m-auto" href="/anku/001.apkg" download>aaaaa</a>*/}
            </div>
        </div >
    );
}