import { useFormik } from "formik"
import * as yup from "yup"
import React from "react"
import { Layout } from "antd"
import InputField from "../../atoms/InputField"
import IconButton from "../../atoms/IconButton"
import { LinkOutlined, SmileOutlined } from "@ant-design/icons"
import EmojiPicker from "../../atoms/EmojiPicker"

interface MessageType {
  message: string
}
interface IFooterProps {
  prefixIconClick?: React.MouseEventHandler<HTMLElement>
  suffixIconClick?: React.MouseEventHandler<HTMLElement>
  setMessage?: any
  messageList?: any[]
}

const { Footer } = Layout
export const FooterComponent: React.FC<IFooterProps> = ({
  prefixIconClick,
  suffixIconClick,
  setMessage,
  messageList,
}) => {
  const handleSubmit = () => {
    setMessage(
      messageList.concat({
        incoming: false,
        message: formik.values.message,
      })
    )
    console.log(formik.values.message)
  }
  const formik = useFormik<MessageType>({
    initialValues: {
      message: "",
    },
    onSubmit: handleSubmit,
  })
  return (
    <Footer>
      <form onSubmit={formik.handleSubmit}>
        <InputField
          width="100%"
          name={"message"}
          onChange={formik.handleChange}
          value={formik.values.message}
          prefix={
            <IconButton
              onClick={prefixIconClick}
              icon={<LinkOutlined />}
            ></IconButton>
          }
          suffix={
            <IconButton
              onClick={suffixIconClick}
              icon={<SmileOutlined />}
            ></IconButton>
          }
        />
      </form>
    </Footer>
  )
}
