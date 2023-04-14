import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import CourseRequirements from "./pages/CourseRequirements";
import Admissions from "./pages/Admissions";
import People from "./pages/People";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="courseRequirements" element={<CourseRequirements />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="people" element={<People />} />
      </Routes>
    </div>
  );
}

export default App;
