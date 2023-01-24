import React, { useState } from "react"
import Boy from "../../../public/assets/icons/boy.svg"
import Girl from "../../../public/assets/icons/girl.svg"
import styled from "styled-components"
import { Layout, Menu } from "antd"
import { InputBox } from "../Footer"
import { MenuTheme } from "antd/lib/menu"

const { Sider, Content } = Layout
interface ISideNavBarProps {
  theme?: MenuTheme
}

const SideNavBar: React.FC<ISideNavBarProps> = ({ theme }) => {
  const [currentNavbar, setCurrentNavbar] = useState("")
  const Body = styled.div`
    height: "100vh";
    .ant-layout-sider-children {
      height: 100vh;
    }
    .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal)
      .ant-menu-item-selected {
      background-color: #1890ff;
      border-radius: 6px;
      margin-left: 5px;
    }
    .ant-menu-item {
      margin-top: 20px;
    }
    .ant-menu-dark.ant-menu-inline .ant-menu-item {
      width: 95%;
    }
  `
  const friends = [
    {
      key: "1",
      icon: <Boy />,
      label: "user 1",
    },
    {
      key: "2",
      icon: <Girl />,
      label: "user 2",
    },
    {
      key: "3",
      icon: <Boy />,
      label: "user 3",
    },
    {
      key: "4",
      icon: <Girl />,
      label: "user 4",
    },
    {
      key: "5",
      icon: <Boy />,
      label: "user 5",
    },
  ]
  const handleNavigation = (path: any) => {
    setCurrentNavbar(path["key"])
  }

  return (
    <Body>
      <Layout>
        <Sider>
          <Menu
            theme={theme ?? "dark"}
            mode={"inline"}
            key={currentNavbar}
            onClick={(e) => handleNavigation(e)}
            items={friends}
            defaultSelectedKeys={["1"]}
          ></Menu>
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
