import { Avatar } from "antd"
import * as React from "react"
import styled from "styled-components"

interface IAvatarProps {
  size?: number
  src?: any
  children?: any
  marginTop?: string
  marginRight?: string
}
const StyledAvatar = styled(Avatar)`
  .ant-avatar {
    margin-top: 5px;
    margin-right: 8px;
  }
`
const CircularAvatar: React.FC<IAvatarProps> = ({ size, src, children }) => {
  return (
    <StyledAvatar size={size} src={src}>
      {children}
    </StyledAvatar>
  )
}

export default CircularAvatar
