export default function Signup() {
  return (
    <div className="w-screen h-screen py-5 relative flex justify-center flex-col items-center font-inter gap-5">
      <button className="border transition-all py-2 px-4 shadow-sm hover:shadow-xl text-md  rounded-full absolute right-4 top-4">Login</button>
      <h1 className="text-5xl mb-5 text-sky-700 font-bold">Welcome to your Text Editor</h1>
      <form className="bg-white text-center py-4 w-1/4 rounded-md shadow-2xl border">
          <h2 className="text-3xl mb-5 font-inter text-sky-700 font-bold">Sign Up</h2>

          <div className="flex flex-col text-left gap-2 p-4 mb-3">
            <label className="text-md">Name</label>
            <input type="text" className="outline-none border border-sky-700 shadow-sm p-2"/>
          </div>

          <div className="flex flex-col text-left gap-2 p-4 mb-3">
            <label className="text-md">E-mail</label>
            <input type="email" className="outline-none border border-sky-700 shadow-sm p-2"/>
          </div>

          <div className="flex flex-col text-left gap-2 p-4 mb-3">
            <label className="text-md">Password</label>
            <input type="password" className="outline-none border border-sky-700 shadow-sm p-2"/>
          </div>

          <button type="submit" className="border transition-all py-2 px-4 shadow-sm hover:shadow-xl text-md hover:text-xl hover:bg-sky-700 hover:text-white rounded-full">Let's Go!</button>
      </form>
    </div>
  )
}
