import React from "react";
import { Navigate } from "react-router-dom";
import { PATH } from "../../config/path";
import { useScrollTop } from "../../hooks/useScrollTop";

export default function Profile() {
  useScrollTop();
  return (
    <div className="tab1">
      <label>
        <p>
          Họ và tên<span>*</span>
        </p>
        <input type="text" placeholder="Nguyễn Văn A" />
      </label>
      <label>
        <p>
          Số điện thoại<span>*</span>
        </p>
        <input type="text" placeholder="0949******" />
      </label>
      <label>
        <p>
          Email<span>*</span>
        </p>
        <input defaultValue="dangthuyenvuong@gmail.com" disabled type="text" />
      </label>
      <label>
        <p>
          Facebook<span>*</span>
        </p>
        <input type="text" placeholder="Facebook url" />
      </label>
      <label>
        <p>
          Skype<span>*</span>
        </p>
        <input type="text" placeholder="Skype url" />
      </label>
      <div className="btn main rect">LƯU LẠI</div>
    </div>
  );
}
