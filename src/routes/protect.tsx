import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../provider/auth_provider"

export const ProtectedRoute = () => {
  const {token} = useAuth()

  if(!token) 
    return <Navigate to="/login" />
  
  return <Outlet />
}