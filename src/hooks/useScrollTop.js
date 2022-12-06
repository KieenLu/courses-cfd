import { useEffect } from "react";

export const useScrollTop = (depencencylist = []) => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, depencencylist);
};
