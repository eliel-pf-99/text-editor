import type { Editor } from "@tiptap/react";
import { RxTextAlignRight } from "react-icons/rx";

export interface AlignRightProps {
  editor: Editor | null
}

export default function AlignRight(props: AlignRightProps) {
  return (
    <button title='align in the right' className={`hover:border rounded-md p-1 ${props.editor?.isActive({textAlign: 'right'}) ? "bg-sky-700 text-white" : ""}`} onClick={() => props.editor?.chain().focus().setTextAlign('right').run()}>
        <RxTextAlignRight />
    </button>
  )
}
