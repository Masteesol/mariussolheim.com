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
    <Container className="my-[4rem] text-dark box-border">
      <InnerContainer className="box-border">
        <H2 className="px-[2rem] my-[2rem]">Solo Projects</H2>
        <FlexColContainer className="px-[2rem] w-100 box-border">
          {textContent.map((item, index) => {
            //console.log(item.image);
            return index % 2 === 0 ? (
              <FlexColRowContainer
                className="justify-center min-h-[30rem] mb-[2rem]"
                key={index}
              >
                <ColumnImage
                  isEven={true}
                  data={item}
                  className="lg:items-end"
                />
                <ColumnText isEven={true} data={item} />
              </FlexColRowContainer>
            ) : (
              <FlexColRowContainer
                className="justify-center mb-[2rem] flex-col-reverse md:flex-row min-h-[30rem]"
                key={index}
              >
                <ColumnText isEven={false} data={item} />
                <ColumnImage isEven={false} data={item} />
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
