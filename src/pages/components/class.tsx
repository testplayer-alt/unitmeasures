'use client';
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { useState } from 'react'; // useState をインポート

type Props = {
    classname: string;
    tag: number;
    onSubjectChange: (subject: string, tag: number) => void; // 親コンポーネントからのコールバック関数
}

export default function Class({ classname, tag, onSubjectChange }: Props) {
    const classlist = {
        "月曜1限": ["空きコマ", "データベース(E)", "ビジネス英語実習1b(E)", "マーケティング基礎(D)", "イノベーション特講(康)"],
        "月曜2限": ["空きコマ", "データベース(C)", "ビジネス英語実習1b(B)", "ビジネス入門(D)", "ビジネス入門(E)", "マーケティング基礎(C)", "イノベーション特講(康)", "スタディスキル(A)"],
        "月曜3限": ["空きコマ", "イノベーションの志(E)", "ビジネス入門(A)", "マーケティング基礎(B)", "プログラミング基礎実習(D)", "スタディスキル(C)"],
        "月曜4限": ["空きコマ", "イノベーションの志(A)", "プログラミング基礎実習(D)"],
        "月曜5限": ["空きコマ", "ビジネス英語実習1a(Advanced)", "eスポーツ"],
        "月曜6限": [],
        "火曜1限": ["空きコマ", "ビジネス英語実習1a(D)", "マーケティング基礎(E)", "プログラミング基礎実習(B)"],
        "火曜2限": ["空きコマ", "データベース(D)", "ビジネス英語実習1a(C)", "英語コア・スキルズ1(D)", "マネジメント(E)", "マーケティング基礎(A)", "プログラミング基礎実習(B)"],
        "火曜3限": ["空きコマ", "データベース(B)", "ビジネス英語実習1a(A)", "デザイン入門", "マネジメント(B)", "イノベーション特講(石戸)"],
        "火曜4限": ["空きコマ", "データ構造と処理法", "ビジネス英語実習1b(Advanced)", "イノベーション特講(石戸)"],
        "火曜5限": ["空きコマ", "情報系数学応用A"],
        "火曜6限": [],
        "水曜1限": ["マネジメント(A)", "プログラミング基礎実習(C)"],
        "水曜2限": ["空きコマ", "ビジネス英語実習1a(E)", "英語コア・スキルズ1(B)", "マネジメント(D)", "プログラミング基礎実習(C)"],
        "水曜3限": ["空きコマ", "ICT入門"],
        "水曜4限": ["空きコマ", "英語コア・スキルズ(Advanced)"],
        "水曜5限": [],
        "水曜6限": [],
        "木曜1限": ["空きコマ", "マネジメント(C)"],
        "木曜2限": ["空きコマ", "データベース(A)", "ビジネス英語実習1b(A)", "英語コア・スキルズ1(E)", "ビジネス入門(B)", "ビジネス入門(C)"],
        "木曜3限": ["空きコマ", "イノベーションの志(D)", "ビジネス英語実習1b(C)", "デザイン入門"],
        "木曜4限": ["空きコマ", "データ構造と処理法"],
        "木曜5限": ["空きコマ", "コンピュータアーキテクチャ", "情報系数学応用A"],
        "木曜6限": [],
        "金曜1限": ["空きコマ", "ビジネス英語実習1a(B)", "プログラミング基礎実習(A)"],
        "金曜2限": ["空きコマ", "ビジネス英語実習1b(D)", "英語コア・スキルズ(C)", "プログラミング基礎実習(A)", "スタディスキル(E)"],
        "金曜3限": ["空きコマ", "イノベーションの志(C)", "英語コア・スキルズ1(A)", "プログラミング基礎実習(E)", "スタディスキル(B)"],
        "金曜4限": ["空きコマ", "イノベーションの志(B)", "プログラミング基礎実習(E)", "スタディスキル(D)"],
        "金曜5限": ["空きコマ", "eスポーツ"],
        "金曜6限": [],
    };

    const [selectedSubject, setSelectedSubject] = useState<string | undefined>(undefined); // 選択された授業名を保持する state
    let classtag: string = "";
    let availableSubjects: string[] = [];

    if (tag === 0) {
        availableSubjects = classlist["月曜1限"] || [];
        classtag = "月曜1限";
    } else if (tag === 1) {
        availableSubjects = classlist["月曜2限"] || [];
        classtag = "月曜2限";
    } else if (tag === 2) {
        availableSubjects = classlist["月曜3限"] || [];
        classtag = "月曜3限";
    } else if (tag === 3) {
        availableSubjects = classlist["月曜4限"] || [];
        classtag = "月曜4限";
    } else if (tag === 4) {
        availableSubjects = classlist["月曜5限"] || [];
        classtag = "月曜5限";
    } else if (tag === 5) {
        availableSubjects = classlist["月曜6限"] || [];
        classtag = "月曜6限";
    } else if (tag === 6) {
        availableSubjects = classlist["火曜1限"] || [];
        classtag = "火曜1限";
    } else if (tag === 7) {
        availableSubjects = classlist["火曜2限"] || [];
        classtag = "火曜2限";
    } else if (tag === 8) {
        availableSubjects = classlist["火曜3限"] || [];
        classtag = "火曜3限";
    } else if (tag === 9) {
        availableSubjects = classlist["火曜4限"] || [];
        classtag = "火曜4限";
    } else if (tag === 10) {
        availableSubjects = classlist["火曜5限"] || [];
        classtag = "火曜5限";
    } else if (tag === 11) {
        availableSubjects = classlist["火曜6限"] || [];
        classtag = "火曜6限";
    } else if (tag === 12) {
        availableSubjects = classlist["水曜1限"] || [];
        classtag = "水曜1限";
    } else if (tag === 13) {
        availableSubjects = classlist["水曜2限"] || [];
        classtag = "水曜2限";
    } else if (tag === 14) {
        availableSubjects = classlist["水曜3限"] || [];
        classtag = "水曜3限";
    } else if (tag === 15) {
        availableSubjects = classlist["水曜4限"] || [];
        classtag = "水曜4限";
    } else if (tag === 16) {
        availableSubjects = classlist["水曜5限"] || [];
        classtag = "水曜5限";
    } else if (tag === 17) {
        availableSubjects = classlist["水曜6限"] || [];
        classtag = "水曜6限";
    } else if (tag === 18) {
        availableSubjects = classlist["木曜1限"] || [];
        classtag = "木曜1限";
    } else if (tag === 19) {
        availableSubjects = classlist["木曜2限"] || [];
        classtag = "木曜2限";
    } else if (tag === 20) {
        availableSubjects = classlist["木曜3限"] || [];
        classtag = "木曜3限";
    } else if (tag === 21) {
        availableSubjects = classlist["木曜4限"] || [];
        classtag = "木曜4限";
    } else if (tag === 22) {
        availableSubjects = classlist["木曜5限"] || [];
        classtag = "木曜5限";
    } else if (tag === 23) {
        availableSubjects = classlist["木曜6限"] || [];
        classtag = "木曜6限";
    } else if (tag === 24) {
        availableSubjects = classlist["金曜1限"] || [];
        classtag = "金曜1限";
    } else if (tag === 25) {
        availableSubjects = classlist["金曜2限"] || [];
        classtag = "金曜2限";
    } else if (tag === 26) {
        availableSubjects = classlist["金曜3限"] || [];
        classtag = "金曜3限";
    } else if (tag === 27) {
        availableSubjects = classlist["金曜4限"] || [];
        classtag = "金曜4限";
    } else if (tag === 28) {
        availableSubjects = classlist["金曜5限"] || [];
        classtag = "金曜5限";
    } else if (tag === 29) {
        availableSubjects = classlist["金曜6限"] || [];
        classtag = "金曜6限";
    }

    const handleSubjectChange = (value: string) => {
        setSelectedSubject(value);
    };

    const handleEnterClick = () => {
        if (selectedSubject) {
            onSubjectChange(selectedSubject, tag); // 親コンポーネントに選択された授業名と tag を通知
        }
    };

    return (<>
        <Drawer>
            <DrawerTrigger asChild>
                <Button className="border-2 h-full bg-[#fff] text-[#000] hover:bg-[#ececec] cursor-pointer"><p className=" overflow-auto">{classname}</p></Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>時間割 - {classtag}</DrawerTitle>
                    </DrawerHeader>
                    <div className="p-4 mt-[1rem] mb-[2rem] pb-0">
                        <div className="flex items-center justify-center space-x-2">
                            <div className="flex-1 text-center">
                                <div className="text-3xl font-bold tracking-tighter">
                                    <Select onValueChange={handleSubjectChange}> {/* onValueChange を設定 */}
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder={classname || "授業選択"} /> {/* 選択された授業名を表示 */}
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup className="p-0 m-0">
                                                <ScrollArea className="m-0 p-0">
                                                    {availableSubjects.map((subject) => (
                                                        <SelectItem key={subject} value={subject} className="text-[1.5rem] border-2 cursor-pointer p-2 m-0 mb-[0.3rem] hover:bg-[#ececec]">
                                                            {subject}
                                                        </SelectItem>
                                                    ))}
                                                </ScrollArea>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button onClick={handleEnterClick}>決定</Button>
                        </DrawerClose>
                        <DrawerClose asChild>
                            <Button variant="outline">キャンセル</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    </>)
}