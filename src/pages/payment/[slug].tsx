import { GetStaticProps } from "next"
import { useRouter } from "next/dist/client/router"
import PaymentTemplate from "templates/Payment"
import { TpaymentProps, TresponsePlan } from "types"

export default function Payment(plan: TpaymentProps) {
  const router = useRouter()

  /* retorna um loading , ou qualquer coisa  enquanto está sendo criado */
  if (router.isFallback) return null
  return (
    <>
      <PaymentTemplate plan={plan} />
    </>
  )
}

/* 
  When exporting a function called getStaticPaths from a page that uses Dynamic Routes, Next.js will statically pre-render all the paths specified by getStaticPaths.
*/

export async function getStaticPaths() {
  try {
    const res = await fetch(
      "https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/offer"
    )
    const plans = await res.json()

    const paths = plans.map(({ id }: TresponsePlan) => {
      return {
        params: { slug: id.toString() },
      }
    })

    return { paths, fallback: true }
  } catch (err) {
    return {
      props: {},
    }
  }
}

/* 
  Exporting a function called getStaticProps will pre-render a page at build time using the props returned from the function:
*/
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    "https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/offer"
  ).catch((err) => console.error(err))
  const data = await res?.json()
  const id = params?.slug?.toString().split("-").pop()
  const plan = data.find((e: TresponsePlan) => e.id === Number(id))

  if (!plan) return { notFound: true }

  return {
    props: {
      id: plan.id,
      period: plan.period,
      description: plan.description,
      priceWithDiscount: `R$ ${(plan.fullPrice - plan.discountAmmount).toFixed(
        2
      )}`,
      installments: plan.installments,
      installmentsValue: `R$ ${(
        (plan.fullPrice - plan.discountAmmount) /
        plan.installments
      ).toFixed(2)}`,
      valuePrice: plan.fullPrice - plan.discountAmmount,
    },
  }
}

/****
 * Next possui três métodos muito imporantes
 *
 * getStaticPaths -> serve para gerar urls em build time: /about /trip e etc
 * getStaticProps -> serve para buscar dados da página (props) em build time, pq é estático
 * getServerSideProps -> serve para buscar dados da página (props) em runtime, roda toda a requisição ao bater na rota - bundle fica no server
 * getInitialProps - hoje menos usado - serve para buscar dados da página (props) em runtime, roda toda a requisição ao bater na rota - bundle tbm vem pro client - faz um
 * hydrate, utilizando props no cliente. Está entrando em desuso
 *
 *
 **/
