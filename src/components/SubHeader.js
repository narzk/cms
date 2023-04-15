import style from "./heading.module.scss"

export default function SubHeader({ headingTitle }) {
  return (
    <div className={style.subHeading}>
      <header className={style.subHeading_title}>{headingTitle}</header>
    </div>
  )
}
