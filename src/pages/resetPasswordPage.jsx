import React from "react";

export default function ResetPasswordPage() {
  return (
    <main className="auth" id="main">
      <div className="wrap">
        <h2 className="title">Đặt lại mật khẩu</h2>
        <input type="text" placeholder="Email" />
        <div className="btn rect main btn-next">Tiếp theo</div>
      </div>
      <div className="wrap">
        <h2 className="title">Xác nhận mật khẩu</h2>
        <input type="text" placeholder="Code" />
        <input type="password" placeholder="Mật khẩu" />
        <input type="password" placeholder="Nhập lại mật khẩu" />
        <p style={{ marginBottom: "15px" }}>
          Nếu chưa nhận được email nào, vui lòng bấm nút{" "}
          <a className="link" href="#">
            Gửi lại
          </a>{" "}
          trong 20 giây
        </p>
        <div className="btn rect main btn-next">Xác nhận</div>
      </div>
    </main>
  );
}
