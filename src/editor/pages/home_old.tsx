import { useCallback, useState } from "react";
import { MdLogout } from "react-icons/md";
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri";

export default function Home() {
  const [explorer, setExplorer] = useState("-mx-56");
  const handleExplorer = useCallback(() => explorer == '-mx-56' ? setExplorer('') : setExplorer('-mx-56'), [explorer])

  return (
    <div className="relative">
      <div className="bg-sky-700 w-full sticky flex h-10 px-5  items-center justify-between">
        <div onClick={handleExplorer} className=" text-white cursor-pointer">
          {explorer == '-mx-56' ? <RiArrowRightDoubleLine className="w-6 h-6" /> :<RiArrowLeftDoubleLine className="w-6 h-6" /> }
        </div>
        <div className="flex gap-5 items-center">
          <p className="text-white text-xl">Diogo Fernandes</p>
          <MdLogout className="w-6 h-6 text-white cursor-pointer" />
        </div>
      </div>
      <div className={explorer + " bg-zinc-500 transition-all flex absolute h-[calc(100vh-2.5rem)] w-56"}>
      </div>
    </div>
  )
}
