'use client';
import Image from "next/image";
import Link from "next/link";

type Props = {
    className?: string;
    href: string;
    src: string;
    title?: string;
    content?: string;
    unclick?: boolean;
};

const Contents = ({ className, href, src, title, content, unclick }: Props) => {
    return (
        <>
            {unclick ? (
                <div className={`${className} cont mb-[1rem] border-2 border-[#a9a9a9] rounded-[7px] w-[75%] m-auto h-[25rem] bg-[#eeeeee]`}>
                    <div className=" w-[90%] h-[45%] m-[5%] border-2 grid grid-cols-1 row-span-1 rounded-[4px]">
                        <Image
                            src={"/images/tyuusi.png"}
                            alt=""
                            width={200}
                            height={100}
                            className=" m-auto"
                        ></Image>
                    </div>
                    <p className="p-[1rem]" style={{ whiteSpace: 'pre-wrap' }}>現在製作中です</p>
                </div>
            ) : (
                <Link rel="stylesheet" href={href} >
                    <div className={`${className} cont mb-[1rem] border-2 border-[#a9a9a9] rounded-[7px] w-[75%] m-auto h-[25rem] bg-[#fff] shadow-[3px_4px_2px_1px_rgba(200,200,200,0.6)] hover:translate-x-[5px] hover:translate-y-[5px] hover:transition-[0.2s] hover:shadow-none cursor-pointer"}`}>
                        <div className=" w-[90%] p-[1rem] h-[45%] m-[5%] border-2 grid grid-cols-1 row-span-1 rounded-[4px]">
                            <Image
                                src={src}
                                alt=""
                                width={300}
                                height={100}
                                className=" m-auto"
                            ></Image>
                        </div>
                        <p className="p-[1rem]" style={{ whiteSpace: 'pre-wrap' }}>
                            <span className=" font-bold">{title}</span>
                            {content}
                        </p>
                    </div>
                </Link>
            )}
        </>
    );
};

export default Contents;