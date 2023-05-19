import Header from "../components/Header"

import style from "./style.module.scss"

export default function About() {
  const fields = [
    " Bioengineering",
    "Biological Sciences",
    "Chemical and Petroleum Engineering",
    "Chemistry",
    "Civil and Environmental Engineering",
    "Computer Science",
    "Economics",
    "Geology and Environmental Science",
    "Industrial Engineering",
    "Mathematics",
    "Mechanical Engineering and Materials Science",
    "Physics and Astronomy",
    "Psychology",
    "Statistics",
  ]
  return (
    <div style={{ position: "relative" }}>
      <Header headingTitle="About" />
      <div className={style.container}>
        <section className={style.paragraph}>
          <p>
            The Computational Modeling and Simulation Program at the University
            of Pittsburgh provides its graduate students with an integrated
            program of creative, independent research, course work, and
            teaching. Our students pursue research in diverse areas including:
          </p>
          <ul>
            {fields.map((field) => (
              <li>{field}</li>
            ))}
          </ul>
          <p>
            Students in the CMS PhD program benefit from the computational
            resources of in the University’s Center for Research Computing, and
            they benefit from workshops offered by the Center and interaction
            with its consultants. An extensive seminar series exposes students
            and faculty alike to the world’s leading scientists and their latest
            research. Pitt’s outstanding research and placement resources,
            coupled with the university’s commitment to being one of the finest
            and most productive universities in the world, uniquely positions to
            help you meet your objectives.
          </p>
        </section>
      </div>
    </div>
  )
}
