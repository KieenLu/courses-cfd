import styled from "styled-components";

export const ModalStyle = styled.div`
  /* background: rgba(0, 0, 0, 0.5); */
  display: none;
  align-items: center;
  justify-content: center;
  .wrap {
  }
  &.visible {
    display: flex;
  }
  .item {
    padding: 20px 20px;
  }
`;
