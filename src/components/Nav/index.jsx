import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "../../config/path";
import "/src/assets/style/customcss.css";

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to={PATH.profile.index}>Hồ sơ của bạn</NavLink>
        </li>
        <li>
          <NavLink to={PATH.home}>Trang chủ</NavLink>
        </li>
        <li>
          <NavLink to={PATH.team}>Spacedev Team</NavLink>
        </li>
        <li>
          <NavLink to={PATH.courselist}>Khóa Học</NavLink>
        </li>
        <li>
          <NavLink to={PATH.project}>Dự Án</NavLink>
        </li>
        <li>
          <NavLink to={PATH.contact}>Liên hệ</NavLink>
        </li>
      </ul>
    </nav>
  );
}
