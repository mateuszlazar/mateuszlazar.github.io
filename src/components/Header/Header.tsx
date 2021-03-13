import React from "react"
import { StyledHeader } from "./styled"

export const Header: React.FC = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>
}
