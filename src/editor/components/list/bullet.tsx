import type { Editor } from "@tiptap/react";
import { MdOutlineFormatListBulleted } from "react-icons/md";

export interface ListBulletProps {
  editor: Editor | null
}

export default function ListBullet(props: ListBulletProps) {
  return (
    <button title="bullets list" className={`hover:border transition-all rounded-md p-1 ${props.editor?.isActive('bulletList') ? "bg-sky-700 text-white" : ""}`} onClick={() => props.editor?.chain().focus().toggleBulletList().run()}>
      <MdOutlineFormatListBulleted />
    </button>
  )
}