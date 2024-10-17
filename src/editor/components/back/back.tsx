import { IoChevronBackSharp, IoHomeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Back() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/")
  }
  return (
    <div onClick={handleClick} className={"bg-opacity-100 transition-all bg-white flex cursor-pointer hover:bg-sky-700 hover:text-white hover:border-0 flex-row items-center fixed top-4 left-4 h-10 gap-2 border rounded-full shadow-md p-2 "}>
      <div className=" rounded-full p-1 flex gap-2">
        <IoChevronBackSharp className="w-5 h-5" />
        <IoHomeOutline className="w-5 h-5" />
      </div>
    </div>
  )
}
