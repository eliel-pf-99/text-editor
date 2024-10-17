import type { Editor } from "@tiptap/react";
import { useCallback } from "react";
import { CiSaveDown2, CiSaveUp2 } from "react-icons/ci";
import { useAuth } from "../../../provider/auth_provider";
import { parseDataToNote, saveNote, updateNote } from "../../../api/api";
import { useNavigate } from "react-router-dom";

export interface MenuProps {
  editor: Editor | null
  id: string | null
  savePDF: () => void
}

export default function Menu(props: MenuProps) {
  const {user} = useAuth();
  const navigate = useNavigate();

  const handleSave = useCallback(async () => {
    const title = props.editor?.getText().slice(0, props.editor?.getText().indexOf('\n'))
    const content = props.editor?.getHTML()
    let msg: string = ''
    if(props.id != null) {
      await updateNote(parseDataToNote(props.id, title ?? '', content ?? '', user ?? '')).then(res => msg = res)
    }
    else {
      await saveNote({title: title ?? '', content: content ?? ''}).then(res => msg = res)
    }
    if(msg.includes("success")){
      navigate("/")
    }
  }, [navigate, props.editor, props.id, user])

  return (
    <div className={"bg-opacity-100 bg-white transition-all flex flex-row items-center fixed top-4 right-4 h-10 gap-2 border rounded-full shadow-md p-2 "}>
      <div className="hover:border rounded-full cursor-pointer p-1">
        <CiSaveUp2 className="w-5 h-5" title="save" onClick={handleSave} />
      </div>
      <div className="hover:border rounded-full cursor-pointer p-1">
        <CiSaveDown2 className="w-5 h-5" title="download" onClick={props.savePDF}  />
      </div>
    </div>
  )
}
