import { useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/auth_provider"
import { login } from "../../api/api";
import { useState } from "react";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {setToken, setUser} = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    
    if(email == '' && password == ''){
      alert("Email or password incorrect!")
      return
    }
    
    const res = await login({email, password});
    if(res.isAuth) {
      setToken(res.token)
      setUser(res.user)
      navigate("/");
    }
    else{
      alert("Something Wrong!")
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center flex-col items-center font-inter gap-5">
      <h1 className="text-5xl mb-5 text-sky-700 font-bold">Welcome to your Text Editor</h1>
      <form className="bg-white text-center py-4 w-1/4 h-4/6 rounded-md shadow-2xl border">
          <h2 className="text-3xl mb-5 font-inter text-sky-700 font-bold">Login</h2>
          <div className="flex flex-col text-left gap-2 p-4 mb-5">
            <label className="text-md">E-mail</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} className="outline-none border border-sky-700 shadow-sm p-2"/>
          </div>

          <div className="flex flex-col text-left gap-2 p-4 mb-5">
            <label className="text-md">Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} className="outline-none border border-sky-700 shadow-sm p-2"/>
            <a href="#signup" className="text-sm  text-sky-700">Create an account</a>
          </div>

          <button onClick={handleLogin} className="border transition-all py-2 px-4 shadow-sm hover:shadow-xl text-md hover:text-xl hover:bg-sky-700 hover:text-white rounded-full">Let's Go!</button>
      </form>
    </div>
  )
}
