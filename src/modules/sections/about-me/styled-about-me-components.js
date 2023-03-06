import tw from "tailwind-styled-components";

export const Avatar = tw.picture`
    bg-avatar
    my-[2rem]
    w-[16rem]
    h-[16rem]
    md:w-[25rem]
    md:h-[25rem]
    bg-no-repeat
    bg-contain
    bg-center
`;

export const ApidariLogo = tw.picture`
    bg-apidari-logo
    my-[2rem]
    w-[16rem]
    h-[16rem]
    lg:w-[14rem]
    lg:h-[14rem]
    xl:w-[16rem]
    xl:h-[16rem]
    bg-no-repeat
    bg-contain
    bg-center
    transition ease-in-out
    hover:scale-110
`;

export const LogoContainer = tw.a`
    flex
    grow
    justify-center
    md:items-start
    md:grow-0
`;
