import Image from "next/image"
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Image src="/propsoch.png" width={111} height={25} alt="propsoch" />
    </div>
  )
}

export default Navbar
