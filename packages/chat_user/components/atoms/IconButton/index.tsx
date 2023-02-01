import { Button } from "antd"
import { SizeType } from "antd/lib/config-provider/SizeContext"
import * as React from "react"

interface IIconButtonProps {
  icon?: JSX.Element
  onClick?: React.MouseEventHandler<HTMLElement>
  type?: "link" | "text" | "ghost" | "default" | "primary" | "dashed"
  shape?: "circle" | "default" | "round"
  size?: SizeType
}

const IconButton: React.FunctionComponent<IIconButtonProps> = ({
  icon,
  onClick,
  type,
  shape,
  size,
}) => {
  return (
    <Button shape={shape} size={size} type={type ?? "link"} onClick={onClick}>
      {icon}
    </Button>
  )
}

export default IconButton
