import { PATH } from "@/config/path";
import React from "react";
import { Link } from "react-router-dom";
import { ErrorText } from "../Input/style";

export const Checkbox = ({ children, onChange, error, value }) => {
  const _onChange = (ev) => {
    onChange?.({ target: { value: ev.target.checked } });
  };
  return (
    <div className="checkcontainer">
      {children}
      <input type="checkbox" onChange={_onChange} checked={value}></input>
      <span className="checkmark"></span>
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
};
export const RememberPassword = ({ onChange, value, error }) => {
  const _onChange = (ev) => {
    onChange?.({ target: { value: ev.target.checked } });
  };
  return (
    <div className="remember">
      <label className="btn-remember">
        <div>
          <input type="checkbox" onChange={_onChange} checked={value}></input>
        </div>
        <p>Nhớ mật khẩu</p>
      </label>
      <Link to={PATH.resetpassword} href="#" className="forget">
        Quên mật khẩu?
      </Link>
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
};
