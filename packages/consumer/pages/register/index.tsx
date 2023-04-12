import { CloseCircleFilled } from "@ant-design/icons"
import { Button, TextField, auth, theme } from "@project/shared"
import { message } from "antd"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useFormik } from "formik"
import Head from "next/head"
import Link from "next/link"
import React from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import * as yup from "yup"

interface RegisterType {
  email: string
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

const RegisterWrapper = styled.div`
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

const RegisterPage: React.FC = () => {
  const { t } = useTranslation()
  const [loading, setLoading] = React.useState(false)

  const handleLoginFormSubmit = () => {
    handleLogin()
  }

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email(t("Please enter your e-mail address"))
      .required(t("Please enter")),
    password: yup.string().required(t("Please enter")),
  })

  const formik = useFormik<RegisterType>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleLoginFormSubmit,
  })

  const handleLogin = async () => {
    setLoading(true)
    try {
      const data = await createUserWithEmailAndPassword(
        auth,
        formik.values.email,
        formik.values.password
      )

      if (!data || !data.user || !auth.currentUser) {
        return
      }
    } catch (error) {
      const errorCode = error.code
      if (errorCode === "auth/user-not-found") {
        message.error({
          content: t("Email address or password does not match."),
          key: "1",
          icon: <CloseCircleFilled onClick={() => message.destroy("1")} />,
        })
      } else if (errorCode === "auth/wrong-password") {
        message.error({
          content: t("Email address or password does not match."),
          key: "2",
          icon: <CloseCircleFilled onClick={() => message.destroy("2")} />,
        })
      } else if (errorCode === "auth/user-disabled") {
        message.error({
          content: t(
            "We could not login you at this moment. Please contact your administration for inquiry"
          ),
          key: "3",
          icon: <CloseCircleFilled onClick={() => message.destroy("3")} />,
        })
      } else if (errorCode == "auth/email-already-in-use") {
        message.error({
          content: t("Email Address is already in use"),
          key: "4",
          icon: <CloseCircleFilled onClick={() => message.destroy("4")} />,
        })
      } else {
        message.error({
          key: "5",
          icon: <CloseCircleFilled onClick={() => message.destroy("5")} />,
          content: t("An error has occurred. Please try again later."),
        })
      }
    }
    setLoading(false)
  }

  return (
    <>
      <Head>
        <title>{"Register"}</title>
      </Head>
      <Container>
        <RegisterWrapper>
          <span className={"header"}>{"Register"}</span>
          <TextFieldWrapper>
            <form onSubmit={formik.handleSubmit}>
              <InputFieldWrapper>
                <TextField
                  required={true}
                  name={"name"}
                  error={formik.touched.email && formik.errors.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  label={t("Full name")}
                  placeholder={t("Full name")}
                  className={"text-field"}
                  height={"40px"}
                  width={"340px"}
                />
              </InputFieldWrapper>
              <InputFieldWrapper>
                <TextField
                  required={true}
                  name={"email"}
                  error={formik.touched.email && formik.errors.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  label={t("Email address")}
                  placeholder={t("Email address")}
                  className={"text-field"}
                  height={"40px"}
                  width={"340px"}
                />
              </InputFieldWrapper>
              <InputFieldWrapper>
                <TextField
                  required={true}
                  name={"phone"}
                  type={"number"}
                  error={formik.touched.email && formik.errors.email}
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
                  required={true}
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
              <InputFieldWrapper>
                <TextField
                  name={"password"}
                  type={"password"}
                  error={formik.touched.password && formik.errors.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  label={t("Confirm password")}
                  placeholder={t("Confirm password")}
                  className={"text-field"}
                  height={"40px"}
                  width={"340px"}
                />
              </InputFieldWrapper>
              <StyledButton htmlType={"submit"} loading={loading}>
                {t("Register")}
              </StyledButton>
            </form>
          </TextFieldWrapper>
          <BottomTextWrapper>
            <h1 className={"h1"}>{"Already have an account?"}</h1>
            <Link href={"/login"}>{"Login"}</Link>
          </BottomTextWrapper>
        </RegisterWrapper>
      </Container>
    </>
  )
}
export default RegisterPage
