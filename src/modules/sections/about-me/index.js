import {
  H2,
  H3,
  Paragraph,
  FlexColContainer,
  Container,
  InnerContainer,
} from "../../styled-global-components";
import {
  Avatar,
  ApidariLogo,
  LogoContainer,
} from "./styled-about-me-components";
import PageTextContent from "../../../data/page-text-content";
import BrandHeading from "./brand-heading";
const { aboutMeSection } = PageTextContent;

const index = () => {
  return (
    <Container className="text-white">
      <InnerContainer>
        <FlexColContainer className="w-full items-center h-[auto] p-[1.5rem] xl:w-[50%] xl:pl-[6rem]">
          <FlexColContainer className="max-w-[600px] xl:max-w-[none]">
            <H2>About Me</H2>
            <Paragraph>{aboutMeSection.aboutMe}</Paragraph>
            <FlexColContainer className="lg:flex-row">
              <FlexColContainer>
                <H3>My Services</H3>
                <Paragraph>{aboutMeSection.myServices}</Paragraph>
              </FlexColContainer>
              <LogoContainer href="https://apidari.no/" target="_blank">
                <ApidariLogo />
              </LogoContainer>
            </FlexColContainer>
          </FlexColContainer>
        </FlexColContainer>
        <FlexColContainer className="w-full h-[50%] xl:w-[50%] items-center justify-center">
          <Avatar />
          <BrandHeading />
        </FlexColContainer>
      </InnerContainer>
    </Container>
  );
};

export default index;
