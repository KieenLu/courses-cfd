import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PATH } from "../../config/path";

export default function Header({ user, logout }) {
  const { pathname } = useLocation();
  useEffect(() => {
    onCloseMenu();
  }, [pathname]);

  const handleOpenMenu = () => {
    document.body.classList.toggle("menu-is-show");
  };
  const onCloseMenu = () => {
    document.body.classList.remove("menu-is-show");
  };
  const _logout = (ev) => {
    ev.preventDefault();
    logout();
  };
  return (
    <>
      <header id="header">
        <div className="wrap">
          <div onClick={handleOpenMenu} className="menu-hambeger">
            <div className="button">
              <span />
              <span />
              <span />
            </div>
            <span className="text">menu</span>
          </div>
          <Link to="/" className="logo">
            <img src="/img/logo.svg" alt="" />
            <h1>Spacedev</h1>
          </Link>
          <div className="right">
            {user ? (
              <div className="have-login">
                <div className="account">
                  <Link to={PATH.profile.index} className="info">
                    <div className="name">Đặng Thuyền Vương</div>
                    <div className="avatar">
                      <img src="/img/avt.png" alt="" />
                    </div>
                  </Link>
                </div>
                <div className="hamberger"></div>
                <div className="sub">
                  <Link to={PATH.profile.course}>Khóa học của tôi</Link>
                  <Link to={PATH.profile.index}>Thông tin tài khoản</Link>
                  <a onClick={_logout} href="#">
                    Đăng xuất
                  </a>
                </div>
              </div>
            ) : (
              <div className="not-login bg-none">
                <Link to={PATH.signin} className="btn-register">
                  Đăng nhập
                </Link>
                <Link to={PATH.signup} className="btn main btn-open-login">
                  Đăng ký
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
      <div onClick={handleOpenMenu} className="overlay_nav"></div>
    </>
  );
}
