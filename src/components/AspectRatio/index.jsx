import React from "react";
import { AspectRatioStyle } from "./style";

export const AspectRatio = ({ children, ratio, width }) => {
  return (
    <AspectRatioStyle ratio={ratio} style={{ width }}>
      <div className="item">{children}</div>
    </AspectRatioStyle>
  );
};
