import { Link } from "react-router-dom";
import style from "./heading.module.scss";

export default function Nav({ navItems }) {
  return (
    <nav>
      {navItems.map((navItem) => (
        <Link to={navItem.to} className={style.item}>{navItem.title}</Link>
      ))}
    </nav>
  );
}
