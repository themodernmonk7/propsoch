import Image from "next/image"
import styles from "./PropertyImage.module.css"

interface Property {
  images: string[]
  title: string
  views: number
}

const PropertyImage = ({ property }: { property: Property }) => {
  return (
    <div className={styles.container}>
      <Image
        src={property.images[0]}
        width={400}
        height={486}
        alt={property.title}
        className={styles.image}
        style={{ objectFit: "cover" }}
        priority={true}
      />
      <div className={styles.labelContainer}>
        <span
          className={`${styles.label} ${
            property.views > 20000 ? styles.visible : styles.invisible
          }`}
        >
          Most Liked
        </span>
      </div>
    </div>
  )
}

export default PropertyImage
