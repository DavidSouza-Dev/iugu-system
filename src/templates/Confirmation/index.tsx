import LoadingIcon from "components/Svg/LoadingIcon"
import Link from "next/link"
import { useEffect, useState } from "react"
import { TconfirmationDataProps } from "types"
import * as S from "./styles"

const ConfirmationTemplate = ({ plan }: TconfirmationDataProps) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }, [])
  return (
    <S.Content>
      <S.Body>
        {loading ? (
          <S.Loading>
            <div>
              <LoadingIcon />
            </div>
          </S.Loading>
        ) : (
          <div className="confirmation">
            <Link href="/" aria-label="Botão que retorna para tela de planos">
              <a
                className="confirmation_return"
                aria-label="Botão que retorna para tela de planos"
              >
                <img src="/img/icon-arrow-chevron.svg" alt="" />
              </a>
            </Link>
            <img
              className="confirmation_icon-logo"
              src="/img/icon-logo.svg"
              alt="Esse é o logo IUGU na cor azul"
              width="45"
            />
            <img
              className="confirmation_icon-sucesso"
              src="/img/icon-success.svg"
              alt="Esse é o ícone de sucesso"
              width="65"
            />
            <h5 className="confirmation_title" aria-label="Parabéns!">
              Parabéns!
            </h5>
            <p
              className="confirmation_subtitle"
              aria-label="Sua assinatura foi realizada com sucesso"
            >
              Sua assinatura foi realizada com sucesso
            </p>
            <div
              className="confirmation_details"
              aria-label="Detalhes da Confirmação"
            >
              <div className="confirmation_details-plan">
                <img
                  src="/img/icon-star.svg"
                  alt="Logo estrela nos detalhes da compra"
                />
                <div
                  className="confirmation_details-plan-dscp"
                  aria-label="descrição do plano"
                >
                  {plan?.period === "annually" ? "Anual" : "Mensal"} |{" "}
                  {plan?.description}
                  <div className="plans_item-prices">
                    <span className="plans_item-price">
                      {plan.priceWithDiscount}{" "}
                    </span>
                    <span className="plans_item-price-installment">
                      {plan.installments}x R$ {plan.installmentsValue}
                    </span>
                  </div>
                </div>
              </div>
              <div className="confirmation_details-user">
                <p className="confirmation_details-user-mail">
                  E-mail
                  <span>{plan.email}</span>
                </p>
                <p
                  className="confirmation_details-user-cpf"
                  test-id="cpf-detail"
                >
                  CPF
                  <span>
                    {plan.cpf
                      .toString()
                      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}
                  </span>
                </p>
              </div>
            </div>
            <a
              className="confirmation_go-plan"
              role="button"
              aria-label="Botão que Gerenciar assinatura"
            >
              Gerenciar assinatura
            </a>
            <Link href="/">
              <a
                className="confirmation_go-home btn--primary"
                aria-label="Botão que direciona para Home"
              >
                IR PARA HOME
              </a>
            </Link>
          </div>
        )}
      </S.Body>
    </S.Content>
  )
}

export default ConfirmationTemplate
