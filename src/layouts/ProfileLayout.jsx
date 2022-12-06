import React from "react";
import { Link, Navigate, NavLink, Outlet } from "react-router-dom";
import { PATH } from "../config/path";
import { useScrollTop } from "../hooks/useScrollTop";

export default function ProfileLayout() {
  useScrollTop();
  return (
    <main className="profile" id="main">
      <section>
        <div className="top-info">
          <div className="avatar">
            {/* <span class="text">H</span> */}
            <img src="/img/avt.png" alt="" />
            <div className="camera" />
          </div>
          <div className="name">Vương Đặng</div>
          <p className="des">Thành viên của team Spacedev1-OFFLINE</p>
        </div>
        <div className="container">
          <div className="tab">
            <div className="tab-title">
              <NavLink end to={PATH.profile.index}>
                Thông tin tài khoản
              </NavLink>
              <NavLink to={PATH.profile.course}>Khóa học của bạn</NavLink>
              <NavLink to={PATH.profile.project}>Dự án đã làm</NavLink>
              <NavLink to={PATH.profile.payment}>Lịch sử thanh toán</NavLink>
              <NavLink to={PATH.profile.coin}>Quản lý COIN của tôi</NavLink>
            </div>
            <div className="tab-content">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
