import { useRouter } from "next/router"
import { Context } from "provider/context"
import { memo, useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { TformData, TPaymentTemplateProps } from "types"
import * as S from "./styles"

const PaymentTemplate = ({ plan }: TPaymentTemplateProps) => {
  const router = useRouter()
  const { user, setDataConfirmation } = useContext(Context)
  const { register, handleSubmit } = useForm()
  const [card, setCard] = useState("")
  const [expiration, setExpiration] = useState("")
  const [cpf, setCpf] = useState("")

  const formatCardNumber = (value: string) => {
    return value
      ?.replace(/[^\d]/g, "")
      .replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4")
  }
  const formatExpiration = (value: string) => {
    return value?.replace(/[^\d]/g, "").replace(/(\d{2})(\d{2})/, "$1/$2")
  }
  const formatCPF = (value: string) => {
    return value
      ?.replace(/[^\d]/g, "")
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
  }
  const sentData = async (data: TformData) => {
    const url =
      "https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/subscription"
    const complement = {
      gateway: "iugu",
      offerId: plan.id,
      userId: user.userId,
    }
    const body = Object.assign(data, complement)

    try {
      await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
      setDataConfirmation({
        ...plan,
        cpf: body?.creditCardCPF || "",
        email: user.email,
      })
      router.push(`/confirmation`)
    } catch (e) {
      console.log(e)
    }
  }

  const handleData = (data: TformData) => {
    const formatedData = Array.of(data).map((e) => {
      return {
        couponCode: e.couponCode,
        creditCardCPF: e.creditCardCPF?.replace(/[^\d]/g, ""),
        creditCardCVV: e.creditCardCVV,
        creditCardExpirationDate: e.creditCardExpirationDate?.replace(
          /[^\d]/g,
          ""
        ),
        creditCardHolder: e.creditCardHolder,
        creditCardNumber: e.creditCardNumber?.replace(/[^\d]/g, ""),
        installments: Number(e.installments),
      }
    })[0]
    sentData(formatedData)
  }

  const handleClick = () => {
    router.push(`/`)
  }

  return (
    <S.Content>
      <button
        className="payment_return"
        aria-label="Botão que retorna para tela de planos"
        onClick={() => handleClick()}
      >
        <img
          src="/img/icon-arrow-chevron.svg"
          alt="voltar para Home"
          width="8"
          height="13"
        />
      </button>
      <S.Body>
        <form
          className="user_payment"
          action="#"
          onSubmit={handleSubmit((data) => handleData(data))}
        >
          <h5 className="user_payment__title">Estamos quase lá!</h5>
          <p className="user_payment__subtitle">
            Insira seus dados de pagamento abaixo:
          </p>
          <img src="/img/icon-pagamentos-info.svg" width="220" height="51" />
          <div className="user_payment__form--row">
            <label htmlFor="numero-cartao">Número do cartão</label>
            <input
              id="numero-cartao"
              type="tel"
              {...register("creditCardNumber")}
              value={formatCardNumber(card)}
              onChange={(e) => setCard(e.target.value)}
              placeholder="0000 0000 0000 0000"
              className="user_payment__form--numberCard"
              maxLength={19}
              minLength={19}
              required
            />
          </div>
          <div className="user_payment__form--row">
            <label htmlFor="validade">Validade</label>
            <input
              id="validade"
              type="tel"
              {...register("creditCardExpirationDate")}
              value={formatExpiration(expiration)}
              onChange={(e) => setExpiration(e.target.value)}
              placeholder="MM/AA"
              className="user_payment__form--expiration 0"
              maxLength={5}
              minLength={5}
              required
            />
          </div>
          <div className="user_payment__form--row">
            <label htmlFor="código-cartao">CVV</label>
            <input
              id="código-cartao"
              type="tel"
              {...register("creditCardCVV")}
              placeholder="000"
              className="user_payment__form--cvv 0"
              maxLength={3}
              minLength={3}
              required
            />
          </div>
          <div className="user_payment__form--row">
            <label htmlFor="nome-cartao">Nome impresso no cartão</label>
            <input
              id="nome-cartao"
              type="text"
              {...register("creditCardHolder")}
              placeholder="Seu nome"
              className="user_payment__form--nameCard 0"
              required
            />
          </div>
          <div className="user_payment__form--row">
            <label htmlFor="CPF">CPF</label>
            <input
              id="CPF"
              type="tel"
              {...register("creditCardCPF")}
              value={formatCPF(cpf)}
              onChange={(e) => setCpf(e.target.value)}
              placeholder="000.000.000-00"
              className="user_payment__form--cpf a 0"
              maxLength={14}
              minLength={14}
              required
            />
          </div>
          <div className="user_payment__form--row">
            <label htmlFor="cupom">Cupom</label>
            <input
              id="cupom"
              type="text"
              {...register("couponCode")}
              placeholder="Insira aqui"
              className="user_payment__form--cupom 0"
            />
          </div>
          <div className="user_payment__form--row">
            <label htmlFor="cupom">Número de parcelas</label>
            <select {...register("installments")} required>
              <option value="">Selecionar</option>
              <option value={plan.installments}>{plan.installments}</option>
            </select>
          </div>
          <button
            className="user_payment__form--button btn btn--primary"
            type="submit"
            aria-label="Botão que direciona para Confirmação de Compra"
          >
            Finalizar pagamento
          </button>
        </form>
      </S.Body>
    </S.Content>
  )
}

export default memo(PaymentTemplate)
