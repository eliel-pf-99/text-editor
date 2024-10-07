/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useState } from "react";
import { PiMoonStars, PiSunLight } from "react-icons/pi";

export interface ThemesProps {
  themes: string[]
  onAction: (themeName: string) => void
}

export default function themes(props: ThemesProps) {
  const [show, setShow] = useState('hidden')
  const [dark, setDark] = useState('light')
  const toggle = useCallback(() => show == 'hidden' ? setShow('flex') : setShow('hidden'), [show]);

  const handleOnBlur = useCallback((event : React.FocusEvent<HTMLDivElement, Element>) => {
    if(event.currentTarget.contains(event.relatedTarget)){
      return;
    }
    toggle();
  }, [toggle]);

  const handleTheme = useCallback(() => {
    if(dark == 'light'){
      setDark('dark')
      props.onAction('dark')
    }
    else{
      setDark('light')
      props.onAction('light')
    }
  }, [dark, props])

  return (
    <div title="set theme" tabIndex={0} onBlur={handleOnBlur} className="relative hover:border rounded-full p-1 flex items-center flex-col">
      <button onClick={handleTheme}>
        {dark == 'light' ? <PiSunLight className="w-5 h-5" /> : <PiMoonStars />}
      </button>
    </div>
  )
}
