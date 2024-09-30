import {useEditor, EditorContent} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { initialContent } from './intialContent'

export default function EditorApp() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'outline-none'
      }
    }
  })
  

  
  return <EditorContent className=" px-6 py-8 text-left md:py-20 md:px-48 font-inter prose" editor={editor} />
    
  
}
