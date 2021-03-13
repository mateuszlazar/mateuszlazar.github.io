import React from "react"
import { GlobalStyle } from "./styled"

export const Layout: React.FC = ({ children }) => {
  return <><GlobalStyle />{children}</>
}
