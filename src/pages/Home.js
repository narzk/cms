import Header from "../components/Header";
import List from "../components/List";
import Sections from "../components/Sections";
import style from "./style.module.scss";

import {
  BIOENGINEERING,
  BIOLOGICAL_SCIENCE,
  CHEMICAL_PETROLEUM,
  CHEMISTRY,
  CIVIL,
  COMPUTER,
  ECONOMICS,
  ECONOMICSI,
  ECONOMICSII,
  GEOLOGY,
  MATH,
  MECHANICAL,
  NUMERICAL_METHODS,
  PHYSICS,
  PHYSICSI,
  PHYSICSII,
  PHYSICSIII,
  PHYSICSIV,
  PSYCHOLOGY,
  SCIENCE_ENGINEERING,
  SCIENTIFIC_COMPUTING,
  STATISTICS,
} from "../contents";
import SubHeader from "../components/SubHeader";

export default function Home() {
  return (
    <div className={style.container}>
      <Header headingTitle="Requirements" />
      <SubHeader headingTitle="Core Requirements" isSub/>

      <Sections
        heading={"Science/Engineering"}
        description="Science/Engineering"
        listItems={SCIENCE_ENGINEERING}
        hasMultiList
      />
      <SubHeader headingTitle="Concentration Areas" isSub/>

      <Sections
        heading={"Bioengineering"}
        description="Students doing a concentration in Bioengineering need to take a minimum
        of 12 credits from the following list. All listed courses are 3 credits
        except MS CMP 3780 which is 2 credits and BIOE 2095 which can be for
        one, two, or three credits."
        listItems={BIOENGINEERING}
      />
      <Sections
        heading={"Biological Sciences"}
        description="Students doing a concentration in Biological Sciences are required to
        take all of the following 2 credit courses. (BIOSC 2011-2013 are taken
        together in one term and BIOSC 2021-2023 are taken together in the
        following term.) Each of these courses is 3 credits."
        listItems={BIOLOGICAL_SCIENCE}
      />
      <Sections
        heading={"Chemical and Petroleum Engineering"}
        description="Students doing a concentration in Chemical and Petroleum Engineering should take the following four courses.  Each of these courses is 3 credits."
        listItems={CHEMICAL_PETROLEUM}
      />
      <Sections
        heading={"Chemistry"}
        description="Students doing a concentration in Chemistry must take two core courses, one additional 3-credit chemistry graduate course, and 3 credits of directed study.  Courses that meet the core course requirement are listed below.  Each of these courses is 3 credits."
        listItems={CHEMISTRY}
      />
      <Sections
        heading={"Civil and Environmental Engineering"}
        description="Students doing a concentration in Civil and Environmental Engineering should take four courses from the following list of courses.  Each of these courses is 3 credits."
        listItems={CIVIL}
      />
      <Sections
        heading={"Computer Science"}
        description="Students doing a concentration in Computer Science should take four courses from the following list of courses. Each of these courses is 3 credits."
        listItems={COMPUTER}
      />
      <Sections
        heading={"Economics"}
        description="Students doing a concentration in Economics, should choose one of the following course sequences.  Each of these courses is 3 credits."
        listItems={ECONOMICS}
        hasMultiList
      />

      <Sections
        heading={"Geology and Environmental Sciences"}
        description="Students doing a concentration in Geology and Environmental Sciences should choose four courses from the following list.  Each of these courses is 3 credits."
        listItems={GEOLOGY}
      />
      <Sections
        heading={"Mathematics"}
        description="Students doing a concentration in Mathematics should choose four courses from the following list.  Each of these courses is 3 credits."
        listItems={MATH}
      />

      <Sections
        heading={"Mechanical Engineering"}
        description="Students doing a concentration in Mechanical Engineering should take four courses from the following list.  Each of these courses is 3 credits."
        listItems={MECHANICAL}
      />
      <Sections
        heading={"Physics and Astronomy"}
        description="Students choosing to do a concentration in Physics will choose from one of the following five thematic areas.  Example course groupings within each thematic area are also listed.  Exact courses taken by each students will be determined by the student and his/her advisor.  In some cases the advisory may require more than four Physics courses to fulfill the concentration requirement.  Each of these courses is 3 credits, with the exception of PHYS 2555, which is 4 credits."
        listItems={PHYSICS}
        hasMultiList
      />
  

      <Sections
        heading={"Psychology"}
        description="Students doing a concentration in Psychology need to complete the following courses.  Each of these courses is 3 credits."
        listItems={PSYCHOLOGY}
      />
      <Sections
        heading={"Statistics"}
        description="Students doing a concentration in Statistics need to complete the following courses.  Each of these courses is 3 credits."
        listItems={STATISTICS}
      />
    </div>
  );
}
