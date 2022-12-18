import styled from "styled-components";

export const AspectRatioStyle = styled.div`
  position: relative;
  :after {
    content: "";
    padding-top: ${(props) => props.ratio * 100}%;
    display: block;
  }
  .item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
