import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { auth, provider } from "@/config/firebaseConfig";
import { User, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

// 型の定義
interface AuthContextType {
    user: User | null;
    loading: boolean;
    loginWithGoogle: () => Promise<void>;
    logout: () => Promise<void>;
}

// Contextの初期値を `null` にしない（型エラー回避）
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

// AuthProviderコンポーネント
export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // Googleサインイン処理
    const loginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
        } catch (error: any) {
            console.error("Google認証エラー:", error);
            if (error.code === 'auth/cancelled-popup-request') {
                // ユーザーがポップアップを閉じた場合の処理
                alert("Google ログインがキャンセルされました。もう一度お試しください。");
            } else if (error.code === 'auth/popup-blocked') {
                // ポップアップブロッカーによってブロックされた場合の処理
                alert("ポップアップブロッカーが有効になっている可能性があります。一時的に無効にするか、サイトを例外に追加してください。");
            } else {
                // その他のエラー
                alert("Google ログインでエラーが発生しました。しばらくしてからもう一度お試しください。");
            }
        }
    };

    // ログアウト処理
    const logout = async () => {
        await signOut(auth);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, loginWithGoogle, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// useAuth フック
export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth は AuthProvider 内で使用する必要があります。");
    }
    return context;
}
