import tw from "tailwind-styled-components";

export const Nav = tw.nav`
    w-full
    bg-dark
    fixed
`;

export const NavUl = tw.ul`
    py-3 
    flex 
    justify-center 
    text-white
`;

export const NavLi = tw.button`
    mx-2
    cursor-pointer
    hover:underline
`;

export const Footer = tw.footer`
    w-full
    min-h-4
    bg-black
    flex
    flex-col
`;

export const Container = tw.div`
    w-full
    h-screen
`;
