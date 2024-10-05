import type { Editor } from "@tiptap/react";
import { useState } from "react";

export interface TextColorProps {
  editor: Editor | null
}

export default function TextColor(props: TextColorProps) {
  const [text_color, setTextColor] = useState("bg-blue-500")

  return (
    <div className="hover:border hover:rounded-full p-1 cursor-pointer">
        <input 
          type="color"
          onChange={event => {
            setTextColor(event.target.value)
            props.editor?.chain().focus().setColor(event.target.value).run()
          }}
          value={props.editor?.getAttributes('textStyle').color}
          data-testid="setColor"
          className="appearance-none opacity-0 absolute cursor-pointer w-4 h-4" />
        <div className="w-4 h-4 rounded-full border border-zinc-800" style={{background: `${text_color}`}}></div>
      </div>
  )
}