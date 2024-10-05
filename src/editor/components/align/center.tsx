import type { Editor } from "@tiptap/react";
import { RxTextAlignCenter } from "react-icons/rx";

export interface AlignCenterProps {
  editor: Editor | null
}

export default function AlignCenter(props: AlignCenterProps) {
  return (
    <button className={`hover:border rounded-md p-1 ${props.editor?.isActive({textAlign: 'center'}) ? "bg-black text-white" : ""}`} onClick={() => props.editor?.chain().focus().setTextAlign('center').run()}>
        <RxTextAlignCenter />
    </button>
  )
}
