import { Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import My_skills from "./Pages/My_skills";
// import Contact from "./Pages/Contact";
import CommonNav from "./Common/CommonNav";
import Footer from "./Common/Footer";

function App() {
  return (
    <div className=" overflow-hidden vh-100">
      <div className="commonnav">
        <CommonNav />
      </div>
      <div className="content">
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="my_skills" element={<My_skills />} />
          
          {/* <Route path="contact" element={<Contact />} /> */}
        </Routes>
        {/* <Contact/>  */}
        <Footer />




        {/* <About />
        <My_skills />
        <Footer />
        <Contact/> */}

{/* 

        <Routes>
          <Route path="about" element={<About />} />
        </Routes>
        <My_skills />
        <div className="commonnav">
          <Contact />
        </div> */}
      </div>
    </div>
  );
}

export default App;
