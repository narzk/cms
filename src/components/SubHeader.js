import style from "./heading.module.scss"
import Nav from "./Nav"

export default function SubHeader({ headingTitle }) {
  return (
    <div className={style.subHeading}>
      <header className={style.subHeading_title}>{headingTitle}</header>
    </div>
  )
}
