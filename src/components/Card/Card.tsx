import React from "react"
import { CardContainer, Job, Contact, Link, Name } from "./styled"
import { Avatar, Icon } from "../../components"

const data = {
  name: "Mateusz Lazar",
  job: "Web Developer",
  url: {
    linkedIn: "https://www.linkedin.com/in/mateusz-lazar/",
    github: "https://github.com/mateuszlazar",
  },
}

export const Card: React.FC = () => (
  <CardContainer>
    <Avatar />
    <Name>{data.name}</Name>
    <Job>{data.job}</Job>
    <Contact>
      <Link href={data.url.linkedIn}>
        <Icon.LinkedIn />
      </Link>
      <Link href={data.url.github}>
        <Icon.Github />
      </Link>
    </Contact>
  </CardContainer>
)
