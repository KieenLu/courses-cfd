import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import Field from "../components/Field";
import Input from "../components/Input";
import { PATH } from "../config/path";
import { useAsync } from "../hooks/useAsync";
import { useForm } from "../hooks/useForm";
import { minMax, regexp, required } from "./utils/validate";
import Button from "../components/Button";
export default function SigninPage() {
  const { login } = useAuth();
  const form = useForm({
    username: [required(), regexp("email")],
    password: [required(), minMax(6, 32)],
  });
  const { loading, excute: loginService } = useAsync(login);
  const navigate = useNavigate();
  const onSubmit = () => {
    if (form.validate()) {
      loginService(form.values);
      // navigate(PATH.profile.index);
    }
  };
  return (
    <main className="auth" id="main">
      <div className="wrap">
        {/* login-form */}
        <div className="ct_login">
          <h2 className="title">Đăng nhập</h2>

          <Input
            {...form.register("username")}
            className="mb-5"
            style={{ marginBottom: 25 }}
            placeholder="Email/ Số điện thoại"
          />
          <Input
            {...form.register("password")}
            style={{ marginBottom: 25 }}
            className="mb-5"
            placeholder="Mật khẩu"
            type="password"
          />
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
          <Button
            loading={loading}
            onClick={onSubmit}
            className="btn rect main btn-login"
          >
            đăng nhập
          </Button>
          <div className="text-register" style={{}}>
            <span>Nếu bạn chưa có tài khoản?</span>{" "}
            <a className="link" href="#">
              Đăng ký
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
