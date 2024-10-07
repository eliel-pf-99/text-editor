import type { Editor } from "@tiptap/react";
import { LiaStrikethroughSolid } from "react-icons/lia";

export interface TextStrikeProps {
  editor: Editor | null
}

export default function TextStrike(props: TextStrikeProps) {
  return (
    <button title='strike' className={`hover:border rounded-md p-1 ${props.editor?.isActive('strike') ? "bg-sky-700 text-white" : ""}`} onClick={() => props.editor?.chain().focus().toggleStrike().run()}>
      <LiaStrikethroughSolid />
    </button>
  )
}