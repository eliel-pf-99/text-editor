import type { Editor } from "@tiptap/react";
import { RxTextAlignJustify } from "react-icons/rx";

export interface AlignJustifyProps {
  editor: Editor | null
}

export default function AlignJustify(props: AlignJustifyProps) {
  return (
    <button title="justify text" className={`hover:border rounded-md p-1 ${props.editor?.isActive({textAlign: 'justify'}) ? "bg-sky-700 text-white" : ""}`} onClick={() => props.editor?.chain().focus().setTextAlign('justify').run()}>
        <RxTextAlignJustify />
    </button>
  )
}