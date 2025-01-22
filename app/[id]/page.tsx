import type { Metadata, ResolvingMetadata } from "next"
import path from "path"
import fs from "fs"
import {
  NearbyFacilities,
  PropertyAmenities,
  PropertyHeader,
  PropertyImage,
  PropertyLocation,
} from "../../components/Property"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params

  const filePath = path.join(process.cwd(), "public", "propertyData.json")

  const jsonData = fs.readFileSync(filePath, "utf-8")
  const properties = JSON.parse(jsonData)

  const property = properties.find(
    (property: { id: number }) => property.id.toString() === id
  )

  if (!property) {
    throw new Error("Property not found")
  }

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: `${property.title}, ${property.city} | Reviews | Price | Floor Plans | Photos | Master Plans | Brochure | Amenities | Report | Connectivity`,
    openGraph: {
      images: [property.images[0], ...previousImages],
    },
  }
}

async function fetchPropertyData(id: string) {
  const filePath = path.join(process.cwd(), "public", "propertyData.json")
  const jsonData = fs.readFileSync(filePath, "utf-8")
  const properties = JSON.parse(jsonData)

  const property = properties.find(
    (property: { id: number }) => property.id.toString() === id
  )

  if (!property) {
    notFound()
  }

  return property
}

export default async function Page({ params }: Props) {
  const { id } = await params
  const property = await fetchPropertyData(id)

  return (
    <section className="px-4 mt-7 mb-40">
      <PropertyImage property={property} />
      <div className="space-y-5">
        <PropertyHeader property={property} />
        <PropertyLocation />
        <NearbyFacilities />
        <PropertyAmenities amenities={property.propertyAmenities} />
      </div>
    </section>
  )
}
