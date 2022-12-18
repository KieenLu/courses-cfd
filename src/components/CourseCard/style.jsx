import styled from "styled-components";

export const ResponsiveAvatarStyle = styled.div`
  height: 36px;
  @media (max-width: 1023px) {
    height: 30px;
  }
  @media (max-width: 767px) {
    height: 40px;
  }
`;
