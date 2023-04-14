import { useState } from "react";
import ChevronDown from "../icons/ChevronDown";
import ChevronUp from "../icons/ChevronUp";
import List from "./List";
import MultiList from "./MultiList";
import style from "./section.module.scss";
export default function Sections({
  heading,
  description,
  listItems,
  hasMultiList = false,
}) {
  const [isClose, setIsClose] = useState(true);
  const toggle = () => setIsClose(!isClose);
  return (
    <div className={style.section} onClick={toggle}>
      <h2 className={style.section_header}>{heading}</h2>
      <div className={style.section_description}>
        <p className={style.section_description}>{description}</p>{" "}
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
      {isClose ? (
        ""
      ) : hasMultiList ? (
        <MultiList listItems={listItems} />
      ) : (
        <List listItems={listItems} />
      )}
    </div>
  );
}
