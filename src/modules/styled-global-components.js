import tw from "tailwind-styled-components";

export const H2 = tw.h2`
    text-[2rem]
    lg:text-[3rem]
    xl:text-[3.5rem]
    font-bold
`;

export const H3 = tw.h3`
    text-[1.5rem]
    lg:text-[2rem]
    xl:text-[2.5rem]
    font-bold
`;

export const Paragraph = tw.p`
    text-[1rem]
    xl:text-[1.2rem]
    my-[1rem]
`;

export const InlineBold = tw.span`
    font-bold
`;

export const FlexColContainer = tw.div`
    flex
    flex-col
`;

export const FlexColRow = tw.div`
    flex
    flex-col
    justify-center
`;

export const FlexColRowContainer = tw(FlexColRow)`
    md:flex-row
`;

export const FlexColRowContainerLg = tw(FlexColRow)`
    lg:flex-row
`;

export const FlexColRowContainerXl = tw(FlexColRow)`
    xl:flex-row
`;

export const FlexRowContainer = tw.div`
    flex
    flex-row
`;

export const InnerContainer = tw.div`
    h-full
    min-h-[100vh]
    max-w-[1980px]
    flex
    flex-col
    flex-col-reverse
    xl:flex-row
    xl:items-center
`;

export const Container = tw.div`
    min-h-[100vh]
    w-full
    flex
    flex-col
    items-center
`;
