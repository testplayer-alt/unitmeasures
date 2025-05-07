import React from 'react';

interface ButtonProps {
    onClick: () => void;
    text: string; // text プロパティを string 型として定義
    className?: string;
}

export default function Buttons({ onClick, text, className }: ButtonProps) {
    return (
        <>
            <button
                className={`${className} bg-[#fefefe] text-[#000] col-span-1 items-center justify-center m-auto shadow-[3px_4px_2px_1px_rgba(200,200,200,0.6)] rounded-[7px] border-2 hover:translate-x-[5px] hover:translate-y-[5px] hover:transition-[0.2s] hover:shadow-none cursor-pointer`}
                onClick={onClick}
            >
                {text}
            </button>
        </>
    );
}