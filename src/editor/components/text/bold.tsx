import type { Editor } from "@tiptap/react";
import { TbBold } from "react-icons/tb";

export interface TextBoldProps {
  editor: Editor | null
}

export default function TextBold(props: TextBoldProps) {
  return (
    <button title="bold" className={`hover:border rounded-md p-1 ${props.editor?.isActive('bold') ? "bg-sky-700 text-white" : ""}`} onClick={() => props.editor?.chain().focus().toggleBold().run()}>
      <TbBold />
    </button>
  )
}