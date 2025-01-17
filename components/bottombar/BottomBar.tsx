"use client"

import { navLinks } from "@/constants/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { JSX } from "react"
import styles from "./BottomBar.module.css"

type navLinkTypes = {
  id: number
  title: string
  url: string
  icon: JSX.Element
}

const BottomBar = () => {
  const pathname = usePathname()

  return (
    <section className={styles.bottomBar}>
      {navLinks.map((link: navLinkTypes) => {
        const linkClass =
          pathname === link.url ? styles.activeLink : styles.inactiveLink

        return (
          <ul key={link.id} className={styles.linkList}>
            <Link className={`${styles.linkItem} ${linkClass}`} href={link.url}>
              <span>{link.icon}</span>
              {link.title}
            </Link>
          </ul>
        )
      })}
    </section>
  )
}

export default BottomBar
