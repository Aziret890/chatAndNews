import { onAuthStateChanged } from "firebase/auth";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import FireBaseInit, { db } from "../firebace/firebse";
import { collection, doc, getDoc } from "firebase/firestore";

interface IAuthContext {
  user: Record<string, string> | null;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

interface IAuthProvider {
  children: ReactNode;
}

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [user, setUser] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    onAuthStateChanged(FireBaseInit().auth, async (user) => {
      const userDoc = await getDoc(doc(db, "users", user?.uid!));
      if (user) {
        setUser({ ...user, ...userDoc.data() } as any);
      }
    });
  }, []);

  const values: IAuthContext = {
    user,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("error AuthContext");
  }
  return context;
};
