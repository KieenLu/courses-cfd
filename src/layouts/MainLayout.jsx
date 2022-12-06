import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";

export default function MainLayout(props) {
  return (
    <>
      <Header {...props} />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
