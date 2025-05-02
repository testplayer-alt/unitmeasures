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
        "月曜1限": ["空きコマ", "授業1", "授業2", "授業3"],
        "月曜2限": ["空きコマ", "授業1", "授業2", "授業3"],
        "月曜3限": ["空きコマ", "授業1", "授業2", "授業3"],
        "月曜4限": ["空きコマ", "授業1", "授業2", "授業3"],
        "月曜5限": ["空きコマ", "授業1", "授業2", "授業3"],
        "月曜6限": ["空きコマ", "授業1", "授業2", "授業3"],
        "火曜1限": ["空きコマ", "授業A", "授業B", "授業C"], // 例として異なる授業名を追加
        "火曜2限": ["空きコマ", "授業D", "授業E", "授業F"],
        "火曜3限": ["空きコマ", "授業G", "授業H", "授業I"],
        "火曜4限": ["空きコマ", "授業J", "授業K", "授業L"],
        "火曜5限": ["空きコマ", "授業M", "授業N", "授業O"],
        "火曜6限": ["空きコマ", "授業P", "授業Q", "授業R"],
        "水曜1限": ["空きコマ", "授業S", "授業T", "授業U"],
        "水曜2限": ["空きコマ", "授業V", "授業W", "授業X"],
        "水曜3限": ["空きコマ", "授業Y", "授業Z", "授業AA"],
        "水曜4限": ["空きコマ", "授業BB", "授業CC", "授業DD"],
        "水曜5限": ["空きコマ", "授業EE", "授業FF", "授業GG"],
        "水曜6限": ["空きコマ", "授業HH", "授業II", "授業JJ"],
        "木曜1限": ["空きコマ", "授業KK", "授業LL", "授業MM"],
        "木曜2限": ["空きコマ", "授業NN", "授業OO", "授業PP"],
        "木曜3限": ["空きコマ", "授業QQ", "授業RR", "授業SS"],
        "木曜4限": ["空きコマ", "授業TT", "授業UU", "授業VV"],
        "木曜5限": ["空きコマ", "授業WW", "授業XX", "授業YY"],
        "木曜6限": ["空きコマ", "授業ZZ", "授業11", "授業22"],
        "金曜1限": ["空きコマ", "授業33", "授業44", "授業55"],
        "金曜2限": ["空きコマ", "授業66", "授業77", "授業88"],
        "金曜3限": ["空きコマ", "授業99", "授業00", "授業aa"],
        "金曜4限": ["空きコマ", "授業bb", "授業cc", "授業dd"],
        "金曜5限": ["空きコマ", "授業ee", "授業ff", "授業gg"],
        "金曜6限": ["空きコマ", "授業hh", "授業ii", "授業jj"],
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
                <Button className="border-2 h-full bg-[#fff] text-[#000] hover:bg-[#ececec] cursor-pointer">{classname}</Button>
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
                                            <SelectValue placeholder={"授業選択"} /> {/* 選択された授業名を表示 */}
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