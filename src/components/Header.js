import style from "./heading.module.scss";
import Nav from "./Nav";
import pitt from "../icons/Pitt.png";

export default function Header({ headingTitle }) {
  return (
    <div className={style.heading}>
      <div className={style.heading_left}>
        <div className={style.heading_container}>
          <img className={style.heading_logo} src={pitt} />
          <header className={style.heading_title}>{headingTitle}</header>
        </div>
        <div>COMPUTATIONAL MODELING & SIMULATION PHD PROGRAM</div>
        <div className={style.heading_text}>
          Increasing the potential to address creative and productive research
          challenges through computational modeling
        </div>
      </div>
      <Nav
        navItems={[
          { to: "/", title: "Home" },
          { to: "/about", title: "About" },
          { to: "/courseRequirements", title: "Course Requirements" },
          { to: "/admissions", title: "Admissions" },
          { to: "/people", title: "People" },
        ]}
      />
    </div>
  );
}
