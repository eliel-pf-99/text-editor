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
import { useState } from 'react'
import Menu from './components/menu/menu'
import Back from './components/back/back'

export type theme = {
  name: string
  class: string
}
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

  
  const themesOptions: theme[] = [
    {name: 'dark', class: 'bg-black prose-invert text-white'},
    {name: 'light', class: 'bg-white'},
    {name: 'calm', class: 'bg-[#ebf3e7]'}
  ]
  
  const [theme, setTheme] = useState(themesOptions[1].class)
  
  const handleTheme = (themeName: string) => {
    setTheme(themesOptions.filter(theme => theme.name == themeName)[0].class)
  }

  return <>
  <div className='relative'>
    <Back />
    <Toolbar editor={editor} setTheme={handleTheme} themes={themesOptions.map(theme => theme.name)} currentTheme={theme}  />
    <Menu />
    <EditorContent className={"px-6 py-8 !max-w-none font-roboto text-left md:py-20 md:px-48 prose !absulute " + theme} editor={editor} />
  </div>
  </>
    
  
}
