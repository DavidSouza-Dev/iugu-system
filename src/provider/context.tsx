import React, { createContext, useState } from "react"
import { nodeChildren, TplansContext } from "types"

export const Context = createContext({} as TplansContext)

const Provider = ({ children }: nodeChildren) => {
  const [dataConfirmation, setDataConfirmation] = useState({
    cpf: "",
    description: "",
    id: 0,
    installments: 0,
    installmentsValue: "",
    period: "",
    priceWithDiscount: "",
    valuePrice: 0,
  })
  const user = {
    email: "david.souza@mail.com",
    firstName: "David",
    userId: 222,
  }
  return (
    <Context.Provider value={{ dataConfirmation, setDataConfirmation, user }}>
      {children}
    </Context.Provider>
  )
}

export default Provider
