import { useAuth } from "@/context/AuthContext";
import $ from 'jquery';
import Image from "next/image";
import { useEffect, useState } from "react";
import Buttons from "./components/button_ui";
import Contents from "./components/contents";

export default function ProtectedPage() {
  const { user, loading } = useAuth();
  const { logout } = useAuth();
  const { loginWithGoogle } = useAuth();
  const commentlist = ["教材作成のサポートをします", "英語覚えられてる？"];
  const [commenttext, setcommenttext] = useState("");

  useEffect(() => {
    setcommenttext(commentlist[Math.floor(Math.random() * ((commentlist.length - 1 + 1) - 0)) + 0]);
    $(document).ready(function () {
      setTimeout(() => {
        $('.comment').fadeIn(1000);
      }, 1000);
    });
  }, []);

  if (loading) return <p>Loding...</p>;

  return (
    <div>
      <div className="header fixed w-full h-[5rem] bg-[#cdfeff] grid grid-cols-5 grid-rows-1 z-50">
        <section className=" col-span-4"></section>
        {user ? <Buttons onClick={logout} text="ログアウト"></Buttons> : <Buttons onClick={loginWithGoogle} text="ログイン"></Buttons>}
      </div>
      <div className="h-[100vh] grid grid-cols-1 grid-rows-3">
        <div className=" m-auto"></div>
        <div>
          <Image
            src={"/images/title.png"}
            alt=""
            width={900}
            height={100}
            className=" m-auto"
          ></Image>
          <p className="comment text-center text-[2rem] mt-[5px] hidden">{commenttext}</p>
        </div>

      </div>
      <div className="">
        <div className=" whatunit content w-[80%] m-auto bg-[#ffffff] rounded-[5px] border-2">
          <h1 className=" text-center font-bold text-[3rem] border-b-2 py-[1rem]">
            UnitMeasuresとは？
          </h1>
          <div className="m-auto">
            <p className=" p-[3rem]">
              私たちはIU校内の有志でできた学習サポートチームです。<br />
              今後は単位取得のためのシラバスの分析と対策を個人に案内し、情報提供を行っていきたいと考えています。<br />
              現在行なっているサポート対象は<br />
              <br />
              <ul>
                <li>・<a href="#" className=" text-[#4f61ff] font-bold border-b-[1px] border-[#4f61ff] hover:text-[#8995ff] hover:border-[#8995ff]">英語コアスキル</a><br /></li>
              </ul>
              <br />
              です。<br />
              より良いサービス提供のため支援をよろしくお願いします。
            </p>
          </div>
        </div>
        <div className="whatsupport w-full">
          <h1 className=" text-center font-bold text-[3rem] mt-[3rem]">サポート教材一覧</h1>
          <div className="contentslist grid grid-cols-4 w-[90%] m-auto">
            <Contents className={""} href={"#"} src={"/images/title.png"} content={`英語コアスキル\nここでは英単語を覚えます。\n`} />
            <Contents className={""} href={"#"} src={""} unclick />
            <Contents className={""} href={"#"} src={""} unclick />
            <Contents className={""} href={"#"} src={""} unclick />
          </div>
        </div>
      </div>
    </div>
  );
}