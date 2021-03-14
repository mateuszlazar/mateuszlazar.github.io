import React from "react"
import { Helmet } from "react-helmet"
import { Card, Layout } from "../components"

export default function Home() {
  return (
    <Layout>
      <Helmet
        title={`Home - mateuszlazar.github.io`}
        htmlAttributes={{ lang: `en` }}
        defer={false}
      />
      <Card />
    </Layout>
  )
}
