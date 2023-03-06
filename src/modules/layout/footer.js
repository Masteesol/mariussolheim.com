import React from "react";
import { FlexColRowContainer, Paragraph } from "../styled-global-components";
import { Footer } from "./styled-layout-components";

const footer = () => {
  return (
    <Footer className="bg-medium text-white">
      <FlexColRowContainer>
        <Paragraph>Marius Solheim&#169;2022</Paragraph>
      </FlexColRowContainer>
    </Footer>
  );
};

export default footer;
