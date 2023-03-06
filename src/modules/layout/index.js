import Nav from "./nav";
import Footer from "./footer";
import { Container } from "./styled-layout-components";
import { useRef } from "react";
import Sections from "../sections";

const Index = () => {
  const refProjects = useRef(null);
  const refResponsive = useRef(null);
  const refHero = useRef(null);
  const refAboutMe = useRef(null);
  return (
    <Container>
      <Nav
        onRefProjects={refProjects}
        onRefResponsive={refResponsive}
        onRefHero={refHero}
        onRefAboutMe={refAboutMe}
      />
      <Sections
        onRefProjects={(ref) => {
          refProjects.current = ref.current;
        }}
        onRefResponsive={(ref) => {
          refResponsive.current = ref.current;
        }}
        onRefHero={(ref) => {
          refHero.current = ref.current;
        }}
        onRefAboutMe={(ref) => {
          refAboutMe.current = ref.current;
        }}
      />
      <Footer />
    </Container>
  );
};

export default Index;
