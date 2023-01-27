import * as React from "react"
import { Input } from "antd"
import styled from "styled-components"

interface IInputFieldProps {
  borderRadius?: string
  height?: string
  placeHolder?: string
  width?: string
  prefix?: JSX.Element
  suffix?: JSX.Element
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
    borderRadius || "5px"};
  height: ${({ height }: IInputFieldProps) => height || "auto"};
  width: ${({ width }: IInputFieldProps) => width || "auto"};
`
const InputField: React.FunctionComponent<IInputFieldProps> = ({
  borderRadius,
  height,
  placeHolder,
  width,
  prefix,
  suffix,
}) => {
  return (
    <TextInputFieldWrapper>
      <InputStyled
        width={width}
        prefix={prefix}
        suffix={suffix}
        height={height}
        placeHolder={placeHolder}
        borderRadius={borderRadius}
        placeholder={placeHolder ?? "Type a message"}
      />
    </TextInputFieldWrapper>
  )
}

export default InputField
