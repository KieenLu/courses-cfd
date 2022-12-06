import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PATH } from "../../config/path";

export default function AuthRouter({ user, redirect }) {
  if (user) return <Navigate to={redirect} />;

  return <Outlet />;
}