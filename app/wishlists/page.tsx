"use client"

import PropertyCard from "@/components/Property/PropertyCard/PropertyCard"
import { PropertyTypes } from "@/types"
import Link from "next/link"
import { useEffect, useState } from "react"
import styles from "./page.module.css"

export default function Wishlists() {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    const allProperties = localStorage.getItem("properties")
    if (allProperties) {
      setProperties(JSON.parse(allProperties))
    }
  }, [])

  return (
    <>
      {properties.length === 0 ? (
        <div className={styles.container}>
          <p className={styles.message}>
            Looks like your Wishlist needs some love!
          </p>
          <Link className={styles.button} href={"/"}>
            Add to Wishlist
          </Link>
        </div>
      ) : (
        <section className={styles.gridContainer}>
          {properties.map((property: PropertyTypes, index: number) => (
            <PropertyCard key={index} property={property} />
          ))}
        </section>
      )}
    </>
  )
}
