export interface NotificationProps{
  msg: string
  on: boolean
}

export default function Warning(props: NotificationProps) {
  return (
    <div className={"border bg-black text-white " + (props.on ? "visible" : "invisible")}>{props.msg}</div>
  )
}
