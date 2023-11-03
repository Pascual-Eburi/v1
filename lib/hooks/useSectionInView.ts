/* eslint-disable react-hooks/exhaustive-deps */
import { useActiveSectionContext } from "@/context/activeSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { useSectionInViewProps } from "../types";

export default function useSectionInView ({
    section, threshold = 0.5
}:useSectionInViewProps) {
      // check when component is in view to set active class to his link
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection , timeOfLastClick} = useActiveSectionContext();
  useEffect(() => {
    if (!inView){ return}
    if (inView && Date.now() - timeOfLastClick > 1000 /* 1ms */) {
      setActiveSection(section);
    }
  }, [inView, timeOfLastClick, section]);

  return {
    ref
  }
}