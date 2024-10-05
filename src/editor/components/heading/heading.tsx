import type { Editor } from "@tiptap/react";

export interface HeadingProps{
  editor: Editor | null
}



export default function Heading(props: HeadingProps) {
  function run(level: number){
      switch(level) {
        case 1:
          props.editor?.chain().focus().toggleHeading({level: 1}).run();
          break;
        case 2:
          props.editor?.chain().focus().toggleHeading({level: 2}).run();
          break;
        case 3:
          props.editor?.chain().focus().toggleHeading({level: 3}).run();
          break;
        case 4:
          props.editor?.chain().focus().toggleHeading({level: 4}).run();
          break;
        case 5:
          props.editor?.chain().focus().toggleHeading({level: 5}).run();
          break;
        case 6:
          props.editor?.chain().focus().toggleHeading({level: 6}).run();
          break;
        default:
          console.log("option don't exists.");
          break;
      }  
  }

  const headings = [...Array(5).keys()].map(i => i + 1);
  const headingsButtons = headings.map(heading => {
    return <button className="hover:border rounded p-1" onClick={() => run(heading)}>
      H{heading}
    </button>
    })
  return <div className="flex gap-2">{headingsButtons}</div>
}
