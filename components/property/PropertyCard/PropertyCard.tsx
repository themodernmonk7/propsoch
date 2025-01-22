import Image from "next/image"
import { PropertyTypes } from "@/types"
import { FaHeart, FaStar } from "react-icons/fa"
import { FiEye } from "react-icons/fi"
import Link from "next/link"
import { useSlider } from "@/hooks/useSlider"
import { useEffect, useState } from "react"
import styles from "./PropertyCard.module.css"

interface PropertyCardProps {
  property: PropertyTypes
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [like, setLike] = useState(false)
  const images: string[] = property.images
  const { handleTouchStart, handleTouchMove, handleTouchEnd, index, setIndex } =
    useSlider(images)

  useEffect(() => {
    const savedPropertiesString = localStorage.getItem("properties")
    const savedProperties: PropertyTypes[] = JSON.parse(
      savedPropertiesString || "[]"
    )
    const alreadyExists = savedProperties.some(
      (p: PropertyTypes) => p.id === property.id
    )
    setLike(alreadyExists)
  }, [property.id])

  const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    const propertyKey = "properties"
    const savedPropertiesString = localStorage.getItem(propertyKey)
    let savedProperties: PropertyTypes[] = JSON.parse(
      savedPropertiesString || "[]"
    )

    const alreadyExists = savedProperties.some(
      (p: PropertyTypes) => p.id === property.id
    )

    if (alreadyExists) {
      savedProperties = savedProperties.filter((p) => p.id !== property.id)
    } else {
      savedProperties.push(property)
    }

    localStorage.setItem(propertyKey, JSON.stringify(savedProperties))
    setLike(!alreadyExists)
  }

  return (
    <article className={styles.container}>
      <Link href={`/${property.id}`}>
        <div
          className={styles.container}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Image
            src={images[index]}
            alt={property.title}
            width={100}
            height={300}
            className={styles.image}
          />

          <div className={styles.labelContainer}>
            <span
              className={`${styles.label} ${
                property.views > 20000 ? styles.visible : styles.invisible
              }`}
            >
              Most Liked
            </span>
            <button onClick={handleLike}>
              <FaHeart
                size={20}
                fill={like ? "red" : "#A9A9A9"}
                title={like ? "Remove from wishlist" : "Add to wishlist"}
              />
            </button>
          </div>

          <div className={styles.dotContainer}>
            {images.map((_, dotIndex) => (
              <span
                key={dotIndex}
                onClick={() => setIndex(dotIndex)}
                className={`${styles.dot} ${
                  index === dotIndex ? styles.dotActive : styles.dotInactive
                }`}
              ></span>
            ))}
          </div>
        </div>

        <div className={styles.detailsContainer}>
          <div className={styles.infoRow}>
            <div className={styles.viewsContainer}>
              <span>
                <FiEye size={10} />
              </span>
              <span className={styles.viewsText}>
                {property.views.toLocaleString()}
              </span>
            </div>
            <div
              className={`${styles.ratingContainer} ${
                property.rating > 4.8
                  ? styles.ratingHigh
                  : property.rating < 3
                  ? styles.ratingLow
                  : styles.ratingMedium
              }`}
            >
              <span className={styles.starIcon}>
                <FaStar size={10} />
              </span>
              <span>{property.rating.toFixed(1)}</span>
            </div>
          </div>
          <div>
            <p className={styles.title}>{property.title}</p>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default PropertyCard
