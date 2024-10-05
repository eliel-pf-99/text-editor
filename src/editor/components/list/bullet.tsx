import type { Editor } from "@tiptap/react";
import { RxListBullet } from "react-icons/rx";

export interface ListBulletProps {
  editor: Editor | null
}

export default function ListBullet(props: ListBulletProps) {
  return (
    <button className={`hover:border rounded-md p-1 ${props.editor?.isActive('bulletList') ? "bg-black text-white" : ""}`} onClick={() => props.editor?.chain().focus().toggleBulletList().run()}>
      <RxListBullet />
    </button>
  )
}