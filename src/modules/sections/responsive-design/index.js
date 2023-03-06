import React from "react";
import {
  Container,
  InnerContainer,
  FlexColRowContainer,
  Paragraph,
  H3,
  FlexColContainer,
  InlineBold,
  FlexRowContainer,
  H2,
} from "../../styled-global-components";
import { Icon, IconLarge } from "./styled-responsive-design-components";
import PageTextContent from "../../../data/page-text-content";
const { responsiveDesignSection: pageText } = PageTextContent;

const index = () => {
  return (
    <Container className="text-white">
      <InnerContainer className="flex-col xl:flex-col justify-center w-full max-w-[780px] my-[4rem] box-border">
        <H2 className="w-full mb-[4rem] text-center lg:text-left">
          Responsive Design
        </H2>
        <FlexColRowContainer className="mb-[2rem] items-center justify-between w-full">
          <IconLarge className="bg-icon-mobile bg-center md:bg-left" />
          <FlexColContainer className="mt-[3rem] md:mt-[0]">
            <H3 className="text-center md:text-right">Mobile Devices</H3>
            <Paragraph className="max-w-[20rem] text-center md:text-right w-full">
              <InlineBold>60.04% </InlineBold>of website traffic comes from
              mobile devices. <InlineBold>92.1%</InlineBold> of internet users
              access the internet using a mobile phone.
            </Paragraph>
          </FlexColContainer>
        </FlexColRowContainer>
        <FlexColRowContainer className="flex-col-reverse">
          <FlexColContainer className="md:justify-center">
            <Paragraph className="text-center md:text-left w-full mt-[3rem] md:mt-[0] px-[1.5rem]">
              {pageText.stats}
            </Paragraph>
          </FlexColContainer>
          <FlexRowContainer className="justify-center md:flex-col md:justify-end">
            <Icon className="bg-icon-tablet bg-center md:hidden" />
            <Icon className="bg-icon-laptop bg-center" />
          </FlexRowContainer>
        </FlexColRowContainer>
        <FlexColContainer className="mt-[3rem] w-full px-[1.5rem]">
          <H3 className="text-center md:text-left">Why responsive design?</H3>
          <Paragraph className="text-center md:text-left">
            <InlineBold>Responsive Design</InlineBold> is key to a{" "}
            <InlineBold>successfull</InlineBold> website or web app.
          </Paragraph>
          <Paragraph>{pageText.intro}</Paragraph>
          <ol className="list-decimal">
            {pageText.benefits.map((item, index) => (
              <li key={index} className="my-[1rem]">
                {item}
              </li>
            ))}
          </ol>
        </FlexColContainer>
      </InnerContainer>
    </Container>
  );
};

export default index;
