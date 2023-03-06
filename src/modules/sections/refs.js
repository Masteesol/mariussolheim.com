import { useRef } from "react";

export const useSectionRefs = () => {
  const refProjects = useRef(null);
  const refResponsive = useRef(null);
  const refHero = useRef(null);
  const refAboutMe = useRef(null);

  return {
    refProjects,
    refResponsive,
    refHero,
    refAboutMe,
  };
};
