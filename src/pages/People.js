import Header from "../components/Header"
import FacultyItems from "../components/FacultyItems"
import {
  bio_faculty,
  chem_faculty,
  chem_pet_faculty,
  cs_faculty,
  eco_faculty,
  geo_faculty,
  Industrial_faculty,
  math_faculty,
  mech_faculty,
  phy_faculty,
  stat_faculty,
} from "../contents/faculty"

import style from "./style.module.scss"

export default function People() {
  return (
    <div className={style.container}>
      <Header headingTitle="People" />

      <FacultyItems description="Bioengineering" listItems={bio_faculty} />
      <FacultyItems
        description="Biological Sciences"
        listItems={[{ name: "Durrant, Jacob", to: "http://durrantlab.com/" }]}
      />
      <FacultyItems
        description="Chemical and Petroleum Engineering"
        listItems={chem_pet_faculty}
      />
      <FacultyItems description="Chemistry" listItems={chem_faculty} />
      <FacultyItems
        description="Civil and Environmental Engineering"
        listItems={[
          { name: "Brigham, John", to: "http://www.pitt.edu/~brigham/" },
        ]}
      />
      <FacultyItems description="Computer Science" listItems={cs_faculty} />
      <FacultyItems
        heading={"Faculty"}
        description="Economics"
        listItems={eco_faculty}
      />
      <FacultyItems
        description="Geology and Environmental Science"
        listItems={geo_faculty}
      />
      <FacultyItems
        description="Industrial Engineering"
        listItems={Industrial_faculty}
      />
      <FacultyItems description="Mathematics" listItems={math_faculty} />
      <FacultyItems
        description="Mechanical Engineering"
        listItems={mech_faculty}
      />
      <FacultyItems
        description="Physics and Astronomy"
        listItems={phy_faculty}
      />
      <FacultyItems description="Statistics" listItems={stat_faculty} />
    </div>
  )
}
