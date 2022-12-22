import { lazy } from "react";
import AuthRouter from "../components/AuthRouter";
import { PATH } from "../config/path";
import { courseRouters } from "./course";
import { profileRouters } from "./profile";
const MainLayout = lazy(() => import("../layouts/MainLayout"));
const HomePage = lazy(() => import("../pages"));
const CoinPage = lazy(() => import("../pages/coinPage"));
const ContactPage = lazy(() => import("../pages/contactPage"));
const FaqPage = lazy(() => import("../pages/faqPage"));
const Page404 = lazy(() => import("../pages/page404"));
const PaymentPage = lazy(() => import("../pages/paymentPage"));
const ProjectPage = lazy(() => import("../pages/projectPage"));
const RegisterPage = lazy(() => import("../pages/registerPage/[slug]-id[id]"));
const ResetPasswordPage = lazy(() => import("../pages/resetPasswordPage"));
const SignupPage = lazy(() => import("../pages/signupPage"));
const TeamPage = lazy(() => import("../pages/teamPage"));
const SigninPage = lazy(() => import("../pages/signinPage"));

export const routers = [
  {
    element: <MainLayout />,
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
        element: <AuthRouter redirect={PATH.profile.index} />,
        children: [
          {
            element: <SigninPage />,
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
      profileRouters(),
      {
        element: <Page404 />,
        path: "/*",
      },
      {
        element: <CoinPage />,
        path: "/coin",
      },
    ],
  },
];
