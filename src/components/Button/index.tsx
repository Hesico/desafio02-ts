import { Btn } from "./style"

interface Ibutton {
  onClickEvent: (name : string) => void,
  text: string
}

export default function Button({onClickEvent,text} : Ibutton) {
  return (
    <Btn onClick={() => onClickEvent("Henrique")}>{text}</Btn>
  )
}
