import styled from "styled-components";

export const FieldStyle = styled.label`
  position: relative;
  @media (max-width: 767px) {
    input {
      flex: unset !important;
    }
  }
`;
export const ErrorSpan = styled.span`
  color: red;
  position: absolute;
  top: 100%;
  left: 230px;
  font-size: 0.875rem;
  font-style: italic;

  @media (max-width: 767px) {
    left: 25px;
  }
`;
