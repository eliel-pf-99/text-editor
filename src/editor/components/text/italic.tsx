import type { Editor } from "@tiptap/react";
import { TbItalic } from "react-icons/tb";

export interface TextItalicProps {
  editor: Editor | null
}

export default function TextItalic(props: TextItalicProps) {
  return (
    <button title="italic" className={`hover:border transition-all rounded-md p-1 ${props.editor?.isActive('italic') ? "bg-sky-700 text-white" : ""}`} onClick={() => props.editor?.chain().focus().toggleItalic().run()}>
      <TbItalic />
    </button>
  )
}