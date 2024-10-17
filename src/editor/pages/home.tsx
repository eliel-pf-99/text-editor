import { BsPlusLg } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/auth_provider";
import Note from "../components/note/note";
import { useEffect, useState } from "react";
import { loadNotes } from "../../api/api";

export default function Home() {

  const [notes, setNotes] = useState<JSX.Element[]>([])
  const {setToken, user} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const f = async () => {
      const loadedNotes = await loadNotes();
      const notesElements = []
      for(const i of loadedNotes ?? []){
        const el = <Note title={i.Title} id={i.ID} content={i.Content} />
        notesElements.push(el)
      }
      setNotes(notesElements)
    }
    f()
  }, []);

  const handleNewNote = () => {
    navigate("/editor", {state: {id: null, content: null}})
  }

  const handleLogout = () => {
    setToken(null)
    navigate("/");
  };

  return (
    <div className="w-screen h-screen">
      <div className="text-center p-5 flex items-center justify-between px-10">
          <div onClick={handleNewNote} className="border hover:bg-sky-700 hover:text-white cursor-pointer transition-all rounded-full text-md p-2 flex gap-2 items-center">
            <BsPlusLg className="w-5 h-5"/>
            New note
          </div>
          <h1 className="font-bold text-2xl">Hello, {user}!</h1>
          <div onClick={handleLogout} className="border hover:bg-red-700 hover:text-white cursor-pointer transition-all rounded-full text-md p-2 flex gap-2 items-center">
            Logout
            <MdLogout className='w-5 h-5' />
          </div>
      </div>
      <div className="px-20 py-5 flex flex-wrap gap-5">
          {notes}
      </div>
    </div>
  )
}
