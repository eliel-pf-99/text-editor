import {useEditor, EditorContent} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { initialContent } from '../intialContent'
import Toolbar from '../components/toolbar'
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
import { useRef, useState } from 'react'
import Menu from '../components/menu/menu'
import Back from '../components/back/back'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import { useLocation } from 'react-router-dom'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export type theme = {
  name: string
  class: string
}
export default function EditorApp() {
  const {state} = useLocation();
  const {id, content} = state;

  const editor = useEditor({
    extensions: [StarterKit, Color, Document, Paragraph, Text, TextStyle, BulletList, ListItem, OrderedList, 
      
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
      }),
    Heading.configure({
      levels: [1, 2, 3, 4, 5, 6]
    }), 
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),],
    content: content ?? initialContent,
    editorProps: {
      attributes: {
        class: 'outline-none !static !min-h-screen'
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

  const contentRef = useRef(null);
  const handleDownload = () => {
    const content = contentRef.current;
    if(content != null) {
      html2canvas(content, {
        allowTaint: true,
            useCORS: true,
            logging: false,
            height: window.outerHeight + window.innerHeight,
            windowHeight: window.outerHeight + window.innerHeight,
      }).then(canvas => {
        const imgData =  canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'pt',
          format: [canvas.width, canvas.height]
        });
        pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
        pdf.save("download.pdf")
      })
    }
  }

  return <>
  <div className='relative'>
    <Back />
    <Toolbar editor={editor} setTheme={handleTheme} themes={themesOptions.map(theme => theme.name)} currentTheme={theme}  />
    <Menu editor={editor} id={id} savePDF={handleDownload} />
    <EditorContent ref={contentRef} className={"px-6 py-8 !max-w-none !max-h-none font-roboto text-left md:py-20 md:px-48 prose !absulute " + theme} editor={editor} />
  </div>
  </>
    
  
}
