import { useCallback, useState } from "react"
import { login, signup } from "../../api/api"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../provider/auth_provider"

export default function Signup() {
  const navigate = useNavigate()
  const {setToken, setUser} = useAuth()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    await signup({name, email, password}).then(async () => {
      const res = await login({email, password})
        if(res.isAuth) {
          setToken(res.token)
          setUser(res.user)
          navigate("/");
        }
        else{
          alert("Something wrong!")
        }
    }).catch(err => {
      console.log(err)
      alert("Something wrong!")
    })
        
    
  }, [email, name, navigate, password, setToken, setUser])

  return (
    <div className="py-5 relative flex justify-center flex-col items-center font-inter gap-5">
      <button onClick={() =>  navigate("/login")} className="border transition-all py-2 px-4 shadow-sm hover:shadow-xl text-md  rounded-full absolute right-4 top-4">Login</button>
      <h1 className="text-5xl mb-5 text-sky-700 font-bold">Welcome to your Text Editor</h1>
      <form className="bg-white text-center py-4 w-1/4 rounded-md shadow-2xl border" onSubmit={handleSubmit}>
          <h2 className="text-3xl mb-5 font-inter text-sky-700 font-bold">Sign Up</h2>

          <div className="flex flex-col text-left gap-2 p-4 mb-3">
            <label className="text-md">Name</label>
            <input type="text" onChange={e => setName(e.target.value)} className="outline-none border border-sky-700 shadow-sm p-2"/>
          </div>

          <div className="flex flex-col text-left gap-2 p-4 mb-3">
            <label className="text-md">E-mail</label>
            <input type="email" onChange={e => setEmail(e.target.value)} className="outline-none border border-sky-700 shadow-sm p-2"/>
          </div>

          <div className="flex flex-col text-left gap-2 p-4 mb-3">
            <label className="text-md">Password</label>
            <input type="password" onChange={e => setPassword(e.target.value)} className="outline-none border border-sky-700 shadow-sm p-2"/>
          </div>

          <button type="submit" className="border transition-all py-2 px-4 shadow-sm hover:shadow-xl text-md hover:text-xl hover:bg-sky-700 hover:text-white rounded-full">Let's Go!</button>
      </form>
    </div>
  )
}
