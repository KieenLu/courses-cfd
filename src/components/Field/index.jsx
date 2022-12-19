import React, { memo } from "react";
import { ErrorSpan, FieldStyle } from "./style";

function Field({
  label,
  required,
  renderInput,
  error,
  type = "text",
  ...props
}) {
  return (
    <FieldStyle className="md-1:block">
      <p>
        {label}
        {required && <span>*</span>}
      </p>
      {renderInput ? renderInput?.(props) : <input {...props} type={type} />}
      {error && <ErrorSpan>{error}</ErrorSpan>}
    </FieldStyle>
  );
}
export default memo(Field, (oldProps, newProps) => {
  return oldProps.value === newProps.value && oldProps.error === newProps.error;
});
