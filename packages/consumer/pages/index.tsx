import { Button } from "@project/shared"
import Head from "next/head"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import PencilIcon from "../public/assets/icons/pencil.svg"
import PrivateRoute from "../withPrivateRoute"

const Container = styled.section`
  padding: 1em 2em;
`

const Home = () => {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>{"HomePage | Consumer "}</title>
      </Head>
      <Container>
        <h1>{"This is the Home Page"}</h1>
        <Button>{t("Hello")}</Button>
        <PencilIcon />
      </Container>
    </>
  )
}

export default PrivateRoute(Home)
