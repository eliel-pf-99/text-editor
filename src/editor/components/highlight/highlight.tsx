import type { Editor } from "@tiptap/react";
import { useState } from "react";
import { LiaMarkerSolid } from "react-icons/lia";

export interface HighlightProps {
  editor: Editor | null
}

export default function Highlight(props: HighlightProps) {

  const [highlight_color, setHighlightColor] = useState("bg-blue-500")

  return (
    <div title="mark text" className="hover:border hover:rounded-full p-1 cursor-pointer flex items-center gap-3">
        <input 
          type="color"
          onChange={event => {
            setHighlightColor(event.target.value)
            console.log(highlight_color)
            props.editor?.chain().focus().setHighlight({color: highlight_color}).run()
          }}
          value={props.editor?.getAttributes('textStyle').color}
          data-testid="setColor"
          className="appearance-none opacity-0 absolute cursor-pointer w-14 h-14" />
        <div className="w-4 h-4 rounded-full border border-zinc-800" style={{background: `${highlight_color}`}}></div>
        <LiaMarkerSolid style={{color: `${highlight_color}`}} className="text-xl" />
      </div>
  )
}