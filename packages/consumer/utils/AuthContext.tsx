import { createContext } from "react"
import { IUser } from "../interfaces"

type ContextProps = {
  loading: boolean
  user: IUser | null
  authenticated: boolean
  setUser: any
  isOwner: boolean
}
type Callback = (user: IUser) => void
export const setAuthUser = (user: IUser, callback: Callback) => {
  if (process.env.NODE_ENV === "development") {
    localStorage.setItem(process.env.NEXT_PUBLIC_COOKIE_KEY, user.access_token)
  }
  callback(user)
}

export const AuthContext = createContext<Partial<ContextProps>>({})

type AuthProviderProps = {
  loading: boolean
  user: IUser | null
  setUser: any
  children: React.ReactNode
}

export const AuthProvider = (props: AuthProviderProps) => {
  const { loading, user, setUser, children } = props
  return (
    <AuthContext.Provider
      value={{
        loading,
        user,
        authenticated: user !== null,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
