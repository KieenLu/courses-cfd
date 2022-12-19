import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import { Input } from "../components/Input";
import { useAsync } from "../hooks/useAsync";
import { useForm } from "../hooks/useForm";
import { minMax, regexp, required } from "./utils/validate";
import Button from "../components/Button";
import { useScrollTop } from "../hooks/useScrollTop";
import { PATH } from "../config/path";
import { RememberPassword } from "@/components/Checkbox";

export default function SigninPage() {
  useScrollTop();
  const { login } = useAuth();
  const form = useForm({
    username: [
      required(),
      regexp("email", "Vui lòng nhập đúng định dạng Email"),
    ],
    password: [required(), minMax(6, 32)],
  });
  const { loading, excute: loginService } = useAsync(login);
  const onKeyUp = (ev) => {
    if (form.validate() && ev.key === "Enter") {
      loginService(form.values);
    }
  };

  const onSubmit = () => {
    if (form.validate()) {
      loginService(form.values);
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
            onKeyUp={onKeyUp}
            className="mb-5"
            style={{ marginBottom: 25 }}
            placeholder="Email/ Số điện thoại"
          />
          <Input
            {...form.register("password")}
            style={{ marginBottom: 25 }}
            onKeyUp={onKeyUp}
            className="mb-5"
            placeholder="Mật khẩu"
            type="password"
          />
          <RememberPassword {...form.register("rememberpassword")} />
          <Button
            loading={loading}
            onClick={onSubmit}
            className="btn rect main btn-login"
          >
            đăng nhập
          </Button>
          <div className="text-register">
            <span>Nếu bạn chưa có tài khoản? </span>
            <Link to={PATH.signup} className="link">
              Đăng ký
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
