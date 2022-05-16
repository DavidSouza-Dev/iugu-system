import HomeTemplate from "templates/Home"
import { TplansProps, TresponsePlan } from "types"

export default function Home({ plans }: TplansProps) {
  return <HomeTemplate plans={plans} />
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/offer"
  ).catch((err) => console.error(err))
  const data = await res?.json()

  const plans = data.map((e: TresponsePlan) => {
    return {
      id: e.id,
      description: e.description,
      installments: e.installments,
      discountAmmount: e.discountAmmount,
      discountCouponCode: e.discountCouponCode,
      discountPercentage: `-${
        e.discountPercentage === 0.1
          ? e.discountPercentage * 100
          : e.discountPercentage
      }%`,
      fullPrice: `R$ ${e.fullPrice.toFixed(2)}`,
      priceWithDiscount: `R$ ${(e.fullPrice - e.discountAmmount).toFixed(2)}`,
      installmentsValue: `R$ ${(
        (e.fullPrice - e.discountAmmount) /
        e.installments
      ).toFixed(2)}`,
      valuePrice: e.fullPrice - e.discountAmmount,
      periodLabel: e.periodLabel,
      period: e.period,
      acceptsCoupon: e.acceptsCoupon,
    }
  })

  return {
    revalidate: 5,
    props: {
      plans,
    },
  }
}
