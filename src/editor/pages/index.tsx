import { useNavigate } from "react-router-dom"


export default function Index() {
  const navigate = useNavigate();


  return (
    <div className="relative min-h-screen text-sky-700 flex justify-center flex-col items-center">
      <h1 className="text-8xl font-inter text-center tracking-wider p-8 mb-3">Welcome to <br /> Text Editor</h1>
      <div className="flex gap-10">
        <button onClick={() => navigate("/login")} className="border shadow-xl p-2 w-28 h-12 rounded-full hover:bg-sky-700 hover:text-white">Login</button>
        <button onClick={() => navigate("/signup")} className="border shadow-xl p-2 w-28 h-12 rounded-full hover:bg-sky-700 hover:text-white">Sign Up</button>
      </div>
    </div>
  )
}
