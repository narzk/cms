import style from "./heading.module.scss"
import Nav from "./Nav"
import pitt from "../icons/Pitt.png"
import { useLocation } from "react-router-dom"
import HamburgerMenu from "./HamburgerMenu"
import { useState } from "react"

export default function Header({ headingTitle }) {
  const [isClose, setIsClose] = useState(false)
  const toggle = () => setIsClose(!isClose)
  const { pathname } = useLocation()
  const isHomeSelected = !(
    pathname.includes("/about") ||
    pathname.includes("/courseRequirements") ||
    pathname.includes("/admissions") ||
    pathname.includes("/people")
  )
  return (
    <div className={style.heading}>
      <div className={style.heading_left}>
        <div className={style.heading_container}>
          <img className={style.heading_logo} src={pitt} />
          <header className={style.heading_title}>{headingTitle}</header>
        </div>
        <div className={style.heading_textTop}>
          COMPUTATIONAL MODELING & SIMULATION PHD PROGRAM
        </div>
        <div className={style.heading_text}>
          Increasing the potential to address creative and productive research
          challenges through computational modeling
        </div>
      </div>
      <div className={style.nav}>
        <Nav
          navItems={[
            { to: "/", title: "Home", selected: isHomeSelected },
            {
              to: "/about",
              title: "About",
              selected: pathname.includes("/about"),
            },
            {
              to: "/courseRequirements",
              title: "Course Requirements",
              selected: pathname.includes("/courseRequirements"),
            },
            {
              to: "/admissions",
              title: "Admissions",
              selected: pathname.includes("/admissions"),
            },
            {
              to: "/people",
              title: "People",
              selected: pathname.includes("/people"),
            },
          ]}
        />
      </div>
      {isClose && (
        <div className={style.nav_column}>
          <span onClick={toggle}>x</span>
          <Nav
            navItems={[
              { to: "/", title: "Home", selected: isHomeSelected },
              {
                to: "/about",
                title: "About",
                selected: pathname.includes("/about"),
              },
              {
                to: "/courseRequirements",
                title: "Course Requirements",
                selected: pathname.includes("/courseRequirements"),
              },
              {
                to: "/admissions",
                title: "Admissions",
                selected: pathname.includes("/admissions"),
              },
              {
                to: "/people",
                title: "People",
                selected: pathname.includes("/people"),
              },
            ]}
            isMobile
          />
        </div>
      )}
      <HamburgerMenu handleDropShadowOpen={toggle} />
    </div>
  )
}
