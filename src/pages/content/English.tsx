import { useAuth } from "@/context/AuthContext";
import Header from "../../components/ui/header";

export default function ProtectedPage() {
    const { loading } = useAuth();

    if (loading) return <p>Loding...</p>;

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
                            a
                        </p>
                    </div>
                </div>
                {/*<a className=" m-auto" href="/anku/001.apkg" download>aaaaa</a>*/}
            </div>
        </div>
    );
}