import React from "react";
import styled from "styled-components";

const ErrorSpan = styled.span`
  color: red;
  position: absolute;
  top: 100%;
  left: 230px;
  font-size: 0.875rem;
  font-style: italic;
`;

export default function Field({
  label,
  required,
  renderInput,
  error,
  type = "text",
  ...props
}) {
  return (
    <label style={{ position: "relative" }}>
      <p>
        {label}
        {required && <span>*</span>}
      </p>
      {renderInput ? renderInput?.(props) : <input {...props} type={type} />}
      {error && <ErrorSpan>{error}</ErrorSpan>}
    </label>
  );
}
