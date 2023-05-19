import { Link } from "react-router-dom"
import style from "./heading.module.scss"

export default function Nav({ navItems, isMobile }) {
  return (
    <nav className={isMobile && style.nav_container}>
      {navItems.map((navItem) => (
        <Link
          to={navItem.to}
          className={`${style.item} ${navItem.selected && style.item_active}`}
        >
          {navItem.title}
        </Link>
      ))}
    </nav>
  )
}
