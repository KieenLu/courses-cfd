import { useAuth } from "@/components/AuthContext";
import Button from "@/components/Button";
import { useAsync } from "@/hooks/useAsync";
import { useForm } from "@/hooks/useForm";
import { userService } from "@/services/user";
import { message, Tree } from "antd";
import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { handleError } from "../utils/handleError";
import { setToken } from "../utils/token";
import { confirm, minMax, regexp, required } from "../utils/validate";
import { Input } from "@/components/Input";

export default function ResetPasswordPage() {
  const [search] = useSearchParams();
  const code = search.get("code");
  const { getProfile } = useAuth();
  const [isSuccess, setIsSuccess] = useState(false);
  const { excute: resetPasswordByCode, loading: resetPasswordByCodeLoading } =
    useAsync(userService.resetPasswordByCode);
  const {
    excute: sendEmailResetPassword,
    loading: sendEmailResetPasswordLoading,
  } = useAsync(userService.sendEmailResetPassword);
  const resetPasswordForm = useForm({
    password: [required(), minMax(6, 32)],
    confirmPassword: [required(), confirm("password")],
  });
  const sendEmailForm = useForm({
    username: [
      required(),
      regexp("email", "Vui lòng nhập đúng định dạng Email"),
    ],
  });
  const onSendEmail = async () => {
    try {
      if (sendEmailForm.validate()) {
        const res = await sendEmailResetPassword(sendEmailForm.values);
        message.success(res.message);
        setIsSuccess(true);
      }
    } catch (err) {
      handleError(err);
    }
  };
  const onResetPassword = async () => {
    try {
      if (resetPasswordForm.validate()) {
        const res = await resetPasswordByCode({
          password: resetPasswordForm.values.password,
          code,
        });
        setToken(res.data);
        getProfile();
        message.success("Bạn đã thay đổi mật khẩu thành công.");
      }
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <main className="auth" id="main">
      {code ? (
        <div className="wrap">
          <h2 className="title">Xác nhận mật khẩu</h2>
          <Input
            className="mb-5"
            type="password"
            placeholder="Mật khẩu"
            {...resetPasswordForm.register("password")}
          />
          <Input
            className="mb-5"
            type="password"
            placeholder="Nhập lại mật khẩu"
            {...resetPasswordForm.register("confirmPassword")}
          />

          <p style={{ marginBottom: "15px" }}>
            Nếu chưa nhận được email nào, vui lòng bấm nút
            <a className="link" href="#">
              Gửi lại
            </a>
            trong 20 giây
          </p>
          <Button
            onClick={onResetPassword}
            loading={resetPasswordByCodeLoading}
          >
            Xác nhận
          </Button>
        </div>
      ) : isSuccess ? (
        <div className="flex flex-col gap-10 text-center max-w-2xl m-auto pt-10 pb-10">
          <h1 className="text-2xl font-bold">
            Gửi Email lấy lại mật khẩu thành công
          </h1>
          <p>
            Chúng tôi đã gửi cho bạn Email lấy lại mật khẩu, xin vui lòng kiểm
            tra Email đăng ký tài khoản của bạn
          </p>
        </div>
      ) : (
        <div className="wrap">
          <h2 className="title">Đặt lại mật khẩu</h2>
          <Input
            className="mb-5"
            placeholder="Email"
            {...sendEmailForm.register("username")}
          />
          <Button onClick={onSendEmail} loading={sendEmailResetPasswordLoading}>
            Tiếp theo
          </Button>
        </div>
      )}
    </main>
  );
}
