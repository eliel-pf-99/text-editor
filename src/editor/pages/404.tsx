import { useNavigate } from 'react-router-dom'
import img from '../../assets/workers.png'

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="bg-zinc-700 w-screen md:items-center md:p-10 p-8 h-screen flex flex-col md:flex-row gap-16 font-inter text-white">
      <div className="flex flex-col gap-8">
        <h1 className="md:text-9xl text-8xl">Sorry...</h1>
        <p className="text-5xl">We're building this page</p>
        <button onClick={() => navigate("/")} className="uppercase rounded-full text-sky-700 text-left border-sky-700 border hover:bg-sky-700 hover:text-white w-32 h-12 p-2 ">Go to home</button>
      </div>
      <img className='w-2/4 h-2/4' src={img} />
    </div>
  )
}
