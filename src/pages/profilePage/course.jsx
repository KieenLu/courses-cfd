import React from "react";
import { useScrollTop } from "../../hooks/useScrollTop";

export default function Course() {
  useScrollTop();
  return (
    <div className="tab2">
      <div className="item">
        <div className="cover">
          <img src="/img/img3.png" alt="" />
        </div>
        <div className="info">
          <a href="#" className="name">
            Reactjs Advanced
          </a>
          <div className="date">Khai giảng ngày 09/09/2019</div>
          <div className="row">
            <div>
              <img src="/img/clock.svg" alt="" className="icon" />
              54 giờ
            </div>
            <div>
              <img src="/img/play.svg" alt="" className="icon" />
              25 video
            </div>
            <div>
              <img src="/img/user.svg" alt="" className="icon" />
              20 học viên
            </div>
          </div>
          <div className="process">
            <div className="line">
              <div className="rate" style={{ width: "30%" }} />
            </div>
            30%
          </div>
          <div className="btn overlay round btn-continue">Tiếp tục học</div>
        </div>
      </div>
      <div className="item">
        <div className="cover">
          <img src="/img/img7.png" alt="" />
        </div>
        <div className="info">
          <a href="#" className="name">
            Nodejs Advanced
          </a>
          <div className="date">Khai giảng ngày 09/09/2019</div>
          <div className="row">
            <div>
              <img src="/img/clock.svg" alt="" className="icon" />
              54 giờ
            </div>
            <div>
              <img src="/img/play.svg" alt="" className="icon" />
              25 video
            </div>
            <div>
              <img src="/img/user.svg" alt="" className="icon" />
              20 học viên
            </div>
          </div>
          <div className="process">
            <div className="line">
              <div className="rate" style={{ width: "30%" }} />
            </div>
            30%
          </div>
          <div className="btn overlay round btn-continue">Tiếp tục học</div>
        </div>
      </div>
    </div>
  );
}
