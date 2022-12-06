import React from "react";
import { useScrollTop } from "../../hooks/useScrollTop";

export default function Project() {
  useScrollTop();
  return (
    <div className="tab3">
      <div className="row">
        <div className="col-md-6 course">
          <div className="wrap">
            <a href="#" className="cover">
              <img src="/img/img8.png" alt="" />
            </a>
            <div className="info">
              <a href="#" className="name">
                Reactjs
              </a>
              <p className="des">
                Dự án hoàn thành trong khóa Spacedev1 Offline của Spacedev Team.
              </p>
            </div>
            <div className="bottom">
              <div className="teacher">
                <div className="avatar">
                  <img src="/img/avt.png" alt="" />
                </div>
                <div className="name">Vương Đặng</div>
              </div>
              <div className="register-btn">Website</div>
            </div>
          </div>
        </div>
        <div className="col-md-6 course">
          <div className="wrap">
            <a href="#" className="cover">
              <img src="/img/img8.png" alt="" />
            </a>
            <div className="info">
              <a href="#" className="name">
                Shopper
              </a>
              <p className="des">
                Dự án hoàn thành trong khóa Spacedev1 Offline của Spacedev Team.
              </p>
            </div>
            <div className="bottom">
              <div className="teacher">
                <div className="avatar">
                  <img src="/img/avt.png" alt="" />
                </div>
                <div className="name">Vương Đặng</div>
              </div>
              <div className="register-btn">Website</div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-wrap">
        <div className="btn overlay btn-icon round">
          <img
            src="/img/icon-upload.svg"
            alt=""
            style={{ marginRight: "10px" }}
          />{" "}
          Tải lên
        </div>
      </div>
    </div>
  );
}
