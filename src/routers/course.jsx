import { PATH } from "../config/path";
import CourseListPage from "../pages/coursePage";
import CouseDetailPage from "../pages/coursePage/[slug]-id[id]";

export const courseRouters = () => {
  return {
    path: PATH.courselist,
    children: [
      {
        element: <CourseListPage />,
        index: true,
      },
      {
        element: <CouseDetailPage />,
        path: PATH.coursedetail,
      },
    ],
  };
};
