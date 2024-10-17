import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios"

type autht = { 
  token: string | null;
  setToken: (newToken: string | null) => void;
  user: string | null;
  setUser: (newUser: string | null) => void;
}

export const AuthContext = createContext<autht>({token: '', setToken: () => {}, user: '', setUser: () => {}});

function AuthProvider({children} : {children: React.ReactNode}) {

const [token, setToken_] = useState(localStorage.getItem("token"))
const [user, setUser_] = useState(localStorage.getItem("user"))

const setToken = (newToken: string | null) => setToken_(newToken)
const setUser = (newUser: string | null) => setUser_(newUser)

useEffect(() => {
  if(token) {
    axios.defaults.headers.common['Authorization'] = token
  }
  else {
    delete axios.defaults.headers.common['Authorization']
    localStorage.removeItem('token')
  }
}, [token]);

  const contextValue = useMemo(() => ({token, setToken, user, setUser}), [token, user])
  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext);
}

export default AuthProvider;
