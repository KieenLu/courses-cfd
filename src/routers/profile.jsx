import PrivateRouter from "../components/PrivateRouter";
import { PATH } from "../config/path";
import ProfileLayout from "../layouts/ProfileLayout";
import Profile from "../pages/profilePage";
import Coin from "../pages/profilePage/coin";
import Course from "../pages/profilePage/course";
import Payment from "../pages/profilePage/payment";
import Project from "../pages/profilePage/project";

export const profileRouters = (user) => {
  return {
    element: <PrivateRouter user={user} redirect={PATH.signin} />,
    children: [
      {
        element: <ProfileLayout user={user} />,
        children: [
          {
            element: <Profile />,
            path: PATH.profile.index,
          },
          {
            element: <Project />,
            path: PATH.profile.project,
          },
          {
            element: <Course />,
            path: PATH.profile.course,
          },
          {
            element: <Payment />,
            path: PATH.profile.payment,
          },
          {
            element: <Coin />,
            path: PATH.profile.coin,
          },
        ],
      },
    ],
  };
};
