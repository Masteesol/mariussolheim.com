import HeroBanner from "./hero-banner";
import ProjectOverview from "./projects-overview";
import AboutMe from "./about-me";
import ResponsiveDesign from "./responsive-design";
import { Section } from "./styled-section-components";
import { useEffect, useRef } from "react";

const Sections = ({
  onRefProjects,
  onRefResponsive,
  onRefHero,
  onRefAboutMe,
}) => {
  const refProjects = useRef(null);
  const refResponsive = useRef(null);
  const refHero = useRef(null);
  const refAboutMe = useRef(null);

  useEffect(() => {
    onRefProjects(refProjects);
    onRefResponsive(refResponsive);
    onRefHero(refHero);
    onRefAboutMe(refAboutMe);
  }, [onRefProjects, onRefResponsive, onRefHero, onRefAboutMe]);
  return (
    <>
      <Section ref={refHero} className="bg-dark" id="hero">
        <HeroBanner />
      </Section>
      <Section ref={refResponsive} className="bg-medium" id="responsive">
        <ResponsiveDesign />
      </Section>
      <Section ref={refProjects} className="bg-light" id="projects">
        <ProjectOverview />
      </Section>
      <Section ref={refAboutMe} className="bg-dark" id="aboutme">
        <AboutMe />
      </Section>
    </>
  );
};

export default Sections;
