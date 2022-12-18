import moment from "moment/moment";
import React, { useState } from "react";
import { generatePath, Link, useParams } from "react-router-dom";
import { Accordion } from "../../components/Accordion";
import { AspectRatio } from "../../components/AspectRatio";
import CourseCard from "../../components/CourseCard";
import Skeleton from "../../components/Skeleton";
import { Teacher } from "../../components/Teacher";
import { VideoPopupModal } from "../../components/VideoPopupModal";

import { PATH } from "../../config/path";
import { useQuery } from "../../hooks/useQuery";
import { useScrollTop } from "../../hooks/useScrollTop";
import { courseService } from "../../services/course";
import Page404 from "../page404";
import { currency } from "../utils/currency";

export default function CouseDetailPage() {
  const [isOpenVideo, setIsOpenVideo] = useState(false);
  const { id } = useParams();
  useScrollTop([id]);
  const { data, loading } = useQuery(
    () => courseService.getCourseDetail(id),
    [id]
  );

  const { data: related } = useQuery(
    () => courseService.getCourseRelative(id),
    [id]
  );

  if (loading)
    return (
      <main className="course-detail" id="main">
        <section
          className="banner style2"
          style={{ "--background": "#cde6fb" }}
        >
          <div className="container">
            <div className="info">
              <h1>
                <Skeleton width={500} height={64} />
              </h1>
              <div className="row">
                <div className="date">
                  <Skeleton width={200} height={24} />
                </div>
                <div className="time">
                  <Skeleton width={200} height={24} />
                </div>
              </div>
              <Skeleton style={{ marginTop: 40 }} width={150} height={46} />
            </div>
          </div>
        </section>
      </main>
    );
  const { data: detail } = data;
  if (!detail) return <Page404 />;
  const registerPath = generatePath(PATH.courseregister, {
    slug: detail.slug,
    id: detail.id,
  });

  return (
    <main className="course-detail" id="main">
      <section className="banner style2" style={{ "--background": "#cde6fb" }}>
        <div className="container">
          <div className="info">
            <h1>{detail.title}</h1>
            <div className="row">
              <div className="date">
                <strong>Khai giảng : </strong>
                {moment(detail.opening_time).format("DD/MM/YYYY")}
              </div>
              <div className="time">
                <strong>Thời lượng : </strong>
                {detail.content.length} buổi
              </div>
            </div>
            <Link
              className="btn white round"
              style={{ "--color-btn": "#70b6f1" }}
              to={registerPath}
            >
              đăng ký
            </Link>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="video" onClick={() => setIsOpenVideo(true)}>
              <div className="icon">
                <img src="/img/play-icon-white.png" alt="" />
              </div>
              <span>giới thiệu</span>
            </div>
            <VideoPopupModal
              visible={isOpenVideo}
              maskClosable={false}
              onCancel={() => setIsOpenVideo(false)}
            >
              <AspectRatio width={1000} ratio={9 / 16} className="video-src">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/wlBr9QCucZs"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </AspectRatio>
            </VideoPopupModal>
            <div className="money">{currency(detail.money)} VND</div>
          </div>
        </div>
      </section>
      <section className="section-2">
        <div className="container">
          <p className="des">{detail.long_description}</p>
          <h2 className="title">giới thiệu về khóa học</h2>
          <div className="cover">
            <img src="/img/course-detail-img.png" alt="" />
          </div>
          <h3 className="title">nội dung khóa học</h3>
          <Accordion.Group>
            {detail.content.map((e, i) => (
              <Accordion date={i + 1} key={i} {...e}>
                {e.content}
              </Accordion>
            ))}
          </Accordion.Group>
          <h3 className="title">yêu cầu cần có</h3>
          <div className="row row-check">
            {detail.required.map((e, i) => (
              <div key={i} className="col-md-6">
                {e.content}
              </div>
            ))}
          </div>
          <h3 className="title">hình thức học</h3>
          <div className="row row-check">
            {detail.benefits.map((e, i) => (
              <div key={i} className="col-md-6">
                {e.content}
              </div>
            ))}
          </div>
          <h3 className="title">
            <div className="date-start">lịch học</div>
            <div className="sub">
              *Lịch học và thời gian có thể thống nhất lại theo số đông học
              viên.
            </div>
          </h3>
          <p>
            <strong>Ngày bắt đầu: </strong>
            {moment(detail.opening_time).format("DD/MM/YYYY")} <br />
            <strong>Thời gian học: </strong> {detail.schedule}
          </p>
          <div className="title">Người dạy</div>
          <div className="teaches">
            <Teacher {...detail.teacher} />
          </div>
          {detail.mentor.length > 0 && (
            <>
              <div className="title">Người hướng dẫn</div>
              <div className="teaches">
                {detail.mentor.map((e) => (
                  <Teacher key={id} {...e} />
                ))}
              </div>
            </>
          )}
          <div className="bottom">
            <div className="user">
              <img src="/img/user-group-icon.png" alt="" /> 12 bạn đã đăng ký
            </div>
            <Link to={registerPath} className="btn main btn-register round">
              đăng ký
            </Link>
            <div className="btn-share btn overlay round btn-icon">
              <img src="/img/facebook.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-4">
        <div className="container">
          <div className="textbox">
            <h3 className="sub-title">Khóa học</h3>
            <h2 className="main-title">Liên quan</h2>
          </div>
          <div className="list row">
            {related &&
              related?.data.map((e) => <CourseCard key={e.id} {...e} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
