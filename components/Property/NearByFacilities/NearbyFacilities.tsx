import styles from "./NearbyFacilities.module.css"

const NearbyFacilities = () => {
  return (
    <div className={styles.container}>
      <p className={styles.item}>2 Hospitals</p>
      <p className={styles.item}>4 Gas Stations</p>
      <p className={styles.item}>2 Schools</p>
    </div>
  )
}

export default NearbyFacilities
