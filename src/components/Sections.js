import { useState } from "react"
import ChevronDown from "../icons/ChevronDown"
import ChevronUp from "../icons/ChevronUp"
import List from "./List"
import MultiList from "./MultiList"
import style from "./section.module.scss"
export default function Sections({
  heading,
  description,
  listItems,
  hasMultiList = false,
}) {
  const [isClose, setIsClose] = useState(true)
  const toggle = () => setIsClose(!isClose)
  return (
    <div className={style.section} onClick={toggle}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2 className={style.section_header}>{heading}</h2>
        <div className={style.section_chevron_mobile}>
          {isClose ? (
            <a onClick={toggle} className={style.chevron}>
              <ChevronDown color={"black"} />
            </a>
          ) : (
            <a onClick={toggle} className={style.chevron}>
              <ChevronUp color={"black"} />
            </a>
          )}
        </div>
      </div>
      <div className={style.section_description}>
        <p className={`${isClose && style.section_description_paragraph}`}>
          {description}
        </p>{" "}
        <div className={style.section_chevron}>
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
      {isClose ? (
        ""
      ) : hasMultiList ? (
        <MultiList listItems={listItems} />
      ) : (
        <List listItems={listItems} />
      )}
    </div>
  )
}
