import React from "react";
import { generatePath, Link } from "react-router-dom";
import { PATH } from "../../config/path";
import Skeleton from "../Skeleton";
export default function CourseCard({
  money,
  long_description,
  short_description,
  thumbnailUrl,
  title,
  slug,
  id,
}) {
  const path = generatePath(PATH.coursedetail, { slug: slug,id: id });
 
  const registerPath = generatePath(PATH.courseregister, {slug, id});
  return (
    <div className="col-md-4 course">
      <div className="wrap">
        <Link className="cover" to={path}>
          <img src={thumbnailUrl} alt="" />
        </Link>
        <div className="info">
          <Link className="name" to={path}>
            {title}
          </Link>
          <p className="des">{short_description}</p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src="/img/avt.png" alt="" />
            </div>
            <div className="name">Vương Đặng</div>
          </div>
          <Link to={registerPath} className="register-btn">
            Đăng Ký
          </Link>
        </div>
      </div>
    </div>
  );
}

export const CardLoading = () => {
  return (
    <div className="col-md-4 course">
    <div className="wrap">
      <Link className="cover" to="#">
    <Skeleton height={310}/>
      </Link>
      <div className="info">
        <Link className="name" to="#">
        <Skeleton height={30}/>
        </Link>
        <p className="des">
        <Skeleton height={80}/>
        </p>
      </div>
      <div className="bottom">
        <div className="teacher">
          <div className="avatar">
          <Skeleton shape="circle" width={36} height= {36}/>
          </div>
          <div className="name"><Skeleton height={24} width={95}/></div>
        </div>
        <Link to="#" className="register-btn">
          Đăng Ký
        </Link>
      </div>
    </div>
  </div>
  )
}