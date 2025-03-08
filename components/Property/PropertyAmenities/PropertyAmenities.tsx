import React from "react"
import styles from "./PropertyAmenities.module.css"

const PropertyAmenities = ({ amenities }: { amenities: string[] }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Property Amenities</h3>
      <div className={styles.grid}>
        {amenities.map((amenity, index) => (
          <p key={index} className={styles.item}>
            {amenity}
          </p>
        ))}
      </div>
    </div>
  )
}

export default PropertyAmenities
