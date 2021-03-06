import { createContext, ReactNode, useContext, useState } from "react";
import Cookies from "js-cookie";
interface IAuthContextType {}
const authContextDefaultValues: IAuthContextType = {};

const AuthContext = createContext<any>(authContextDefaultValues);
interface IProps {
  children: ReactNode;
}
export function AuthProvider({ children }: IProps) {
  const isLoggedIn = Cookies.get("token");
  const [isMessage, setIsMessage] = useState<string>("");
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <>
      <AuthContext.Provider
        value={{ isLoggedIn, isMessage, setIsMessage, isShow, setIsShow }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}
