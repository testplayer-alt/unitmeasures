import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { auth, provider, db } from "@/config/firebaseConfig"; // db を firebaseConfig で export しておく
import { User, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

// 型の定義
interface AuthContextType {
    user: User | null;
    loading: boolean;
    loginWithGoogle: () => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // Firestoreにユーザー情報を保存
    const saveUserToFirestore = async (user: User) => {
        const userRef = doc(db, "users", user.uid); // users コレクションに uid をドキュメントIDとして保存
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
            await setDoc(userRef, {
                uid: user.uid,
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                schedule: Array(30).fill(""),
                createdAt: serverTimestamp(),
            });
        }
    };


    // Googleサインイン処理
    const loginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
            await saveUserToFirestore(result.user); // Firestore に保存！
        } catch (error) {
            console.error("Google認証エラー:", error);
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

export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth は AuthProvider 内で使用する必要があります。");
    }
    return context;
}
