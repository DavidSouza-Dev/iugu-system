// import { GetStaticProps } from "next"
import { Context } from "provider/context"
import { useContext } from "react"
import ConfirmationTemplate from "templates/Confirmation"

export default function Confirmation() {
  const { dataConfirmation } = useContext(Context)

  return (
    <>
      <ConfirmationTemplate plan={dataConfirmation} />
    </>
  )
}
