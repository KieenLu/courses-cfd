import React from "react";
import { ButtonStyled } from "./style";
import { LoadingOutlined } from "@ant-design/icons";

export default function Button({ loading, children, ...props }) {
  return (
    <ButtonStyled
      {...props}
      disabled={loading}
      className={`btn main rect gap-3 ${props.className ?? ""}`}
    >
      {loading && <LoadingOutlined style={{ marginRight: 15, fontSize: 25 }} />}
      {children}
    </ButtonStyled>
  );
}
