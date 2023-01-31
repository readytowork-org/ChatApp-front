import React, { useState } from "react"
import styled from "styled-components"
import { Avatar, Button, Layout, List, Menu, Modal } from "antd"
import { MenuTheme } from "antd/lib/menu"
import InputField from "../../atoms/InputField"
import moment from "moment"
import { FooterComponent } from "../Footer"
import TextMessage from "../TextMessage"
import EmojiPicker from "../../atoms/EmojiPicker"

const { Sider, Content } = Layout
interface ISideNavBarProps {
  theme?: MenuTheme
  minWidth?: string
}

const SideNavBar: React.FC<ISideNavBarProps> = ({ theme, minWidth }) => {
  const [friendList, setFriendList] = useState([])
  const [message, setMessage] = useState([
    {
      incoming: true,
      message: "Hello, How are you?",
    },
  ])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

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
      height: 50px;
      width: 95%;
    }
    .ant-btn.ant-btn-block {
      width: 330px;
    }
    .anticon > * {
      font-size: 20px;
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
  const messages = [
    {
      key: "1",
      incoming: true,
      message: "Hello, How are you?",
    },
    {
      key: "2",
      incoming: false,
      message: "Hello, I'm good and u",
    },
  ]
  const data = [
    {
      key: "1",
      icon: (
        <Avatar
          size={44}
          src="https://imgs.search.brave.com/L2MSit2v_X-3MNNyEE1uK2hHgas6AHKIgN_Q2ns9E0c/rs:fit:800:800:1/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9ib3kt/ZmFjZS1hdmF0YXIt/cHJvZmlsZS1waWN0/dXJlLWJveS1mYWNl/LWF2YXRhci1wcm9m/aWxlLXBpY3R1cmUt/Y2FydG9vbi1jaGFy/YWN0ZXItcG9ydHJh/aXQtdmVjdG9yLWls/bHVzdHJhdGlvbi1n/cmFwaGljLWRlc2ln/bi0xNDk3NTU1MTAu/anBn"
        />
      ),

      label: (
        <Label>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <span className={"title"}>{"User 1"}</span>
            <span className={"sub-title"}>
              {moment(Date()).format("YYYY/MM/DD")}
            </span>
          </div>
          <span className={"sub-title"}>{"Hello"}</span>
        </Label>
      ),
    },
    {
      key: "2",
      icon: (
        <Avatar
          size={44}
          src="https://imgs.search.brave.com/VdfGmA847MGM-1BHRhyarIc-lHIyQ3PjE5K-6Yof_xU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzM3MTYy/OTYvc2NyZWVuc2hv/dHMvMTIyNTM3NjQv/YWxvLWlsbHVzdHJh/dGlvbl80eC5wbmc"
        />
      ),

      label: (
        <Label>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <span className={"title"}>{"User 2"}</span>
            <span className={"sub-title"}>
              {moment(Date()).format("YYYY/MM/DD")}
            </span>
          </div>
          <span className={"sub-title"}>{"Hello"}</span>
        </Label>
      ),
    },
    {
      key: "3",
      icon: (
        <Avatar
          size={44}
          src="https://imgs.search.brave.com/L2MSit2v_X-3MNNyEE1uK2hHgas6AHKIgN_Q2ns9E0c/rs:fit:800:800:1/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9ib3kt/ZmFjZS1hdmF0YXIt/cHJvZmlsZS1waWN0/dXJlLWJveS1mYWNl/LWF2YXRhci1wcm9m/aWxlLXBpY3R1cmUt/Y2FydG9vbi1jaGFy/YWN0ZXItcG9ydHJh/aXQtdmVjdG9yLWls/bHVzdHJhdGlvbi1n/cmFwaGljLWRlc2ln/bi0xNDk3NTU1MTAu/anBn"
        />
      ),

      label: (
        <Label>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <span className={"title"}>{"User 3"}</span>
            <span className={"sub-title"}>
              {moment(Date()).format("YYYY/MM/DD")}
            </span>
          </div>
          <span className={"sub-title"}>{"Hello"}</span>
        </Label>
      ),
    },
    {
      key: "4",
      icon: (
        <Avatar
          size={44}
          src="https://imgs.search.brave.com/VdfGmA847MGM-1BHRhyarIc-lHIyQ3PjE5K-6Yof_xU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzM3MTYy/OTYvc2NyZWVuc2hv/dHMvMTIyNTM3NjQv/YWxvLWlsbHVzdHJh/dGlvbl80eC5wbmc"
        />
      ),

      label: (
        <Label>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <span className={"title"}>{"User 4"}</span>
            <span className={"sub-title"}>
              {moment(Date()).format("YYYY/MM/DD")}
            </span>
          </div>
          <span className={"sub-title"}>{"Hello"}</span>
        </Label>
      ),
    },
    {
      key: "5",
      icon: (
        <Avatar
          size={44}
          src="https://imgs.search.brave.com/L2MSit2v_X-3MNNyEE1uK2hHgas6AHKIgN_Q2ns9E0c/rs:fit:800:800:1/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9ib3kt/ZmFjZS1hdmF0YXIt/cHJvZmlsZS1waWN0/dXJlLWJveS1mYWNl/LWF2YXRhci1wcm9m/aWxlLXBpY3R1cmUt/Y2FydG9vbi1jaGFy/YWN0ZXItcG9ydHJh/aXQtdmVjdG9yLWls/bHVzdHJhdGlvbi1n/cmFwaGljLWRlc2ln/bi0xNDk3NTU1MTAu/anBn"
        />
      ),

      label: (
        <Label>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <span className={"title"}>{"User 5"}</span>
            <span className={"sub-title"}>
              {moment(Date()).format("YYYY/MM/DD")}
            </span>
          </div>
          <span className={"sub-title"}>{"Hello"}</span>
        </Label>
      ),
    },
    {
      key: "6",
      icon: (
        <Avatar
          size={44}
          src="https://imgs.search.brave.com/VdfGmA847MGM-1BHRhyarIc-lHIyQ3PjE5K-6Yof_xU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzM3MTYy/OTYvc2NyZWVuc2hv/dHMvMTIyNTM3NjQv/YWxvLWlsbHVzdHJh/dGlvbl80eC5wbmc"
        />
      ),

      label: (
        <Label>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <span className={"title"}>{"User 6"}</span>
            <span className={"sub-title"}>
              {moment(Date()).format("YYYY/MM/DD")}
            </span>
          </div>
          <span className={"sub-title"}>{"Hello"}</span>
        </Label>
      ),
    },
  ]

  return (
    <Body>
      <Layout>
        <Sider width={minWidth ?? "350px"}>
          <span className={"menu-header"}>{"Chat App"}</span>
          <InputField placeHolder={"Search chat"} />
          <Menu
            theme={theme ?? "dark"}
            mode={"inline"}
            items={friendList}
          ></Menu>
          <div className={"menu-footer"}>
            <Button type={"primary"} block onClick={showModal}>
              {"New chat"}
            </Button>
            <Modal
              title="Add Friends"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              okButtonProps={{ style: { display: "none" } }}
              cancelButtonProps={{ style: { display: "none" } }}
            >
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar src="https://imgs.search.brave.com/k01hc-j_4vEv8Syhy4uYJDSUjmJiiakiCWrjDgY7a5I/rs:fit:640:640:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC84Yi8xNi83YS84/YjE2N2FmNjUzYzIz/OTlkZDkzYjk1MmE0/ODc0MDYyMC5qcGc" />
                      }
                      title={
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <span> User {item.key}</span>
                          <Button
                            type="text"
                            onClick={() => {
                              setFriendList(friendList.concat(item))
                              setIsModalOpen(false)
                            }}
                          >
                            Add
                          </Button>
                        </div>
                      }
                    />
                  </List.Item>
                )}
              />
            </Modal>
          </div>
        </Sider>
        <Layout>
          <Content
            style={{
              alignContent: "end",

              padding: 24,
              minHeight: 280,
              background: "#ffffff",
            }}
          >
            {message.map((message) => {
              return (
                <TextMessage
                  incoming={message.incoming}
                  message={message.message}
                />
              )
            })}
          </Content>
          <div
            style={{
              bottom: 81,
              zIndex: 10,
              right: 40,
              display: openEmojiPicker ? "inline" : "none",
              position: "fixed",
            }}
          >
            <EmojiPicker />
          </div>
          <FooterComponent
            setMessage={setMessage}
            messageList={message}
            suffixIconClick={() => setOpenEmojiPicker((prev) => !prev)}
          />
        </Layout>
      </Layout>
    </Body>
  )
}

export default SideNavBar
