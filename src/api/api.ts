import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080"

interface LoginRes {
  email: string
  password: string
}

interface SignUpRes {
  name: string
  email: string
  password: string
}

interface LoginBack {
  isAuth: boolean
  token: string | null
  user: string | null
  message: string | null
}

interface Note {
  ID: string
  Title: string
  Content: string
  UserID: string
}

export async function login(req: LoginRes): Promise<LoginBack>{
  const response: LoginBack = {
    isAuth: false,
    token: '',
    user: '',
    message: ''
  }

  await axios.post("/login", JSON.stringify(req)).then((res) => {
    response.isAuth = true;
    response.token = res.data.token
    response.user = res.data.name
    response.message = "Logged!"
  })
  .catch(err => {
    response.isAuth = false;
    response.token = '';
    response.user = '';
    response.message = err
  });
  return response
}

export async function signup(req: SignUpRes){
  return await axios.post("/signup", JSON.stringify(req)).then(res => res.statusText == "OK")
}

export async function loadNotes(): Promise<Note[] | null>{
  return await axios.get("/get-notes").then(res => {
    const notes: Note[] = []
    const items = res.data.notes;
    for(const i of items){
      notes.push(parseDataToNote(i.id, i.title, i.content, i.user_id))
    }
    return notes
  })
  .catch(err => {
    console.debug(err)
    return null
  })
}

export function parseDataToNote(ID: string, Title: string, Content: string, UserID: string) :Note{
  return {ID, Title,Content, UserID}
}

interface NewNote {
  title: string
  content: string
}

export async function saveNote(note: NewNote){
  return await axios.post("/create-note", JSON.stringify(note)).then(res => {
    return res.data.message
  })
}

export async function updateNote(note: Note){
  return await axios.post("/update-note", JSON.stringify(note)).then(res => {
    return res.data.message
  })
}

export async function deleteNote(id: string){
  return await axios.post("/delete-note", JSON.stringify({"note_id": id})).then(res => {
    return res.data.message
  })
}