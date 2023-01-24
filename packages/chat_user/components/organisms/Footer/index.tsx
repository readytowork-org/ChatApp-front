import React from "react"
import { Layout } from "antd"
import InputField from "../../atoms/InputField"

const { Footer } = Layout
export const InputBox: React.FC = () => {
  return (
    <Footer>
      <InputField />
    </Footer>
  )
}
