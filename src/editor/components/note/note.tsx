import { TbNotebook } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

interface NoteProps {
  title: string
  id: string
  content: string
}

export default function Note(props: NoteProps) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/editor', {state: {id: props.id, content: props.content}})
  }

  return (
    <div onClick={handleClick} className="border-2 hover:border-sky-700 hover:text-sky-700  rounded-lg w-52 h-16 justify-center items-center flex gap-4 p-2 cursor-pointer">
      <TbNotebook className="w-8 h-8" />
      <p className="font-bold text-md">{props.title}</p>
    </div>
  )
}
