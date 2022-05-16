import { NextSeo } from "next-seo"
// import dynamic from "next/dynamic"

import Plans from "components/Plans"

import * as S from "./styles"
import { TplansProps } from "types"

// const Map = dynamic(() => import("components/Map"), { ssr: false })

export default function HomeTemplate({ plans }: TplansProps) {
  return (
    <>
      <NextSeo
        title="Iugu System"
        description="A simple project to show a page of plans to choose, simulate a checkout page and in the end, confirmation page."
        canonical="https://iugu-system.vercel.app/"
        openGraph={{
          url: "https://iugu-system.vercel.app/",
          title: "Iugu System",
          description:
            "A simple project to show a page of plans to choose, simulate a checkout page and in the end, confirmation page.",
          images: [
            {
              url: "https://iugu-system.vercel.app/img/cover.png",
              width: 1280,
              height: 720,
              alt: "Iugu System",
            },
          ],
          site_name: "Iugu System",
        }}
      />
      <S.Header>
        <img className="header_logo" src="/img/icon-logo.svg" alt="Logo azul" />
        <div className="header_informations">
          <h2 className="plans_title">Confira o seu plano:</h2>
          <p className="plans_mail">david.souza@mail.com</p>
        </div>
      </S.Header>
      <Plans plans={plans} />
      <S.Footer>
        <div className="plans_info">
          <span>Sobre a cobrança </span>{" "}
          <img src="/img/question.svg" alt="" width="13" />
        </div>
      </S.Footer>
    </>
  )
}
