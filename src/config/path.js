const PROFILE_PATH = "/profile";
const COURSE_PATH = "/courselist";

export const PATH = {
  home: "/",
  team: "/team",

  project: "/project",
  profile: {
    index: PROFILE_PATH,
    course: PROFILE_PATH + "/course",
    coin: PROFILE_PATH + "/coin",
    payment: PROFILE_PATH + "/payment",
    project: PROFILE_PATH + "/project",
  },
  courselist: COURSE_PATH,
  coursedetail: COURSE_PATH + "/:slug-id:id",
  coin: "/coin",
  payment: "/payment",
  courseregister: "/register/:slug-id:id",
  faq: "/faq",
  resetpassword: "/resetpassword",
  signin: "/signin",
  contact: "/contact",
  signup: "/signup",
};
