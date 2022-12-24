import styled from "styled-components";

export const FieldStyle = styled.label`
  position: relative;
  input {
    flex: unset !important;
  }
  @media (max-width: 767px) {
  }
`;
export const ErrorSpan = styled.span`
  color: red;
  position: absolute;
  top: 100%;

  font-size: 0.875rem;
  font-style: italic;

  @media (max-width: 767px) {
    left: 25px;
  }
`;
