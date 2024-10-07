import type { Editor } from "@tiptap/react";
import { MdOutlineFormatListNumbered } from "react-icons/md";

export interface ListNumberProps {
  editor: Editor | null
}

export default function ListNumber(props: ListNumberProps) {
  return (
    <button title="number list" className={`hover:border rounded-md p-1 ${props.editor?.isActive('orderedList') ? "bg-sky-700 text-white" : ""}`} onClick={() => props.editor?.chain().focus().toggleOrderedList().run()}>
      <MdOutlineFormatListNumbered />
    </button>
  )
}