import { BsPlusLg } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { TbNotebook } from "react-icons/tb";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="text-center p-5 flex items-center justify-between px-10">
          <div className="border hover:bg-sky-700 hover:text-white cursor-pointer transition-all rounded-full text-md p-2 flex gap-2 items-center">
            <BsPlusLg className="w-5 h-5"/>
            New note
          </div>
          <h1 className="font-bold text-2xl">Hello, Felip!</h1>
          <div className="border hover:bg-red-700 hover:text-white cursor-pointer transition-all rounded-full text-md p-2 flex gap-2 items-center">
            Logout
            <MdLogout className='w-5 h-5' />
          </div>
      </div>
      <div className="px-20 py-5 flex flex-wrap gap-5">
          <div className="border-2 hover:border-sky-700 hover:text-sky-700  rounded-lg w-52 h-16 justify-center items-center flex gap-4 p-2 cursor-pointer">
            <TbNotebook className="w-8 h-8" />
            <p className="font-bold text-md">Interessante...</p>
          </div>
          <div className="border-2 hover:border-sky-700 hover:text-sky-700  rounded-lg w-52 h-16 justify-center items-center flex gap-4 p-2 cursor-pointer">
            <TbNotebook className="w-8 h-8" />
            <p className="font-bold text-md">Interessante...</p>
          </div>
          <div className="border-2 hover:border-sky-700 hover:text-sky-700  rounded-lg w-52 h-16 justify-center items-center flex gap-4 p-2 cursor-pointer">
            <TbNotebook className="w-8 h-8" />
            <p className="font-bold text-md">Interessante...</p>
          </div>
          <div className="border-2 hover:border-sky-700 hover:text-sky-700  rounded-lg w-52 h-16 justify-center items-center flex gap-4 p-2 cursor-pointer">
            <TbNotebook className="w-8 h-8" />
            <p className="font-bold text-md">Interessante...</p>
          </div>
          <div className="border-2 hover:border-sky-700 hover:text-sky-700  rounded-lg w-52 h-16 justify-center items-center flex gap-4 p-2 cursor-pointer">
            <TbNotebook className="w-8 h-8" />
            <p className="font-bold text-md">Interessante...</p>
          </div>
          <div className="border-2 hover:border-sky-700 hover:text-sky-700  rounded-lg w-52 h-16 justify-center items-center flex gap-4 p-2 cursor-pointer">
            <TbNotebook className="w-8 h-8" />
            <p className="font-bold text-md">Interessante...</p>
          </div>
      </div>
    </div>
  )
}
