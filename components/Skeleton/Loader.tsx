import styles from "./Loader.module.css"

type LoaderProps = {
  count: number
}

const Loader = ({ count }: LoaderProps) => {
  const loaders = Array.from({ length: count })

  return (
    <section className={styles.loaderContainer}>
      {loaders.map((_, index) => (
        <div className={styles.loaderItem} key={index}>
          <div className={styles.loaderImage}>
            <div className={styles.loaderHeader}>
              <div className={styles.loaderText}></div>
              <div className={styles.loaderIcon}></div>
            </div>
          </div>
          <span className={styles.shineEffect}></span>
        </div>
      ))}
    </section>
  )
}

export default Loader
