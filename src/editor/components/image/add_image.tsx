import { Editor } from "@tiptap/react";
import { useCallback, useState } from "react";
import { CiImageOn } from "react-icons/ci";

export interface AddImageProps {
  editor: Editor | null
}

export default function AddImage(props: AddImageProps) {
  const [show, setShow] = useState('hidden')
  const [url, setUrl] = useState('')
  const toggle = useCallback(() => show == 'hidden' ? setShow('flex') : setShow('hidden'), [show]);
  const addImage = useCallback(() => {
      if(url){
        props.editor?.chain().focus().setImage({src: url}).run()
        toggle()
      }
  }, [props.editor, url, toggle])

  return (
    <div onBlur={toggle} className="relative flex items-center flex-col">
      <button onClick={toggle}>
        <CiImageOn />
      </button>
      <div  className={show + " my-5 bg-white shadow-lg absolute gap-2 justify-center items-center border rounded p-1"}>
        <input autoFocus value={url} onChange={(e) => setUrl(e.target.value)} className="border outline-none rounded" type="text" />
        <button className="border rounded px-1" onClick={addImage}>ok</button>
      </div>
    </div>
  )
}
