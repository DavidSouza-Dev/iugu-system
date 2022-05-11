import { NextSeo } from "next-seo"
import dynamic from "next/dynamic"

import LinkWrapper from "components/LinkWrapper"

import { InfoOutline } from "@styled-icons/evaicons-outline/InfoOutline"
import { MapProps } from "components/Map"

const Map = dynamic(() => import("components/Map"), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Our Trips"
        description="A simple project to show in a map the places that I went and show more informations and photos when clicked."
        canonical="https://our-trips.david.souza.com.br"
        openGraph={{
          url: "https://our-trips.david.souza.com.br",
          title: "Our Trips",
          description:
            "A simple project to show in a map the places that I went and show more informations and photos when clicked.",
          images: [
            {
              url: "https://our-trips.david.souza.com.br/img/cover.png",
              width: 1280,
              height: 720,
              alt: "Our Trips",
            },
          ],
          site_name: "Our Trips",
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="about" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
