import { API } from "@project/shared"
export const performLogin = (data: any) => {
  return API.post("/login", { ...data })
}
export const performRegister = (data: any) => {
  return API.post("/user", { ...data })
}
