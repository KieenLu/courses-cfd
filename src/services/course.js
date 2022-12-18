import { api, COURSE_API } from "../config/api";

export const courseService = {
  getCourse: (query = "") => {
    return api.get(`${COURSE_API}/courses${query}`);
  },
  getCourseDetail(id) {
    return api.get(`${COURSE_API}/courses/${id}`);
  },
  getCourseRelative(id) {
    return api.get(`${COURSE_API}/courses/related/${id}`);
  },
  registerCourse(id, data) {
    return api.post(`${COURSE_API}/courses/register/${id}`, data);
  },
  myCourse() {
    return api.get(`${COURSE_API}/courses/my-course`);
  },
};
