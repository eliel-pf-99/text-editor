import { Editor } from "@tiptap/react"
import TextBold from "./text/bold"
import AlignCenter from "./align/center"
import AlignJustify from "./align/justify"
import AlignLeft from "./align/left"
import AlignRight from "./align/right"
import AddEmoji from "./emoji/add_emoji"
import AddImage from "./image/add_image"
import AddLink from "./link/add_link"
import ListBullet from "./list/bullet"
import ListNumber from "./list/number"
import TextColor from "./text/color"
import TextItalic from "./text/italix"
import TextStrike from "./text/strike"
import Heading from "./heading/heading"
import Highlight from "./highlight/highlight"

export interface ToolbarProps{
  editor: Editor | null
}

export default function Toolbar(props: ToolbarProps) {
  return (
    <div className="w-[720px] h-[38px] gap-1 border bg-white border-black p-2 bg-opacity-100 flex flex-row items-center fixed top-4 rounded-md left-1/2 transform -translate-x-1/2">
      <TextBold editor={props.editor} />
      <TextItalic editor={props.editor} />
      <TextStrike editor={props.editor} />
      <TextColor editor={props.editor} />
      <AlignLeft editor={props.editor} />
      <AlignCenter editor={props.editor} />
      <AlignRight editor={props.editor} />
      <AlignJustify editor={props.editor} />
      <Heading editor={props.editor}/>
      <ListBullet editor={props.editor}/>
      <ListNumber editor={props.editor}/>
      <AddImage editor={props.editor} />
      <AddEmoji editor={props.editor} />
      <Highlight editor={props.editor}/>
      <AddLink editor={props.editor} />
    </div>
  )
}
