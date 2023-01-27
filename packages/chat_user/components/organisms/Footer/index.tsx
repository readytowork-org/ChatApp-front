import React from "react"
import { Layout } from "antd"
import InputField from "../../atoms/InputField"
import IconButton from "../../atoms/IconButton"
import { LinkOutlined, SendOutlined, SmileOutlined } from "@ant-design/icons"

interface IFooterProps {
  prefixIconClick?: React.MouseEventHandler<HTMLElement>
  suffixIconClick?: React.MouseEventHandler<HTMLElement>
}

const { Footer } = Layout
export const FooterComponent: React.FC<IFooterProps> = ({
  prefixIconClick,
  suffixIconClick,
}) => {
  return (
    <Footer
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <InputField
        width={"100vh"}
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
      {/* <IconButton
        icon={ */}
      <SendOutlined
        style={{
          fontSize: "40px",
        }}
      />
      {/* }
      ></IconButton> */}
    </Footer>
  )
}
