import Header from "../components/Header";
import Sections from "../components/Sections";
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
} from "../contents/faculty";

import style from "./style.module.scss";

export default function People() {
  return (
    <div className={style.container}>
      <Header headingTitle="People" />

      <Sections
        heading={"Faculty"}
        description="Bioengineering"
        listItems={bio_faculty}
      />
      <Sections
        heading={"Faculty"}
        description="Biological Sciences"
        listItems={["Durrant, Jacob"]}
      />
      <Sections
        heading={"Faculty"}
        description="Chemical and Petroleum Engineering"
        listItems={chem_pet_faculty}
      />
      <Sections
        heading={"Faculty"}
        description="Chemistry"
        listItems={chem_faculty}
      />
      <Sections
        heading={"Faculty"}
        description="Civil and Environmental Engineering"
        listItems={["Brigham, John"]}
      />
      <Sections
        heading={"Faculty"}
        description="Computer Science"
        listItems={cs_faculty}
      />
      <Sections
        heading={"Faculty"}
        description="Economics"
        listItems={eco_faculty}
      />
      <Sections
        heading={"Faculty"}
        description="Geology and Environmental Science"
        listItems={geo_faculty}
      />
      <Sections
        heading={"Faculty"}
        description="Industrial Engineering"
        listItems={Industrial_faculty}
      />
      <Sections
        heading={"Faculty"}
        description="Mathematics"
        listItems={math_faculty}
      />
      <Sections
        heading={"Faculty"}
        description="Mechanical Engineering"
        listItems={mech_faculty}
      />
      <Sections
        heading={"Faculty"}
        description="Physics and Astronomy"
        listItems={phy_faculty}
      />
      <Sections
        heading={"Faculty"}
        description="Statistics"
        listItems={stat_faculty}
      />
      
    </div>
  );
}
