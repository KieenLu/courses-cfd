import React, { useState } from "react";
import { useEffect } from "react";
import { courseService } from "../../services/course";
import CourseCard, { CardLoading } from "../CourseCard";
import Skeleton from "../Skeleton";


export default function ListCourse() {

const [loading, setLoading] = useState(true);


  const [courses, setCourses] = useState([]);
  useEffect(() => {
    setLoading(true) 
    courseService.getCourse().then((data) => {
      setCourses(data?.data);
      
    })
    .finally(() => {
      setLoading(false)
    });
  }, []);
  console.log(courses);


  return (
    <main className="homepage" id="main">
      <section className="section-1">
        <div className="container">
          <h2 className="main-title">KHÓA HỌC SPACEDEV</h2>
          <p className="top-des">
            Cho dù bạn muốn tìm kiếm công việc, khởi nghiệp, phát triển hoạt
            động kinh doanh hay chỉ đơn giản là muốn khám phá thế giới, hãy chọn
            lộ trình học tập mà bạn muốn và bắt đầu câu chuyện thành công của
            bạn.
          </p>
          <div className="textbox" style={{ marginTop: "100px" }}>
            <h3 className="sub-title">KHÓA HỌC</h3>
            <h2 className="main-title">OFFLINE</h2>
          </div>
          <div className="list row">
          {
          loading ? Array.from(Array(6)).map((_,i ) =>
            <CardLoading   className="col-md-4" style={{marginBottom: 20}} key={i}><Skeleton width="100%" height={460}/></CardLoading>
          ) :
           courses.map((e) => (
              <CourseCard key={e.id} {...e} />
            )) }
          </div>
        </div>
      </section>
    </main>
  );
}
