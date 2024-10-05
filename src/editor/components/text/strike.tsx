import type { Editor } from "@tiptap/react";
import { LiaStrikethroughSolid } from "react-icons/lia";

export interface TextStrikeProps {
  editor: Editor | null
}

export default function TextStrike(props: TextStrikeProps) {
  return (
    <button className={`hover:border rounded-md p-1 ${props.editor?.isActive('strike') ? "bg-black text-white" : ""}`} onClick={() => props.editor?.chain().focus().toggleStrike().run()}>
      <LiaStrikethroughSolid />
    </button>
  )
}