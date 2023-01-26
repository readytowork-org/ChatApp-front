import React from "react"
import Boy from "../../../public/assets/icons/boy.svg"
import Girl from "../../../public/assets/icons/girl.svg"
import styled from "styled-components"
import { Layout, Menu } from "antd"
import { InputBox } from "../Footer"
import { MenuTheme } from "antd/lib/menu"
import InputField from "../../atoms/InputField"

const { Sider, Content } = Layout
interface ISideNavBarProps {
  theme?: MenuTheme
  minWidth?: string
}

const SideNavBar: React.FC<ISideNavBarProps> = ({ theme, minWidth }) => {
  const Body = styled.div`
    height: "100vh";

    .ant-layout-sider-children {
      height: 100vh;
      margin-left: 10px;
      margin-top: 10px;
    }
    .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal)
      .ant-menu-item-selected {
      background-color: #1890ff;
      border-radius: 6px;
    }
    .ant-menu-item {
      margin-top: 20px;
    }
    .ant-menu-dark.ant-menu-inline .ant-menu-item {
      width: 95%;
    }
    .h1 {
      color: #ffffff;
      font-size: 20px;
      font-weight: bold;
    }
  `
  const friends = [
    {
      key: "1",
      icon: <Boy />,
      name: "hello",
      label: "user 1",
    },
    {
      key: "2",
      icon: <Girl />,
      name: "hello",
      label: "user 2",
    },
    {
      key: "3",
      icon: <Boy />,
      name: "hello",
      label: "user 3",
    },
    {
      key: "4",
      icon: <Girl />,
      name: "hello",
      label: "user 4",
    },
    {
      key: "5",
      icon: <Boy />,
      name: "hello",
      label: "user 5",
    },
  ]

  return (
    <Body>
      <Layout>
        <Sider width={minWidth ?? "250px"}>
          <h1 className={"h1"}>{"Chat App"}</h1>
          <InputField borderRadius={"5px"} placeHolder={"Search messages"} />
          <Menu theme={theme ?? "dark"} mode={"inline"} items={friends}></Menu>
        </Sider>
        <Layout>
          <Content
            style={{
              padding: 24,
              minHeight: 280,
              background: "#ffffff",
            }}
          >
            {"User 1"}
          </Content>
          <InputBox />
        </Layout>
      </Layout>
    </Body>
  )
}

export default SideNavBar
