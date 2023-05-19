import Header from "../components/Header"
import SubHeader from "../components/SubHeader"

import style from "./style.module.scss"

export default function CourseRequirements() {
  const courses = [
    "Two courses (3 credits each) in Numerical Methods",
    "Two courses (3 credits each) in Scientific Computing/Programming",
    "Two courses (3 credits each) from a participating department outside Computer Science, Math, and Statistics, in the School of Arts and Sciences or the Swanson School of Engineering",
    "12 credits in a concentration area in a participating department in the School of Arts and Sciences or in the Swanson School of Engineering",
  ]
  return (
    <div style={{ position: "relative" }}>
      <Header headingTitle="Course Requirements" />
      <div className={style.container}>
        <section className={style.paragraph}>
          <ul className={style.list}>
            {courses.map((course) => (
              <li>{course}</li>
            ))}
          </ul>
          <p>
            A minimum of 30 credits of graduate level courses from categories
            <span>I-IV</span>
            will be required. There can be overlap in courses satisfying
            category
            <span>IV</span>
            and those satisfying the category <span>I, II and III</span>
            requirements.
          </p>
          <p>
            It is anticipated that students entering the program will be able to
            complete the six core courses in categories<span>I – III</span>
            in their first year and the concentration requirements in the second
            year.
          </p>
        </section>

        <SubHeader headingTitle="University Credit Requirement" />
        <p className={style.paragraph}>
          All students in the program must satisfy the University’s requirement
          of a minimum of <b>72</b> credits for a PhD. At least <b>30</b> of
          these credits will be satisfied by the core program, including the
          concentration area, described above. The remaining credits will be met
          by directed study (i.e., research).
        </p>

        <SubHeader headingTitle="Preliminary Exam" />
        <p className={style.paragraph}>
          A student will satisfy the preliminary exam requirements by passing{" "}
          <b>(grade B or higher)</b> the six courses in areas <span>I-III</span>{" "}
          described above. In the case that a student received one grade below B
          in one of the three main areas, he/she can counter that with a grade
          of B or above in an additional approved course in that area. If a
          student receives two grades below B, he/she will no longer be able to
          continue in the program. Students who do not meet these requirements
          but who have an overall grade average of B or better, have the option
          of doing a literature-based Master’s Thesis. All Students receiving a
          Master’s degree, must meet the minimum requirement of <b>30</b>{" "}
          credits. This includes six courses in areas <span>I-III</span> listed
          above, and 12 credits in area <span>IV</span>. Up to six credits can
          be met in section <span>IV</span> by Thesis Research credits.
        </p>
        <SubHeader headingTitle="Comprehensive Exam" />
        <p className={style.paragraph}>
          The comprehensive exam will be taken by the end of the student’s
          seventh semester at the University of Pittsburgh, and will focus on
          the progress that the student has made to date on his/her research.
          The comprehensive exam will consist of a written report prepared by
          the student on his/her research, followed by an oral examination. The
          exam will be administered by a committee of four faculty members, at
          least two of whom (including the student’s advisor) will be from the
          Department of the student’s concentration, and at least one of whom
          will be from an outside department. If a student does not pass the
          comprehensive exam, he/she will have the option of continuing in the
          program for another semester, completing the minimum required{" "}
          <b> 30</b> credits, and submitting a Master’s thesis based on
          independent research. The student’s committee will decide on whether
          the thesis warrants awarding the Master’s degree.
          Dissertations/Theses: Every graduate student has to write a thesis or
          dissertation before being awarded a MS or PhD degree. Browse our
          publications section for recently posted theses, dissertations, and
          presentation. All theses and dissertations are submitted online. Visit
          the EDT web site for more information on the process.
        </p>
        <SubHeader headingTitle="Advising/Choosing a Plan of Study" />
        <section className={style.paragraph}>
          <p>
            Most students entering the program will choose an advisor (with the
            faculty member’s consent) at the time they are accepted. In the case
            that a student does not choose an advisor when admitted, the student
            will be assigned a temporary advisor in the department of the
            concentration. In such cases, the student will choose a permanent
            advisor by the end of the first term in the program. The choice of
            permanent advisor is made with the consent of the faculty member,
            who then agrees to support the student after the first year in the
            program.
          </p>
          <p>
            The plan of study will be designed in consultation with the advisor,
            with approval of the Director of the program. Because the students
            entering the program will have very diverse backgrounds, particular
            care will be exercised to make sure that they have the prerequisites
            to be successful in the core courses that they choose to take. By
            the end of the first year, each participating student will choose a
            four-person Comprehensive Committee, the make-up of which is
            described above.
          </p>
          <p>For a complete list of course requirements click here</p>
        </section>
      </div>
    </div>
  )
}
