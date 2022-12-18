import Button from "../components/Button";
import React from "react";
import { useAsync } from "../hooks/useAsync";
import { useForm } from "../hooks/useForm";
import { userService } from "../services/user";
import { confirm, minMax, regexp, required } from "./utils/validate";
import { message } from "antd";
import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import classNames from "classnames";
import Input from "@/components/Input";
import { handleError } from "./utils/handleError";

export default function SignupPage() {
  const { excute: signup, loading } = useAsync(userService.signup);
  const { loading: resendEmailLoading, excute: resendEmailService } = useAsync(
    userService.resendEmail
  );
  const [isSuccess, setIsSuccess] = useState(false);
  const { validate, register, values } = useForm({
    username: [
      required(),
      regexp("email", "Xin vui lòng nhập đúng định dạng Email"),
    ],
    name: [required()],
    password: [required(), minMax(6, 32)],
    confirmPassword: [required(), confirm("password")],
  });

  const onSubmit = async () => {
    try {
      if (validate()) {
        const res = await signup(values);
        setIsSuccess(true);
      }
    } catch (err) {
      handleError(err);
    }
  };
  const onResendEmail = async (ev) => {
    ev.preventDefault();
    try {
      await resendEmailService({
        username: values.username,
      });
      message.success("Email kích hoạt đã được gửi lại thành công");
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <main className="auth" id="main">
      {isSuccess ? (
        <div className="container wrap flex flex-col text-center gap-10 ">
          <h1 className="text-2xl font-bold">Đăng ký tài khoản thành công</h1>
          <p>
            Vui lòng kiểm tra Email để kích hoạt tài khoản. Nếu không nhận được
            Email. vui lòng bấm
            <span className=" font-bold">" Gửi lại Email kích hoạt" </span>
            bên dưới
          </p>
          <div className="flex justify-center">
            <a
              onClick={onResendEmail}
              href="#"
              className={classNames("link font-bold flex gap-2", {
                "opacity-50 pointer-events-none": resendEmailLoading,
              })}
            >
              {resendEmailLoading && <LoadingOutlined />}
              Gửi lại Email kích hoạt
            </a>
          </div>
        </div>
      ) : (
        <div className="wrap">
          <h2 className="title">Đăng ký</h2>
          <Input
            className="mb-5"
            type="text"
            placeholder="Email . . ."
            {...register("username")}
          />

          <Input
            className="mb-5"
            placeholder="Họ và tên . . . "
            {...register("name")}
          />

          <Input
            className="mb-5"
            type="password"
            placeholder="Mật khẩu . . . "
            {...register("password")}
          />

          <Input
            className="mb-5"
            type="password"
            placeholder="Nhập lại mật khẩu . . . "
            {...register("confirmPassword")}
          />

          <p className="policy">
            Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật </a>
            của Spacedev
          </p>
          <Button onClick={onSubmit} className="btn-login" loading={loading}>
            Đăng ký
          </Button>
        </div>
      )}
    </main>
  );
}
