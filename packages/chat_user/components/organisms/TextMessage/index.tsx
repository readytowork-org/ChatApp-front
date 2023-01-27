import { Card, Typography } from "antd"
import * as React from "react"
import styled from "styled-components"

interface ITextMessageProps {
  message?: string
  incoming: boolean
}
const StyledTextMessage = styled.div`
  display: flex;
  flex-direction: "row";
`
const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 10px;
    border-radius: 6px;
  }
`

const TextMessage: React.FC<ITextMessageProps> = ({
  message,
  incoming = true,
}) => {
  return (
    <StyledTextMessage
      style={{
        justifyContent: incoming ? "start" : "end",
      }}
    >
      <StyledCard
        style={{
          borderRadius: 6,
          backgroundColor: incoming ? "red" : "blue",
        }}
      >
        <Typography
          style={{
            color: "#ffffff",
          }}
        >
          {message}
        </Typography>
      </StyledCard>
    </StyledTextMessage>
  )
}

export default TextMessage
