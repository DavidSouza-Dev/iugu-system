import { render, waitFor } from "@testing-library/react"
import ConfirmationTemplate from "."
const plan = {
  cpf: "88812146287",
  description: "À Vista",
  id: 33,
  installments: 1,
  installmentsValue: "R$ 6480.00",
  period: "annually",
  priceWithDiscount: "R$ 6480.00",
  valuePrice: 6480,
  email: "david@teste.com",
}

describe(" Test of Confirmation Template", () => {
  it("should render Labels after rendering on screen", async () => {
    const { container, getByText } = render(
      <ConfirmationTemplate plan={plan} />
    )

    expect(container).toBeInTheDocument()

    await waitFor(() => {
      const cpfElement = getByText(/cpf/i)
      expect(cpfElement).toBeInTheDocument()
    })
  })
})
