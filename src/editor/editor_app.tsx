import {useEditor, EditorContent} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { initialContent } from './intialContent'
import Toolbar from './components/toolbar'
import Color from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import Text from '@tiptap/extension-text'
import TextAlign from '@tiptap/extension-text-align'

export default function EditorApp() {
  const editor = useEditor({
    extensions: [StarterKit, Color, TextStyle, Text, TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'outline-none !static'
      }
    }
  })
  

  
  return <>
  <div className='relative'>
    <Toolbar editor={editor}   />
    <EditorContent className="px-6 py-8 text-left md:py-20 md:px-48 font-inter prose !absulute" editor={editor} />
  </div>
  </>
    
  
}
