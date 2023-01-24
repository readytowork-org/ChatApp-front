import * as React from "react"
import styled from "styled-components"
import Image from "next/image"

interface IIconProps {
  iconPath?: any
  icon?: any
  iconHeight?: number
  iconWidth?: number
}
const IconWrapper = styled.div``
const Icon: React.FC<IIconProps> = ({
  icon,
  iconHeight,
  iconWidth,
  iconPath,
}) => {
  return (
    <IconWrapper>
      <div className={"icon"}>
        {icon == null ? (
          <Image
            src={iconPath ?? "/users.svg"}
            width={iconWidth ?? 60}
            height={iconHeight ?? 60}
          />
        ) : (
          icon
        )}
      </div>
    </IconWrapper>
  )
}

export default Icon
