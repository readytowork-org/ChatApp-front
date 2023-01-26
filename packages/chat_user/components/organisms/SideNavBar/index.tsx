import React, { useState } from "react"
import Boy from "../../../public/assets/icons/boy.svg"
import styled from "styled-components"
import { Button, Layout, Menu } from "antd"
import { InputBox } from "../Footer"
import { MenuTheme } from "antd/lib/menu"
import InputField from "../../atoms/InputField"

const { Sider, Content } = Layout
interface ISideNavBarProps {
  theme?: MenuTheme
  minWidth?: string
}

const SideNavBar: React.FC<ISideNavBarProps> = ({ theme, minWidth }) => {
  const [friendList, setFriendList] = useState([])

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
    .ant-btn.ant-btn-block {
      width: 230px;
    }
    .menu-header {
      color: #ffffff;
      font-size: 20px;
      font-weight: bold;
    }
    .menu-footer {
      bottom: 20px;
      color: #ffffff;
      position: absolute;
    }
  `
  const Label = styled.div`
    display: flex;
    flex-direction: column;
    .title {
      font-size: 14px;
      line-height: 20px;
      color: #ffffff;
    }
    .sub-title {
      font-size: 12px;
      line-height: 20px;
      color: #413f3f;
    }
  `

  return (
    <Body>
      <Layout>
        <Sider width={minWidth ?? "250px"}>
          <span className={"menu-header"}>{"Chat App"}</span>
          <InputField borderRadius={"5px"} placeHolder={"Search messages"} />
          <Menu
            theme={theme ?? "dark"}
            mode={"inline"}
            items={friendList}
          ></Menu>
          <div className={"menu-footer"}>
            <Button
              type={"primary"}
              block
              onClick={() => {
                const newFriend = friendList.concat({
                  key: "1",
                  icon: <Boy />,

                  label: (
                    <Label>
                      <span className={"title"}>{"User1"}</span>
                      <span className={"sub-title"}>{"Hello"}</span>
                    </Label>
                  ),
                })
                setFriendList(newFriend)
              }}
            >
              {"New chat"}
            </Button>
          </div>
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
