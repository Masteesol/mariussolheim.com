import tw from "tailwind-styled-components";

export const BgContainer = tw.div`
    h-[100vh]
    w-full
    bg-hero-pattern
    bg-no-repeat
    bg-contain
    bg-center
    flex
    justify-center
`;

export const InnerContainer = tw.div`
    h-full
    w-full
    max-w-[1980px]
    flex
    flex-col
    flex-col-reverse
    xl:flex-row
`;

export const Logo = tw.a`
    w-[4rem]
    h-[4rem]
    xxl:w-[7rem]
    xxl:h-[7rem]
    bg-no-repeat
    bg-contain
    bg-center
    m-[1rem]
`;

export const LogoContainer = tw.div`
    flex
    justify-center
    xl:flex-col
    xl:justify-end
`;

export const HeaderContainer = tw.div`
    flex
    flex-col
    grow
    items-center
    justify-center
    xl:justify-end
    xl:items-end
    xl:py-[10rem]
`;

export const Header = tw.header`
    text-[2rem]
    md:text-[3rem]
    lg:text-[4rem]
    xxl:text-[6rem]
    text-white
    flex
    flex-col
`;
