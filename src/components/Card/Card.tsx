import React from "react"
import { CardContainer, Avatar, Job, Contact, Link, Name } from "./styled"
import { Icon } from "../Icon"
import profile from "./profile"

export const Card: React.FC = () => {
  const { name, job, avatar, url } = profile

  return (
    <CardContainer>
      <Avatar src={avatar} />
      <Name>{name}</Name>
      <Job>{job}</Job>
      <Contact>
        <Link href={url.linkedIn}>
          <Icon.LinkedIn />
        </Link>
        <Link href={url.github}>
          <Icon.Github />
        </Link>
      </Contact>
    </CardContainer>
  )
}
