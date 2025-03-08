import { MdLocationOn } from "react-icons/md"
import styles from "./PropertyHeader.module.css"
import { convertToCr } from "@/lib/utils"

interface Property {
  title: string
  location: string
  price: number
}

const PropertyHeader = ({ property }: { property: Property }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{property.title}</h2>
        <div className={styles.locationContainer}>
          <span>
            <MdLocationOn size={20} fill="#1F4C6B" />
          </span>
          <span className={styles.locationText}>{property.location}</span>
        </div>
      </div>
      <div className={styles.priceContainer}>
        <span className={styles.price}>{convertToCr(property.price)}</span>
        <span className={styles.emiText}>EMI Available</span>
      </div>
    </div>
  )
}

export default PropertyHeader
