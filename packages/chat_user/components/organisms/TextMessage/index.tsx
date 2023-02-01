import { Card, Typography } from "antd"
import * as React from "react"
import styled from "styled-components"
import CircularAvatar from "../../atoms/CircularAvatar"

interface ITextMessageProps {
  message?: string
  incoming: boolean
}
const StyledTextMessage = styled.div`
  display: flex;
  flex-direction: "row";
  justify-content: ${({ incoming }: ITextMessageProps) =>
    incoming ? "start" : "end"};
`
const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 10px;
    border-radius: 6px;
    background-color: ${({ incoming }: ITextMessageProps) =>
      incoming ? "red" : "blue"};
  }
  .ant-typography {
    color: #ffffff;
  }
`

const TextMessage: React.FC<ITextMessageProps> = ({
  message,
  incoming = true,
}) => {
  return (
    <StyledTextMessage incoming={incoming}>
      <CircularAvatar size={35}>U</CircularAvatar>
      <StyledCard incoming={incoming}>
        <Typography>{message}</Typography>
      </StyledCard>
    </StyledTextMessage>
  )
}

export default TextMessage
