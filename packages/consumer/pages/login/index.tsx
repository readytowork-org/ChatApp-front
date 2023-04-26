import { Button, TextField, theme } from "@project/shared"
import notification from "antd/lib/notification"
import { useFormik } from "formik"
import Head from "next/head"
import Link from "next/link"
import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
import { useMutation } from "react-query"
import styled from "styled-components"
import * as yup from "yup"
import { performLogin } from "../../services/auth"
import { AuthContext, setAuthUser } from "../../utils/AuthContext"

interface LoginType {
  phone: string
  password: string
}

const Container = styled.div`
  background: ${theme.bgColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .bottom-text {
    ${theme.typography.typographyH2}
    text-align: center;
    color: #ffffff;
  }
`

const LoginWrapper = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  flex-direction: column;
  border: 1px solid ${theme.darkGrey};
  background: ${theme.base};
  padding: 1rem 2rem;
  border-radius: 8px;
  & .text-field {
    & label {
      font-size: 14px;
      line-height: 22px;
      padding-bottom: 8px;
    }
  }
  .header {
    ${theme.typography.typographyH2}
    text-align: center;
  }
`
const BottomTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  .h1 {
    font-size: 14px;
    margin-right: 8px;
    margin-top: 2px;
  }
`
const TextFieldWrapper = styled.div`
  margin-top: 35px;
`

const StyledButton = styled(Button)`
  margin: auto;
  height: 40px;
  margin-bottom: 30px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  border-radius: 5px;
  display: flex;
  width: 196px;
  align-items: center;
  justify-content: center;
`

const InputFieldWrapper = styled.div`
  margin-bottom: 15px;
`

const LoginPage: React.FC = () => {
  const { t } = useTranslation()
  const { setUser } = useContext(AuthContext)
  const { mutate, isLoading } = useMutation(performLogin, {
    onSuccess: ({ data }) => {
      setAuthUser(data, (user) => setUser(user))
    },
    onError: () => {
      notification.error({
        message: t("Failed to find user"),
      })
    },
  })

  const validationSchema = yup.object().shape({
    phone: yup.string().required(t("Please enter")),
    password: yup.string().required(t("Please enter")),
  })

  const formik = useFormik<LoginType>({
    initialValues: {
      phone: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      mutate({
        ...values,
      })
    },
  })

  return (
    <>
      <Head>
        <title>{"Login"}</title>
      </Head>
      <Container>
        <LoginWrapper>
          <span className={"header"}>{"Login"}</span>
          <TextFieldWrapper>
            <form onSubmit={formik.handleSubmit}>
              <InputFieldWrapper>
                <TextField
                  name={"phone"}
                  error={formik.touched.phone && formik.errors.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  label={t("Phone number")}
                  placeholder={t("Phone number")}
                  className={"text-field"}
                  height={"40px"}
                  width={"340px"}
                />
              </InputFieldWrapper>
              <InputFieldWrapper>
                <TextField
                  name={"password"}
                  type={"password"}
                  error={formik.touched.password && formik.errors.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  label={t("Password")}
                  placeholder={t("Password")}
                  className={"text-field"}
                  height={"40px"}
                  width={"340px"}
                />
              </InputFieldWrapper>
              <StyledButton htmlType={"submit"} loading={isLoading}>
                {t("Login")}
              </StyledButton>
            </form>
          </TextFieldWrapper>
          <BottomTextWrapper>
            <h1 className={"h1"}>{"Don't have an account?"}</h1>
            <Link href={"/register"}>{"Register"}</Link>
          </BottomTextWrapper>
        </LoginWrapper>
      </Container>
    </>
  )
}

export default LoginPage
