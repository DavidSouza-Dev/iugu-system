import { render, waitFor } from "@testing-library/react"
import Plans from "."
const plans = [
  {
    id: 32,
    description: "Parcelado",
    installments: 12,
    discountAmmount: 60,
    discountCouponCode: null,
    discountPercentage: "-10%",
    fullPrice: "R$ 600.00",
    priceWithDiscount: "R$ 540.00",
    installmentsValue: "R$ 45.00",
    valuePrice: 540,
    periodLabel: "mês",
    period: "annually",
    acceptsCoupon: true,
  },
  {
    id: 33,
    description: "À Vista",
    installments: 1,
    discountAmmount: 720,
    discountCouponCode: null,
    discountPercentage: "-10%",
    fullPrice: "R$ 7200.00",
    priceWithDiscount: "R$ 6480.00",
    installmentsValue: "R$ 6480.00",
    valuePrice: 6480,
    periodLabel: "ano",
    period: "annually",
    acceptsCoupon: true,
  },
]

describe("<Plans plans={plans} />", () => {
  it("should render plans on screen", () => {
    const { container, getAllByTestId } = render(<Plans plans={plans} />)
    expect(container).toBeInTheDocument()
    const containersTotal = getAllByTestId(/plans/i).length
    expect(containersTotal).toEqual(2)
  })
})

describe("<Plans plans={plans} />", () => {
  it("should render Labels after rendering on screen", async () => {
    const { getByText } = render(<Plans plans={plans} />)

    await waitFor(() => {
      const Label = getByText(/anual \| parcelado/i)
      expect(Label).toBeInTheDocument()
    })
  })
})
