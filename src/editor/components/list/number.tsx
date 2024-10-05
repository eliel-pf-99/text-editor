import type { Editor } from "@tiptap/react";
import { AiOutlineOrderedList } from "react-icons/ai";

export interface ListNumberProps {
  editor: Editor | null
}

export default function ListNumber(props: ListNumberProps) {
  return (
    <button className={`hover:border rounded-md p-1 ${props.editor?.isActive('orderedList') ? "bg-black text-white" : ""}`} onClick={() => props.editor?.chain().focus().toggleOrderedList().run()}>
      <AiOutlineOrderedList />
    </button>
  )
}