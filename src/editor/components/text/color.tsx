import type { Editor } from "@tiptap/react";
import { useState } from "react";

export interface TextColorProps {
  editor: Editor | null
}

export default function TextColor(props: TextColorProps) {
  const [text_color, setTextColor] = useState("bg-blue-500")

  return (
    <div title="set text color" className="hover:border transition-all hover:rounded-full px-1 cursor-pointer flex items-center gap-3">
        <input 
          type="color"
          onChange={event => {
            setTextColor(event.target.value)
            props.editor?.chain().focus().setColor(event.target.value).run()
          }}
          value={props.editor?.getAttributes('textStyle').color}
          data-testid="setColor"
          className="appearance-none opacity-0 absolute cursor-pointer w-14 h-14" />
        <div className="w-4 h-4 rounded-full border border-zinc-800" style={{background: `${text_color}`}}></div>
        <span className="font-Qwitcher text-2xl" style={{color: `${text_color}`}}>A</span>
      </div>
  )
}