import Image from "next/image";

export default function UserProfile({ user }) {
    if (!user) {
        return <p>ログインしていません。</p>;
    }

    return (
        <div className=" bg-[#373737] border-2 rounded-xl py-4 px-10 w-fit">
            <p className=" font-bold text-center">ログインアカウント</p>
            {user.photoURL ? (
                <Image
                    src={user.photoURL}
                    alt="ユーザーアイコン"
                    width={70}
                    height={70}
                    priority
                    className=" rounded-[999px] m-auto py-1"
                />
            ) : (
                <p>画像なし</p>
            )}
            <p className=" text-center">★{user.displayName || "不明"}★</p>
            <p className=" text-center">★{user.email || "不明"}★</p>
        </div>
    );
}
