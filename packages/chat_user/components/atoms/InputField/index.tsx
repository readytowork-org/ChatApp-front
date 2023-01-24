import * as React from "react"
import { Input } from "antd"
import styled from "styled-components"

interface IInputFieldProps {
  borderRadius?: string
  height?: string
  placeHolder?: string
  width?: string
}
const TextInputFieldWrapper = styled.div`
  .ant-input {
    width: ${({ width }: IInputFieldProps) => {
      return width ? width : "90%"
    }};
  }
`

const InputStyled = styled(Input)`
  border-radius: ${({ borderRadius }: IInputFieldProps) =>
    borderRadius || "10px"};
  height: ${({ height }: IInputFieldProps) => height || "auto"};
`
const InputField: React.FunctionComponent<IInputFieldProps> = ({
  borderRadius,
  height,
  placeHolder,
  width,
}) => {
  return (
    <TextInputFieldWrapper>
      <InputStyled
        width={width}
        height={height}
        placeHolder={placeHolder}
        borderRadius={borderRadius}
        placeholder={placeHolder ?? "Type a message"}
      />
    </TextInputFieldWrapper>
  )
}

export default InputField
