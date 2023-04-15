import { useState } from "react"
import ChevronDown from "../icons/ChevronDown"
import ChevronUp from "../icons/ChevronUp"
import FacultyItem from "./FacultyItem"
import style from "./section.module.scss"
export default function FacultyItems({ description, listItems }) {
  const [isClose, setIsClose] = useState(true)
  const toggle = () => setIsClose(!isClose)
  return (
    <div className={style.section} onClick={toggle}>
      <div className={style.section_description}>
        <h2 className={style.section_header}>{description}</h2>
        <div>
          {isClose ? (
            <a onClick={toggle} className={style.chevron}>
              <ChevronDown />
            </a>
          ) : (
            <a onClick={toggle} className={style.chevron}>
              <ChevronUp />
            </a>
          )}
        </div>
      </div>
      {console.log({ listItems })}
      {isClose ? "" : <FacultyItem listItems={listItems} />}
    </div>
  )
}
