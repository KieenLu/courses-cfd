import React, { memo } from "react";
import { InputStyle, ErrorText } from "./style";
import classNames from "classnames";

export const Input = memo(({ className, error, type = "text", ...props }) => {
  return (
    <InputStyle className={classNames(className, { error })}>
      <input {...props} type={type} />
      {error && <ErrorText>{error}</ErrorText>}
    </InputStyle>
  );
});
