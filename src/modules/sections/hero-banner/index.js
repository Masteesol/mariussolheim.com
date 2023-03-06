import React from "react";
import {
  BgContainer,
  Logo,
  LogoContainer,
  HeaderContainer,
  Header,
  InnerContainer,
} from "./styled-hero-banner-components";

const index = () => {
  return (
    <BgContainer>
      <InnerContainer>
        <LogoContainer>
          <Logo
            href="https://www.linkedin.com/in/marius-solheim-08b747223/"
            target="_blank"
            className="bg-linkedin-logo"
          />
          <Logo
            href="https://www.eternal-blue.net/"
            target="_blank"
            className="bg-eternal-blue-logo"
          />
        </LogoContainer>
        <HeaderContainer>
          <Header>
            <span className="font-bold leading-none">Marius Solheim</span>
            <span className="font-light pl-[5rem] md:pl-[10rem] lg:pl-[20rem] leading-none">
              Web Design
            </span>
          </Header>
        </HeaderContainer>
      </InnerContainer>
    </BgContainer>
  );
};

export default index;
