import moment from "moment/moment";
import { useState } from "react";
import { Link, generatePath, useParams } from "react-router-dom";
import { Accordion } from "../../components/Accordion";
import { AspectRatio } from "../../components/AspectRatio";
import CourseCard from "../../components/CourseCard";
import Skeleton from "../../components/Skeleton";
import { Teacher } from "../../components/Teacher";
import { VideoPopupModal } from "../../components/VideoPopupModal";

import { useQuery } from "@/hooks/useQuery";
import { PATH } from "../../config/path";
import { useScrollTop } from "../../hooks/useScrollTop";
import { courseService } from "../../services/course";
import { currency } from "../../utils/currency";
import Page404 from "../page404";
import { ONE_HOUR } from "@/config";

export default function CouseDetailPage() {
  const [isOpenVideo, setIsOpenVideo] = useState(false);
  const { id } = useParams();
  useScrollTop([id]);

  const { data: { data: detail = [] } = {}, loading } = useQuery({
    queryFn: () => courseService.getCourseDetail(id),
    dependencyList: [id],
    queryKey: `courses-${id}`,
    cacheTime: ONE_HOUR,
  });

  const { data: { data: related } = {} } = useQuery({
    queryFn: () => courseService.getCourseRelative(id),
    cacheTime: ONE_HOUR,
    queryKey: `courses-related-${id}`,
  });

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
                <strong>Khai gi???ng : </strong>
                {moment(detail.opening_time).format("DD/MM/YYYY")}
              </div>
              <div className="time">
                <strong>Th???i l?????ng : </strong>
                {detail.content.length} bu???i
              </div>
            </div>
            <Link
              className="btn white round"
              style={{ "--color-btn": "#70b6f1" }}
              to={registerPath}
            >
              ????ng k??
            </Link>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="video" onClick={() => setIsOpenVideo(true)}>
              <div className="icon">
                <img src="/img/play-icon-white.png" alt="" />
              </div>
              <span>gi???i thi???u</span>
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
          <h2 className="title">gi???i thi???u v??? kh??a h???c</h2>
          <div className="cover">
            <img src="/img/course-detail-img.png" alt="" />
          </div>
          <h3 className="title">n???i dung kh??a h???c</h3>
          <Accordion.Group>
            {detail.content.map((e, i) => (
              <Accordion date={i + 1} key={i} {...e}>
                {e.content}
              </Accordion>
            ))}
          </Accordion.Group>
          <h3 className="title">y??u c???u c???n c??</h3>
          <div className="row row-check">
            {detail.required.map((e, i) => (
              <div key={i} className="col-md-6">
                {e.content}
              </div>
            ))}
          </div>
          <h3 className="title">h??nh th???c h???c</h3>
          <div className="row row-check">
            {detail.benefits.map((e, i) => (
              <div key={i} className="col-md-6">
                {e.content}
              </div>
            ))}
          </div>
          <h3 className="title">
            <div className="date-start">l???ch h???c</div>
            <div className="sub">
              *L???ch h???c v?? th???i gian c?? th??? th???ng nh???t l???i theo s??? ????ng h???c
              vi??n.
            </div>
          </h3>
          <p>
            <strong>Ng??y b???t ?????u: </strong>
            {moment(detail.opening_time).format("DD/MM/YYYY")} <br />
            <strong>Th???i gian h???c: </strong> {detail.schedule}
          </p>
          <div className="title">Ng?????i d???y</div>
          <div className="teaches">
            <Teacher {...detail.teacher} />
          </div>
          {detail.mentor.length > 0 && (
            <>
              <div className="title">Ng?????i h?????ng d???n</div>
              <div className="teaches">
                {detail.mentor.map((e) => (
                  <Teacher key={id} {...e} />
                ))}
              </div>
            </>
          )}
          <div className="bottom">
            <div className="user">
              <img src="/img/user-group-icon.png" alt="" /> 12 b???n ???? ????ng k??
            </div>
            <Link to={registerPath} className="btn main btn-register round">
              ????ng k??
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
            <h3 className="sub-title">Kh??a h???c</h3>
            <h2 className="main-title">Li??n quan</h2>
          </div>
          <div className="list row">
            {related && related?.map((e) => <CourseCard key={e.id} {...e} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
