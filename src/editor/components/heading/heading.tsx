import type { Level } from "@tiptap/extension-heading";
import type { Editor } from "@tiptap/react";
import { useCallback, useState } from "react";

export interface HeadingProps{
  editor: Editor | null
}

export default function Heading(props: HeadingProps) {
  const [show, setShow] = useState('hidden')

  function run(level: number){
    const leven: Level = level as Level;
    props.editor?.chain().focus().toggleHeading({level: leven}).run();
  }

  const toggle = useCallback(() => show == 'hidden' ? setShow('flex') : setShow('hidden'), [show]);
  const headings = [...Array(4).keys()].map(i => i + 1);
  const headingsButtons = headings.map(heading => {
    return <button onClick={() => run(heading)} className="hover:bg-sky-700 hover:text-white p-1 m-1 w-22 rounded-sm">Heading {heading}</button>
    })
  return <div title="heading" className="relative flex items-center p-1 rounded-lg flex-col hover:border ">
    <button className="font-inter flex items-center gap-2" onClick={toggle}>
      Heading 
      <div className={"w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent " + (show == 'hidden' ? " border-t-4 border-t-black" : " border-b-4 border-b-black")}></div>
    </button>
    <div className={show + " my-8 p-1 w-28 bg-white flex-col rounded-md shadow-lg absolute gap-2  border"}>
      {headingsButtons}
      <button onClick={() => run(5)} className="hover:bg-sky-700 hover:text-white p-1 m-1 w-22 rounded-sm">Paragraph</button>
    </div>
  </div>
}
