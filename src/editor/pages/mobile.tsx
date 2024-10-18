import { MdDoNotDisturbAlt } from "react-icons/md";

export default function Mobile() {
  return (
    <div className="bg-zinc-700 h-screen text-white font-inter flex flex-col items-center justify-center">
      <MdDoNotDisturbAlt className="text-red-700 text-9xl mb-5" />
      <h2 className="text-4xl text-center mb-5">App not avaliable for mobile</h2>
      <h3 className="text-2xl">Use a desktop</h3>
    </div>
  )
}
