import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { AvatarWrapper } from "./styled"

export const Avatar: React.FC = () => (
  <AvatarWrapper>
    <StaticImage src={`./photo-me.jpg`} alt={`It's me.`} />
  </AvatarWrapper>
)
