import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects"
import Testimonial from "./Testimonials";
import Experience from "./Experience";


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
      <section id="Experience">
        <Experience/>
      </section>
      <section id="testimonial">
        <Testimonial/>
      </section>
 
    </div>
  );
};

export default Home;
