import React from "react";

export default function SignupPage() {
  return (
    <main className="auth" id="main">
      <div className="wrap">
        <h2 className="title">Đăng ký</h2>
        <input type="text" placeholder="Địa chỉ Email" />
        <input placeholder="Họ và tên" />
        <input type="password" placeholder="Mật khẩu" />
        <input type="password" placeholder="Nhập lại mật khẩu" />
        <p className="policy">
          Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật</a>{" "}
          của Spacedev
        </p>
        <button className="btn rect main btn-login">Đăng ký</button>
      </div>
    </main>
  );
}
