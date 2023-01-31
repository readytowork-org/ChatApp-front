import Picker from "@emoji-mart/react"
import data from "@emoji-mart/data"
import * as React from "react"

interface IEmojiPickerProps {
  theme?: "auto" | "light" | "dark"
  onEmojiSelect?: any
}

const EmojiPicker: React.FC<IEmojiPickerProps> = ({ theme, onEmojiSelect }) => {
  return <Picker theme={theme} data={data} onEmojiSelect={onEmojiSelect} />
}

export default EmojiPicker
