import type { Editor } from "@tiptap/react";
import { TbItalic } from "react-icons/tb";

export interface TextItalicProps {
  editor: Editor | null
}

export default function TextItalic(props: TextItalicProps) {
  return (
    <button className={`hover:border rounded-md p-1 ${props.editor?.isActive('italic') ? "bg-black text-white" : ""}`} onClick={() => props.editor?.chain().focus().toggleItalic().run()}>
      <TbItalic />
    </button>
  )
}