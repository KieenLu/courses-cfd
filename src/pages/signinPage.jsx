import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Field from "../components/Field";
import { PATH } from "../config/path";
import { useForm } from "../hooks/useForm";
import { regexp, required } from "./utils/validate";

export default function SigninPage({ login }) {
  const { values, register, validate, errors } = useForm({
    username: [required(), regexp("email")],
    password: [required()],
  });

  const navigate = useNavigate();
  const onSubmit = (ev) => {
    ev.preventDefault();
    if (validate()) {
      login();
      navigate(PATH.profile.index);
    }
  };
  return (
    <main className="auth" id="main">
      <div className="wrap">
        {/* login-form */}
        <form onSubmit={onSubmit} className="ct_login">
          <h2 className="title">Đăng nhập</h2>
          <input placeholder="Email/ Số điện thoại" {...register("username")} />
          {errors.username && <p>{errors.username}</p>}
          <input
            placeholder="Mật khẩu"
            type="password"
            {...register("password")}
          />
          {errors.password && <p>{errors.password}</p>}
          <div className="remember">
            <label className="btn-remember">
              <div>
                <input type="checkbox" />
              </div>
              <p>Nhớ mật khẩu</p>
            </label>
            <a href="#" className="forget">
              Quên mật khẩu?
            </a>
          </div>
          <button className="btn rect main btn-login">đăng nhập</button>
          <div className="text-register" style={{}}>
            <span>Nếu bạn chưa có tài khoản?</span>{" "}
            <a className="link" href="#">
              Đăng ký
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
