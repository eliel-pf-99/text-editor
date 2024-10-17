import './App.css'
import AuthProvider from './provider/auth_provider'
import { Routes } from './routes'

function App() {

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

export default App
