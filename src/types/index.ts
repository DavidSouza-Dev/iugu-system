export type nodeChildren = {
  children: React.ReactNode
}

export type Tplan = {
  id: number
  description: string
  period: string
  fullPrice: string
  priceWithDiscount: string
  discountPercentage: string
  installments: number
  installmentsValue: string
  acceptsCoupon?: boolean
  discountAmmount?: number
  discountCouponCode?: null
  periodLabel?: string
  valuePrice?: number
}

export type TplansProps = {
  plans: Tplan[]
}

export type TPaymentTemplateProps = {
  plan: TpaymentProps
}

export interface TpaymentProps {
  description: string
  id: number
  installments: number
  installmentsValue: string
  period: string
  priceWithDiscount: string
  valuePrice: number
}

export interface TconfirmationData extends TpaymentProps {
  cpf: string
  email: string
}

export type TconfirmationDataProps = {
  plan: TconfirmationData
}

export type TformData = {
  couponCode?: string
  creditCardCPF?: string
  creditCardCVV?: string
  creditCardExpirationDate?: string
  creditCardHolder?: string
  creditCardNumber?: string
  installments?: number
}

export type TresponsePlan = {
  id: number
  storeId: string
  title: string
  description: string
  caption: string
  fullPrice: number
  discountAmmount: number
  discountPercentage: number
  periodLabel: string
  period: string
  discountCouponCode: null
  order: number
  priority: number
  gateway: string
  splittable: boolean
  installments: number
  acceptsCoupon: boolean
}

export type TplansContext = {
  dataConfirmation: any
  setDataConfirmation: (state: TconfirmationData) => void
  user: {
    email: string
    firstName: string
    userId: number
  }
}
