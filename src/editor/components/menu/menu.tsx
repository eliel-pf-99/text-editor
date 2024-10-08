import { CiSaveDown2, CiSaveUp2 } from "react-icons/ci";

export default function Menu() {
  return (
    <div className={"bg-opacity-100 bg-white transition-all flex flex-row items-center fixed top-4 right-4 h-10 gap-2 border rounded-full shadow-md p-2 "}>
      <div className="hover:border rounded-full cursor-pointer p-1">
        <CiSaveUp2 className="w-5 h-5" title="save"  />
      </div>
      <div className="hover:border rounded-full cursor-pointer p-1">
        <CiSaveDown2 className="w-5 h-5" title="download"  />
      </div>
    </div>
  )
}
