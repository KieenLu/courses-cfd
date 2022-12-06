import AuthRouter from "../components/AuthRouter";
import { PATH } from "../config/path";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages";
import ContactPage from "../pages/contactPage";
import FaqPage from "../pages/faqPage";
import Page404 from "../pages/page404";
import PaymentPage from "../pages/paymentpage";
import ProjectPage from "../pages/projectPage";
import RegisterPage from "../pages/registerPage/[slug]-id[id]";
import ResetPasswordPage from "../pages/resetPasswordPage";
import SigninPage from "../pages/signinPage";
import SignupPage from "../pages/signupPage";
import TeamPage from "../pages/teamPage";
import { courseRouters } from "./course";
import { profileRouters } from "./profile";
export const routers = (user, login, logout) => [
  {
    element: <MainLayout user={user} logout={logout} />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        element: <ContactPage />,
        path: PATH.contact,
      },
      courseRouters(),
      {
        element: <TeamPage />,
        path: PATH.team,
      },
      {
        element: <FaqPage />,
        path: PATH.faq,
      },

      {
        element: <AuthRouter user={user} redirect={PATH.profile.index} />,
        children: [
          {
            element: <SigninPage login={login} />,
            path: PATH.signin,
          },
          {
            element: <SignupPage />,
            path: PATH.signup,
          },
          {
            element: <ResetPasswordPage />,
            path: PATH.resetpassword,
          },
        ],
      },
      {
        element: <PaymentPage />,
        path: PATH.payment,
      },
      {
        element: <ProjectPage />,
        path: PATH.project,
      },
      {
        element: <RegisterPage />,
        path: PATH.courseregister,
      },
      {},
      profileRouters(user),
      {
        element: <Page404 />,
        path: "/*",
      },
    ],
  },
];
