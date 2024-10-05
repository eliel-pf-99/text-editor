import type { Editor } from "@tiptap/react";
import { RxTextAlignJustify } from "react-icons/rx";

export interface AlignJustifyProps {
  editor: Editor | null
}

export default function AlignJustify(props: AlignJustifyProps) {
  return (
    <button className={`hover:border rounded-md p-1 ${props.editor?.isActive({textAlign: 'justify'}) ? "bg-black text-white" : ""}`} onClick={() => props.editor?.chain().focus().setTextAlign('justify').run()}>
        <RxTextAlignJustify />
    </button>
  )
}