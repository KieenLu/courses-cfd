import React from "react";
import { useQuery } from "../../hooks/useQuery";
import Skeleton from "../../components/Skeleton";
import moment from "moment";
import { courseService } from "../../services/course";
import { generatePath, Link } from "react-router-dom";
import { PATH } from "../../config/path";

export default function MyCourse() {
  const { data: courses, loading } = useQuery(() => courseService.myCourse());

  return (
    <div className="tab2">
      {loading
        ? Array.from(Array(3)).map((_, i) => (
            <div key={i} className="mb-5">
              <div className="item">
                <div className="cover">
                  <Skeleton height={250} />
                </div>
                <div className="info">
                  <Skeleton height={31} />
                  <div className="date">
                    <Skeleton height={24} />
                  </div>
                  <div className="row">
                    <div>
                      <img src="/img/clock.svg" alt="" className="icon" />
                      <Skeleton height={24} width={60} />
                    </div>
                    <div>
                      <img src="/img/play.svg" alt="" className="icon" />
                      <Skeleton height={24} width={60} />
                    </div>
                    <div>
                      <img src="/img/user.svg" alt="" className="icon" />
                      <Skeleton height={24} width={60} />
                    </div>
                  </div>
                  <div className="process">
                    <Skeleton height={24} />
                  </div>
                  <Link className="btn overlay round btn-continue">
                    Tiếp tục học
                  </Link>
                </div>
              </div>
            </div>
          ))
        : courses.data.map((e, _) => {
            const coursesPath = generatePath(PATH.coursedetail, {
              slug: e.course.slug,
              id: e.course.id,
            });
            return (
              <div key={_} className="item">
                <div className="cover">
                  <img src={e.course.thumbnailUrl} alt="" />
                </div>
                <div className="info">
                  <Link to={coursesPath} className="name">
                    {e.course.title}
                  </Link>
                  <div className="date">
                    {moment(e.course.opening_time).format("DD/MM/YYYY")}
                  </div>
                  <div className="row">
                    <div>
                      <img src="/img/clock.svg" alt="" className="icon" />
                      {e.total_hours} giờ
                    </div>
                    <div>
                      <img src="/img/play.svg" alt="" className="icon" />
                      {e.video} video
                    </div>
                    <div>
                      <img src="/img/user.svg" alt="" className="icon" />
                      {e.student} học viên
                    </div>
                  </div>
                  <div className="process">
                    <div className="line">
                      <div
                        className="rate"
                        style={{ width: `${e.process}%` }}
                      />
                    </div>
                    {e.process} %
                  </div>
                  <Link
                    to={coursesPath}
                    className="btn overlay round btn-continue"
                  >
                    Tiếp tục học
                  </Link>
                </div>
              </div>
            );
          })}
    </div>
  );
}
