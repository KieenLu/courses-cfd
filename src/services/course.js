import { COURSE_API } from "../config/api";

const courses = [
  {
    id: 17,
    money: 6000000,
    long_description:
      "Nếu bạn đã có kiến thức cơ bản về lập trình website responsive hoặc đã học qua khóa CFD Căn Bản. Bạn muốn nâng cao kiến thức và có nhiều cơ hội để ứng tuyển hơn vào vị trí Front-End Developer thì React Js chính là thư viện javascript được quan tâm nhất hiện nay. Khóa React Js tại CFD sẽ hướng dẫn bạn có được kiến thức và kỹ năng quan trọng dựa trên thực hành dự án thực tế xuyên suốt khóa học.",
    short_description:
      "Khóa học thực chiến Javascript nâng cao, ES6, JSON, API và React JS.",
    slug: "cfd4-react-js",
    title: "CFD4 React JS",
    thumbnailUrl:
      "https://cfdcircle.vn/files/thumbnails/ZUTudJyluuW4DGhZ6iXS2z6jRnEe7RnKTKhDTR6h.jpg",
  },
  {
    id: 5,
    money: 6000000,
    long_description:
      "Nếu bạn đã có kiến thức cơ bản về lập trình Website Responsive hoặc đã học qua khóa CFD Căn Bản, bạn muốn muốn có nhiều cơ hội để ứng tuyển vào vị trí Front-End Developer thì React JS là thư viện javascript được các công ty yêu cầu nhiều nhất hiện nay. Khóa React JS tại CFD sẽ hướng dẫn bạn có được kiến thức và kỹ năng quan trọng để đi làm dựa trên thực hành dự án thực tế xuyên suốt khóa học.",
    short_description:
      "Khóa học thực chiến dự án thực tế gồm Javascript nâng cao, ES6, JSON, API và React JS.",
    slug: "cfd2-react-js",
    title: "CFD2 React JS",
    thumbnailUrl:
      "https://cfdcircle.vn/files/thumbnails/ZUTudJyluuW4DGhZ6iXS2z6jRnEe7RnKTKhDTR6h.jpg",
  },
  {
    id: 8,
    money: 4000000,
    long_description:
      "Nếu bạn đang theo đuổi nghề Front-End Developer và đã từng học qua HTML, CSS, thậm chí là Javascript, nhưng chưa có cơ hội thực chiến dự án thực tế Website Responsive theo bảng thiết kế, tư duy về animation, cấu trúc thư mục, tối ưu tốc độ wesbite, cũng như quy trình phân tích và triển khai dự án thực tế, thì khóa học CFD Căn Bản là sự lựa chọn phù hợp nhất dành cho bạn.",
    short_description:
      "Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery.",
    slug: "cfd1-web-responsive",
    title: "CFD1 Web Responsive",
    thumbnailUrl:
      "https://cfdcircle.vn/files/thumbnails/ZUTudJyluuW4DGhZ6iXS2z6jRnEe7RnKTKhDTR6h.jpg",
  },
  {
    id: 9,
    money: 4000000,
    long_description:
      "Bạn đang là sinh viên, người đi làm hoặc từ ngành khác chuyển qua đang theo đuổi nghề Front-End Developer và đã từng học HTML, CSS, thậm chí là Javascript, nhưng chưa có cơ hội thực chiến dự án thực tế Website Responsive theo bảng thiết kế hoàn chỉnh, tư duy về animation, cấu trúc thư mục dự án, tối ưu tốc độ website, cũng như quy trình phân tích và triển khai dự án thực tế, thì khóa học CFD Căn Bản là sự lựa chọn phù hợp nhất dành cho bạn.",
    short_description:
      "Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery.",
    slug: "cfd2-web-responsive-2",
    title: "CFD2 Web Responsive",
    thumbnailUrl:
      "https://cfdcircle.vn/files/thumbnails/ahvVmtDlrzUPhKLDrc4YkdA8iFbACauYCN76TSGs.jpg",
  },
  {
    id: 10,
    money: 4000000,
    long_description:
      "Nếu bạn đang theo đuổi nghề Front-End Developer và đã từng học qua HTML, CSS, thậm chí là Javascript, nhưng chưa có cơ hội thực chiến dự án thực tế Website Responsive theo bảng thiết kế, tư duy về animation, cấu trúc thư mục, tối ưu tốc độ, cũng như quy trình phân tích và triển khai dự án thực tế, thì khóa học CFD Căn Bản là sự lựa chọn phù hợp nhất dành cho bạn.",
    short_description:
      "Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery.",
    slug: "cfd1-can-ban",
    title: "CFD1 Căn Bản",
    thumbnailUrl:
      "https://cfdcircle.vn/files/thumbnails/ZUTudJyluuW4DGhZ6iXS2z6jRnEe7RnKTKhDTR6h.jpg",
  },
  {
    id: 11,
    money: 4000000,
    long_description:
      "Nếu bạn đang theo đuổi nghề Front-End Developer và đã từng học qua HTML, CSS, thậm chí là Javascript, nhưng chưa có cơ hội thực chiến dự án thực tế Website Responsive theo bảng thiết kế, tư duy về animation, cấu trúc thư mục, tối ưu tốc độ website, cũng như quy trình phân tích và triển khai dự án thực tế, thì khóa học CFD Căn Bản là sự lựa chọn phù hợp nhất dành cho bạn.",
    short_description:
      "Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery.",
    slug: "cfd2-web-responsive",
    title: "CFD2 Web Responsive",
    thumbnailUrl:
      "https://cfdcircle.vn/files/thumbnails/ahvVmtDlrzUPhKLDrc4YkdA8iFbACauYCN76TSGs.jpg",
  },
  {
    id: 13,
    money: 6000000,
    long_description:
      "Nếu bạn đã có kiến thức cơ bản về lập trình website responsive hoặc đã học qua khóa CFD Căn Bản. Bạn muốn nâng cao kiến thức và có nhiều cơ hội để ứng tuyển hơn vào vị trí Front-End Developer thì React Js chính là thư viện javascript được quan tâm nhất hiện nay. Khóa React Js tại CFD sẽ hướng dẫn bạn có được kiến thức và kỹ năng quan trọng dựa trên thực hành dự án thực tế xuyên suốt khóa học.",
    short_description:
      "Khóa học thực chiến Javascript nâng cao, ES6, JSON, API và React JS.",
    slug: "cfd3-react-js",
    title: "CFD3 React JS",
    thumbnailUrl:
      "https://cfdcircle.vn/files/thumbnails/ZUTudJyluuW4DGhZ6iXS2z6jRnEe7RnKTKhDTR6h.jpg",
  },
  {
    id: 14,
    money: 4000000,
    long_description:
      "Bạn đang là sinh viên, người đi làm hoặc từ ngành khác chuyển qua đang theo đuổi nghề Front-End Developer và đã từng học HTML, CSS, thậm chí là Javascript, nhưng chưa có cơ hội thực chiến dự án thực tế Website Responsive theo bảng thiết kế hoàn chỉnh, tư duy về animation, cấu trúc thư mục dự án, tối ưu tốc độ website, cũng như quy trình phân tích và triển khai dự án thực tế, thì khóa học CFD Căn Bản là sự lựa chọn phù hợp nhất dành cho bạn.",
    short_description:
      "Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery.",
    slug: "cfd3-web-responsive",
    title: "CFD3 Web Responsive",
    thumbnailUrl:
      "https://cfdcircle.vn/files/thumbnails/ahvVmtDlrzUPhKLDrc4YkdA8iFbACauYCN76TSGs.jpg",
  },
  {
    id: 15,
    money: 6000000,
    long_description:
      "Nếu bạn đã có kiến thức cơ bản về lập trình website responsive hoặc đã học qua khóa CFD Căn Bản. Bạn muốn muốn nâng cao kiến thức và có nhiều cơ hội để ứng tuyển hơn vào vị trí Front-End Developer thì React Js chính là thư viện javascript được quan tâm nhất hiện nay. Khóa React Js tại CFD sẽ hướng dẫn bạn có được kiến thức và kỹ năng quan trọng dựa trên thực hành dự án thực tế xuyên suốt khóa học.",
    short_description:
      "Khóa học thực chiến Javascript nâng cao, ES6, JSON, API và React JS.",
    slug: "cfd3-react-js-online",
    title: "CFD3 React JS",
    thumbnailUrl:
      "https://cfdcircle.vn/files/thumbnails/ZUTudJyluuW4DGhZ6iXS2z6jRnEe7RnKTKhDTR6h.jpg",
  },
  {
    id: 16,
    money: 4000000,
    long_description:
      "Bạn đang là sinh viên, người đi làm hoặc từ ngành khác chuyển qua đang theo đuổi nghề Front-End Developer và đã từng học HTML, CSS, thậm chí là Javascript, nhưng chưa có cơ hội thực chiến dự án thực tế Website Responsive theo bảng thiết kế hoàn chỉnh, tư duy về animation, cấu trúc thư mục dự án, tối ưu tốc độ website, cũng như quy trình phân tích và triển khai dự án thực tế, thì khóa học CFD Căn Bản là sự lựa chọn phù hợp nhất dành cho bạn.",
    short_description:
      "Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery.",
    slug: "cfd4-can-ban",
    title: "CFD4 Web Responsive",
    thumbnailUrl:
      "https://cfdcircle.vn/files/thumbnails/ahvVmtDlrzUPhKLDrc4YkdA8iFbACauYCN76TSGs.jpg",
  },
  {
    id: 18,
    money: 4000000,
    long_description:
      "Bạn đang là sinh viên, người đi làm hoặc từ ngành khác chuyển qua đang theo đuổi nghề Front-End Developer và đã từng học HTML, CSS, thậm chí là Javascript, nhưng chưa có cơ hội thực chiến dự án thực tế Website Responsive theo bảng thiết kế hoàn chỉnh, tư duy về animation, cấu trúc thư mục dự án, tối ưu tốc độ website, cũng như quy trình phân tích và triển khai dự án thực tế, thì khóa học CFD Căn Bản là sự lựa chọn phù hợp nhất dành cho bạn.",
    short_description:
      "Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery.",
    slug: "cfd5-can-ban",
    title: "CFD5 Web Responsive",
    thumbnailUrl:
      "https://cfdcircle.vn/files/thumbnails/ZUTudJyluuW4DGhZ6iXS2z6jRnEe7RnKTKhDTR6h.jpg",
  },
  {
    id: 19,
    money: 6000000,
    long_description:
      "Nếu bạn đã có kiến thức cơ bản về lập trình website responsive hoặc đã học qua khóa CFD Căn Bản. Bạn muốn nâng cao kiến thức và có nhiều cơ hội để ứng tuyển hơn vào vị trí Front-End Developer thì React Js chính là thư viện javascript được quan tâm nhất hiện nay. Khóa React Js tại CFD sẽ hướng dẫn bạn có được kiến thức và kỹ năng quan trọng dựa trên thực hành dự án thực tế xuyên suốt khóa học.",
    short_description:
      "Khóa học thực chiến Javascript, ES6, JSON, API và React JS, Redux.",
    slug: "cfd5-react-js",
    title: "CFD5 React JS",
    thumbnailUrl:
      "https://cfdcircle.vn/files/thumbnails/ZUTudJyluuW4DGhZ6iXS2z6jRnEe7RnKTKhDTR6h.jpg",
  },
];

export const courseService =  {
  getCourse() {
    return fetch(`${COURSE_API}/courses`).then(
      (res) => res.json()
    );
  },
  getCourseDetail(id) {
    return courses.find((e) => e.id == id);
  },
};
