import {useEditor, EditorContent} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { initialContent } from './intialContent'
import Toolbar from './components/toolbar'
import Color from '@tiptap/extension-color'
import Text from '@tiptap/extension-text'
import TextAlign from '@tiptap/extension-text-align'
import Heading from '@tiptap/extension-heading'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import TextStyle from '@tiptap/extension-text-style'
import Highlight from '@tiptap/extension-highlight'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'

export default function EditorApp() {
  const editor = useEditor({
    extensions: [StarterKit, Color, Text, TextStyle, BulletList, ListItem, OrderedList, 
      Link.configure({
        openOnClick: true,
        autolink: true,
        protocols: ['https', 'fmt', 'tel', 'mailto']
      }),
      Highlight.configure({
        multicolor: true
      }),
      Image.configure({
        inline: true,
        allowBase64: true,
        HTMLAttributes: {
          class: 'w-4 h-4 inline'
        }
      }),
    Heading.configure({
      levels: [1, 2, 3, 4, 5, 6]
    }), 
    TextAlign.configure({
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
