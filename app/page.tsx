"use client"

import PropertyCard from "@/components/property/PropertyCard"
import { ITEMS_PER_PAGE, LOAD_DELAY } from "@/constants/constants"
import { useFetch } from "@/hooks/useFetch"
import { PropertyTypes, Status } from "@/types"
import { useCallback, useEffect, useState } from "react"
import { throttleFunction } from "./lib/utils"
import Loader from "@/components/Skeleton/Loader"
import styles from "./page.module.css"

export default function Home() {
  const { properties, status } = useFetch()
  const [pagination, setPagination] = useState(ITEMS_PER_PAGE)
  const [isLoading, setIsLoading] = useState(false)

  const event = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >=
      window.document.body.scrollHeight - 50
    ) {
      if (pagination >= properties.length) return
      setPagination((prev) => prev + ITEMS_PER_PAGE)
      setIsLoading(true)
    }
  }, [pagination, properties])

  const optimizedScrollEvent = throttleFunction(event, LOAD_DELAY)

  useEffect(() => {
    window.addEventListener("scroll", optimizedScrollEvent)
    return () => {
      window.removeEventListener("scroll", optimizedScrollEvent)
      setIsLoading(false)
    }
  }, [optimizedScrollEvent])

  if (status === Status.PENDING) {
    return (
      <div>
        <Loader count={6} />{" "}
      </div>
    )
  }

  if (status === Status.REJECTED) {
    return <div>Error</div>
  }

  return (
    <section className={styles.container}>
      {properties
        .slice(0, pagination)
        ?.map((property: PropertyTypes, index: number) => {
          return <PropertyCard key={index} property={property} />
        })}
      {isLoading ? <Loader count={4} /> : null}
    </section>
  )
}
