import { useAuth } from "@/context/AuthContext";
import Header from "../../components/ui/header";
import Buttons from "@/components/ui/button_ui";

export default function ProtectedPage() {
    const { loading } = useAuth();
    const { user } = useAuth();

    if (loading) return <p>Loding...</p>;

    function Onclick() {
        window.open('https://qr.paypay.ne.jp/p2p01_p3zAIQvMI6J59RPT', '_blank')
    }

    return (
        <div>
            <Header title={"英語"} />
            <div className="">
                <div className="h-[20vh]"></div>
                <div className=" whatunit content w-[80%] m-auto bg-[#ffffff] rounded-[5px] border-2">
                    <h1 className=" text-center font-bold text-[3rem] border-b-2 py-[1rem]">
                        ビジネス英語実習1a&b
                    </h1>
                    <div className="m-auto">
                        <p className=" p-[3rem]">
                            ankiを使用し、英単語暗記を手伝います。<br /><br />
                            <span className="font-bold text-[20px]">ankiとは？</span><br />
                            単語帳のソフトウェア版です。<br />
                            忘却曲線という人がどれくらい早く忘れてしまい、どのタイミングで復習すれば良いのかという研究結果を参考にして作成されています。<br />
                            これによって最大効率で学びが記憶に残るような学習を提供しています。<br />
                            我々はこのanki内の単語帳を学校の教材を基に作成し、提供していきたいと思います。
                        </p>
                    </div>
                </div>
                <div className=" w-full text-center mt-[0.5rem]">
                    {user ? <Buttons className=" w-[12rem] h-[3rem]" onClick={Onclick} text="購入はこちら" /> : ""}
                </div>
                {/*<a className=" m-auto" href="/anku/001.apkg" download>aaaaa</a>*/}
            </div>
        </div>
    );
}