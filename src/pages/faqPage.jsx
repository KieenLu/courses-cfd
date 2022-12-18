import React from "react";
import { useState } from "react";
import { Accordion } from "../components/Accordion";

export default function FaqPage() {
  return (
    <main className="faqpage" id="main">
      <div className="container">
        <section>
          <h2 className="main-title">Câu hỏi thường gặp</h2>
          <div className="row">
            <div className="accordion_wrap col-md-8 offset-md-2 col-sm-12">
              <h3 className="accordion__title-main">Thông tin chung</h3>
              <Accordion.Group>
                <Accordion title="Spacedev là gì?">
                  I'd like to demonstrate a powerful little pattern called
                  “Server-Fetched Partials” that offers some tangible benefits
                  over alternatives like VueJS for simple page interactions.
                </Accordion>
                <Accordion title="Thành viên sáng lập Spacedev gồm những ai?">
                  I'd like to demonstrate a powerful little pattern called
                  “Server-Fetched Partials” that offers some tangible benefits
                  over alternatives like VueJS for simple page interactions.
                </Accordion>
                <Accordion title="Đăng ký khóa học như thế nào?">
                  I'd like to demonstrate a powerful little pattern called
                  “Server-Fetched Partials” that offers some tangible benefits
                  over alternatives like VueJS for simple page interactions.
                </Accordion>
              </Accordion.Group>
            </div>
            <div className="accordion_wrap col-md-8 offset-md-2 col-sm-12">
              <h3 className="accordion__title-main">
                Đăng ký, thanh toán và điểm thưởng
              </h3>
              <Accordion.Group>
                <Accordion title="Spacedev là gì?">
                  I'd like to demonstrate a powerful little pattern called
                  “Server-Fetched Partials” that offers some tangible benefits
                  over alternatives like VueJS for simple page interactions.
                </Accordion>
                <Accordion title="Thành viên sáng lập Spacedev gồm những ai?">
                  I'd like to demonstrate a powerful little pattern called
                  “Server-Fetched Partials” that offers some tangible benefits
                  over alternatives like VueJS for simple page interactions.
                </Accordion>
                <Accordion title="Đăng ký khóa học như thế nào?">
                  I'd like to demonstrate a powerful little pattern called
                  “Server-Fetched Partials” that offers some tangible benefits
                  over alternatives like VueJS for simple page interactions.
                </Accordion>
              </Accordion.Group>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
