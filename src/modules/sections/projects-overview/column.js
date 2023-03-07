import React from "react";
import {
  FlexColContainer,
  FlexRowContainer,
  H3,
  Paragraph,
} from "../../styled-global-components";
import { Image, Link } from "./styled-project-overview-components";

export const ColumnImage = (props) => {
  const url = props.data.media
    ? require(`./project-images/${props.data.media}`)
    : false;
  const bgStyle = url
    ? {
        backgroundImage: `url(${url})`,
      }
    : false;
  return (
    <FlexColContainer
      className={`w-full items-center md:items-start md:w-[50%] ${
        !props.isEven ? "md:items-end" : ""
      }`}
    >
      <a href={props.data.links.liveSite} target="_blank" rel="noreferrer">
        <Image style={bgStyle} />
      </a>
    </FlexColContainer>
  );
};

export const ColumnText = (props) => {
  console.log(props);
  return (
    <FlexColContainer className="w-full md:w-[50%] mt-[2rem] md:mt-0">
      <H3 className={!props.isEven ? "md:text-right" : "md:text-left"}>
        {props.data.title}
      </H3>
      <Paragraph className={!props.isEven ? "md:text-right" : "md:text-left"}>
        {props.data.text}
      </Paragraph>
      <FlexRowContainer
        className={!props.isEven ? "md:justify-end" : "md:justify-start"}
      >
        <Link
          className={!props.isEven ? "md:mr-[1rem]" : "md:mr-[1rem]"}
          href={props.data.links.gitHub}
        >
          View on GiHub
        </Link>
        <Link href={props.data.links.liveSite}>View live page</Link>
      </FlexRowContainer>
    </FlexColContainer>
  );
};
