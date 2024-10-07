import { Editor } from "@tiptap/react";
import { useCallback, useState } from "react";
import { LuLink } from "react-icons/lu";

export interface AddLinkProps {
  editor: Editor | null
}

export default function AddLink(props: AddLinkProps) {
  const [show, setShow] = useState('hidden')
  const [url, setUrl] = useState('')
  const toggle = useCallback(() => show == 'hidden' ? setShow('flex') : setShow('hidden'), [show]);
  const addLink = useCallback(() => {
      if(url){
        props.editor?.chain().focus().extendMarkRange('link').setLink({href: url}).run()
        toggle()
      }
  }, [props.editor, url, toggle])

  const handleOnBlur = useCallback((event : React.FocusEvent<HTMLDivElement, Element>) => {
    if(event.currentTarget.contains(event.relatedTarget)){
      return;
    }
    toggle();
  }, [toggle])

  return (
    <div title="hyperlink" onBlur={handleOnBlur} className="relative flex items-center rounded-md hover:border p-1 flex-col">
      <button onClick={toggle}>
        <LuLink />
      </button>
      <div className={show + " my-7 bg-white shadow-lg absolute gap-2 justify-center items-center border rounded p-1"}>
        <input autoFocus value={url} onChange={(e) => setUrl(e.target.value)} className="border outline-none rounded" type="text" />
        <button className="border rounded px-1" onClick={addLink}>ok</button>
      </div>
    </div>
  )
}
