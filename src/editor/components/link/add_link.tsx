import { Editor } from "@tiptap/react";
import { useCallback, useState } from "react";
import { CiImageOn } from "react-icons/ci";

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

  return (
    <div className="relative flex items-center flex-col">
      <button onClick={toggle}>
        <CiImageOn />
      </button>
      <div  className={show + " my-5 bg-white shadow-lg absolute gap-2 justify-center items-center border rounded p-1"}>
        <input autoFocus value={url} onChange={(e) => setUrl(e.target.value)} className="border outline-none rounded" type="text" />
        <button className="border rounded px-1" onClick={addLink}>ok</button>
      </div>
    </div>
  )
}
