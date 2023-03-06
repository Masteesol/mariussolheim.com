import tw from "tailwind-styled-components";

export const InnerContainer = tw.div`
    h-full
    min-h-[100vh]
    max-w-[1200px]
    flex
    flex-col
`;

export const Image = tw.picture`
    w-[90vw]
    max-w-full
    h-[25rem]
    md:h-[40vw]
    md:w-[40vw]
    lg:max-w-[25rem]
    lg:max-h-[25rem]
    bg-no-repeat
    bg-cover
    bg-top
    rounded
    shadow-lg
    cursor-pointer
    transition ease-in-out
    md:hover:scale-110
    md:hover:shadow-xl
`;

export const Link = tw.a`
    text-medium
    py-[0.2rem]
    transition ease-in-out
    hover:shadow
`;
