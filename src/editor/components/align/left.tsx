import type { Editor } from "@tiptap/react";
import { RxTextAlignLeft } from "react-icons/rx";

export interface AlignLeftProps {
  editor: Editor | null
}

export default function AlignLeft(props: AlignLeftProps) {
  return (
    <button title='align in the left' className={`hover:border rounded-md p-1 ${props.editor?.isActive({textAlign: 'left'}) ? "bg-sky-700 text-white" : ""}`} onClick={() => props.editor?.chain().focus().setTextAlign('left').run()}>
        <RxTextAlignLeft />
    </button>
  )
}