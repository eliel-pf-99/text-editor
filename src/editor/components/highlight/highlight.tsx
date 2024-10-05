import type { Editor } from "@tiptap/react";
import { useState } from "react";

export interface HighlightProps {
  editor: Editor | null
}

export default function Highlight(props: HighlightProps) {

  const [highlight_color, setHighlightColor] = useState("bg-blue-500")

  return (
    <div className="hover:border hover:rounded-full p-1 cursor-pointer">
        <input 
          type="color"
          onChange={event => {
            setHighlightColor(event.target.value)
            console.log(highlight_color)
            props.editor?.chain().focus().setHighlight({color: highlight_color}).run()
          }}
          value={props.editor?.getAttributes('textStyle').color}
          data-testid="setColor"
          className="appearance-none opacity-0 absolute cursor-pointer w-4 h-4" />
        <div className="w-4 h-4 rounded-full border border-zinc-800" style={{background: `${highlight_color}`}}></div>
      </div>
  )
}