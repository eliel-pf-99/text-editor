import type { Editor } from "@tiptap/react"
import { useState } from "react"
import { LiaStrikethroughSolid } from "react-icons/lia"
import { RxTextAlignCenter, RxTextAlignJustify, RxTextAlignLeft, RxTextAlignRight } from "react-icons/rx"
import { TbBold, TbItalic } from "react-icons/tb"

export interface ToolbarProps{
  editor: Editor | null
}

export default function Toolbar(props: ToolbarProps) {
  const [text_color, setTextColor] = useState("bg-blue-500")
  // TODO: now I got a toolbar, I need create new functions, links, heading, lists, images and icons or emojis
  return (
    <div className="w-[720px] h-[38px] gap-1 border bg-white border-black p-2 bg-opacity-100 flex flex-row items-center fixed top-4 rounded-md left-1/2 transform -translate-x-1/2">
      {/* bold */}
      <button className={`hover:border rounded-md p-1 ${props.editor?.isActive('bold') ? "bg-black text-white" : ""}`} onClick={() => props.editor?.chain().focus().toggleBold().run()}>
        <TbBold />
      </button>

      {/* italic */}
      <button className={`hover:border rounded-md p-1 ${props.editor?.isActive('italic') ? "bg-black text-white" : ""}`} onClick={() => props.editor?.chain().focus().toggleItalic().run()}>
        <TbItalic />
      </button>

      {/* strike */}
      <button className={`hover:border rounded-md p-1 ${props.editor?.isActive('strike') ? "bg-black text-white" : ""}`} onClick={() => props.editor?.chain().focus().toggleStrike().run()}>
        <LiaStrikethroughSolid />
      </button>

      {/* text color  */}
      <div className="hover:border hover:rounded-full p-1 cursor-pointer">
        <input 
          type="color"
          onChange={event => {
            setTextColor(event.target.value)
            console.log(text_color)
            props.editor?.chain().focus().setColor(event.target.value).run()
          }}
          value={props.editor?.getAttributes('textStyle').color}
          data-testid="setColor"
          className="appearance-none opacity-0 absolute cursor-pointer w-4 h-4" />
        <div className="w-4 h-4 rounded-full border border-zinc-800" style={{background: `${text_color}`}}></div>
      </div>

      <button className={`hover:border rounded-md p-1 ${props.editor?.isActive({textAlign: 'left'}) ? "bg-black text-white" : ""}`} onClick={() => props.editor?.chain().focus().setTextAlign('left').run()}>
        <RxTextAlignLeft />
      </button>

      <button className={`hover:border rounded-md p-1 ${props.editor?.isActive({textAlign: 'center'}) ? "bg-black text-white" : ""}`} onClick={() => props.editor?.chain().focus().setTextAlign('center').run()}>
        <RxTextAlignCenter />
      </button>

      <button className={`hover:border rounded-md p-1 ${props.editor?.isActive({textAlign: 'right'}) ? "bg-black text-white" : ""}`} onClick={() => props.editor?.chain().focus().setTextAlign('right').run()}>
        <RxTextAlignRight />
      </button>

      <button className={`hover:border rounded-md p-1 ${props.editor?.isActive({textAlign: 'justify'}) ? "bg-black text-white" : ""}`} onClick={() => props.editor?.chain().focus().setTextAlign('justify').run()}>
        <RxTextAlignJustify />
      </button>
    </div>
  )
}
