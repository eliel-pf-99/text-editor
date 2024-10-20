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
  const [loading, setLoading] = useState('hidden')

   
  
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading('block') 
    await signup({name, email, password}).then(async () => {
      const res = await login({email, password})
        if(res.isAuth) {
          setToken(res.token)
          setUser(res.user)
          navigate("/");
        }
        else{
          alert("Something wrong!")
          setLoading('hidden')
        }
    }).catch(err => {
      console.log(err)
      alert("Something wrong!")
      setLoading('hidden')
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

          <button onClick={handleSubmit} disabled={loading == 'block'} className={"border transition-all py-2 px-2 shadow-sm  text-md    rounded-full" + (loading == 'hidden' ? " hover:shadow-xl hover:text-xl hover:bg-sky-700 hover:text-white" : '')}>
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
