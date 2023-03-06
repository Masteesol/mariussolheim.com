import React from "react";
//import { useSectionRefs } from "../sections/refs";
import { Nav, NavUl, NavLi } from "./styled-layout-components";

const Navigation = ({ onRefProjects, onRefHero, onRefAboutMe }) => {
  console.log("nav");
  //const { refProjects, refAboutMe } = useSectionRefs();

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Nav>
      <NavUl>
        <NavLi onClick={() => scrollToSection(onRefHero)}>Home</NavLi>
        <NavLi onClick={() => scrollToSection(onRefProjects)}>Projects</NavLi>
        <NavLi onClick={() => scrollToSection(onRefAboutMe)}>About Me</NavLi>
      </NavUl>
    </Nav>
  );
};

export default Navigation;
