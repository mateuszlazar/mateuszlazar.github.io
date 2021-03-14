import styled from "styled-components"

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border: 2px solid #000;
  border-radius: 2px;
  min-width: 200px;
  background-color: #f1d624;
  transition: 0.3s all;
`

export const Avatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid #000;
  overflow: hidden;
`

export const Name = styled.div`
  color: #000;
  font-size: 24px;
  margin-top: 8px;
`

export const Job = styled.div`
  color: #000;
  font-size: 16px;
`

export const Contact = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;

  > * {
    margin: 0 10px;
  }
`

export const Link = styled.a.attrs({
  target: "_blank",
})`
  display: flex;
  border: 2px solid #000;
  background-color: #fff;
  box-shadow: 4px 4px 0px 0px #000;
  padding: 4px;
`
