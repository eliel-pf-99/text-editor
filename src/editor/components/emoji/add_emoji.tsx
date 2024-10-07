import { Editor } from "@tiptap/react";
import EmojiPicker from "emoji-picker-react";
import { useCallback, useState} from "react";
import { MdOutlineEmojiEmotions } from "react-icons/md";


export interface AddEmojiProps {
  editor: Editor | null
}

export default function AddEmoji(props: AddEmojiProps) {
  const [show, setShow] = useState('hidden')
  const [url, setUrl] = useState('')
  const toggle = useCallback(() => show == 'hidden' ? setShow('flex') : setShow('hidden'), [show]);
  const addImage = useCallback(() => {
      if(url){
        props.editor?.chain().focus().setImage({src: url}).run()
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
    <div title="add emoji" onBlur={handleOnBlur} className="relative rounded-md hover:border p-1 flex items-center flex-col">
      <button onClick={toggle}>
        <MdOutlineEmojiEmotions className="w-5 h-5" />
      </button>
      <div  className={show + " my-5 bg-transparent absolute gap-2 justify-center items-center p-1"}>
        <EmojiPicker onEmojiClick={emoji => {
          setUrl(emoji.getImageUrl());
          addImage();
          }}/>
      </div>
    </div>
  )
}