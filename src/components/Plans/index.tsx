import { useRouter } from "next/router"
import { Tplan, TplansProps } from "types"
import * as S from "./styles"

const Plans = ({ plans }: TplansProps) => {
  const router = useRouter()

  const handleClick = (id: number) => {
    setTimeout(() => {
      router.push(`/payment/plan-${id}`)
    }, 500)
  }
  return (
    <S.Wrapper>
      {plans?.map(
        ({
          id,
          description,
          period,
          fullPrice,
          priceWithDiscount,
          discountPercentage,
          installments,
          installmentsValue,
        }: Tplan) => (
          <S.Plans data-testid="plans" key={id}>
            <label htmlFor={description} key={id}>
              {period === "annually" ? "Anual" : "Mensal"} | {description}
              <div className="plans_item-prices">
                <span className="plans_item-prices-of">
                  {" "}
                  De {fullPrice.toString().replace(".", ",")} |{" "}
                </span>
                <span className="plans_item-prices-for">
                  Por {priceWithDiscount.replace(".", ",")}
                </span>
                <span className="plans_item-prices-discount">
                  {discountPercentage}
                </span>
              </div>
              <div className="plans_item-installment">
                <span>
                  {installments}x de {installmentsValue.replace(".", ",")}
                </span>
              </div>
            </label>
            <input
              type="radio"
              id={description == "À vista" ? "a_vista" : description}
              name={description}
              alt="0"
              className="plans_item-radio"
              value={description}
              onChange={() => handleClick(id)}
            />
            <span></span>
          </S.Plans>
        )
      )}
    </S.Wrapper>
  )
}

export default Plans
