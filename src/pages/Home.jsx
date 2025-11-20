import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects"
import Testimonial from "./Testimonials";
import Experience from "./Experience";
import Contact from "./Contact"
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>

      <section id="about">
      <About/>
      
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <section id="experience">
        <Experience/>
      </section>
      <section id="testimonial">
        <Testimonial/>
      </section>
       <section id="contact">
          <Contact/>
        </section>
        <Footer/>
 
    </div>
  );
};

export default Home;
