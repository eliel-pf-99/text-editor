import { useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/auth_provider"
import { login } from "../../api/api";
import { useState } from "react";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("hidden");
  

  const {setToken, setUser} = useAuth();
  const navigate = useNavigate();


  const handleLogin = async (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setLoading('block')
    
    if(email == '' && password == ''){
      alert("Email or password can't be empty.")
      setLoading('hidden')
      return
    }
    
    const res = await login({email, password})
    if(res.isAuth) {
      setToken(res.token)
      setUser(res.user)
      navigate("/");
    }
    else{
      alert("Something Wrong!")
      setLoading('hidden')
    }
  };

  return (
    <div className="flex justify-center py-5 flex-col items-center font-inter gap-5">
      <h1 className="text-5xl mb-5 text-sky-700 font-bold">Welcome to your Text Editor</h1>
      <form className="bg-white text-center py-4 w-1/4  rounded-md shadow-2xl border">
          <h2 className="text-3xl mb-5 font-inter text-sky-700 font-bold">Login</h2>
          <div className="flex flex-col text-left gap-2 p-4 mb-5">
            <label className="text-md">E-mail</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} className="outline-none border border-sky-700 shadow-sm p-2"/>
          </div>

          <div className="flex flex-col text-left gap-2 p-4 mb-5">
            <label className="text-md">Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} className="outline-none border border-sky-700 shadow-sm p-2"/>
            <a onClick={() => navigate("/signup")} className="text-sm cursor-pointer text-sky-700">Create an account</a>
          </div>

          <button onClick={handleLogin}  className={"border transition-all py-2 px-2 shadow-sm  text-md    rounded-full" + (loading == 'hidden' ? " hover:shadow-xl hover:text-xl hover:bg-sky-700 hover:text-white" : '')}>
            <div className={"px-4 flex items-center gap-4 text-sky-700 "+ (loading == 'hidden' ? 'hover:text-white' : '')}>
              {loading == 'hidden' ? "Let's Go!" : ''}
              <svg className={"animate-spin -ml-1 mr-3 h-5 w-5 " + loading} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {loading != 'hidden' ? "Loading..." : ''}
            </div>
          </button>
      </form>
    </div>
  )
}
