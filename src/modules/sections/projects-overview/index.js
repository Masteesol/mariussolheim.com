import React from "react";
import {
  Container,
  FlexColContainer,
  FlexColRowContainer,
  H2,
} from "../../styled-global-components";
import { InnerContainer } from "./styled-project-overview-components";
import PageTextContent from "../../../data/page-text-content";
import { ColumnImage, ColumnText } from "./column";
const { projectsSection: textContent } = PageTextContent;

const index = () => {
  return (
    <Container className="my-[4rem] text-dark">
      <InnerContainer>
        <H2 className="px-[2rem] my-[2rem]">Solo Projects</H2>
        <FlexColContainer className="px-[2rem] ">
          {textContent.map((item, index) => {
            //console.log(item.image);
            return index % 2 === 0 ? (
              <FlexColRowContainer
                className="justify-center min-h-[30rem] mb-[2rem]"
                key={index}
              >
                <ColumnImage
                  isEven={true}
                  media={item.image}
                  className="lg:items-end"
                />
                <ColumnText isEven={true} text={item} />
              </FlexColRowContainer>
            ) : (
              <FlexColRowContainer
                className="justify-center mb-[2rem] flex-col-reverse md:flex-row min-h-[30rem]"
                key={index}
              >
                <ColumnText isEven={false} text={item} />
                <ColumnImage isEven={false} media={item.image} />
              </FlexColRowContainer>
            );
          })}
        </FlexColContainer>
      </InnerContainer>
    </Container>
  );
};

export default index;

//
