import React, { useState } from "react";
import Field from "../components/Field";
import { validate, required, regexp } from "./utils/validate";
import { useForm } from "../hooks/useForm";
import { organizationService } from "../services/organization";
import Button from "../components/Button";
import { useAsync } from "../hooks/useAsync";
import { message } from "antd";
export default function ContactPage() {
  // const [loading, setLoading] = useState(false)

  const { excute, loading } = useAsync(organizationService.contact);

  const [isSuccess, setIsSuccess] = useState(false);
  const { validate, register, values, reset } = useForm({
    name: [required()],
    email: [
      required(),
      regexp("email", "Xin vui lòng nhập đúng định dạng Email"),
    ],
    phone: [
      required(),
      regexp("phone", "Xin vui lòng nhập đúng định dạng số điện thoại"),
    ],
    title: [required(), regexp("title", "")],
    website: [regexp("website", "Xin vui lòng nhập đúng định dạng website")],
  });
  const onSubmit = async (ev) => {
    ev.preventDefault();
    try {
      if (validate()) {
        const res = await organizationService.contact(values);
        if (res) {
          reset();
          message.success(
            "Bạn đã gửi liên hệ thành công, chúng tôi sẽ phản hồi bạn trong thời gian sớm nhất"
          );
          setIsSuccess(true);
        }
      } else {
        console.log("non thanh cong");
      }
    } catch (err) {}
  };

  return (
    <main className="register-course" id="main">
      <section className="section-1 wrap container">
        {isSuccess ? (
          <>
            {" "}
            <h2 className="main-title">Liên hệ thành công</h2>
            <p className="top-des">
              Bạn đã liên hệ thành với <strong>Spacedev</strong>. Chúng tôi sẽ
              phản hồi bạn trong thời gian sớm nhất có thể. Xin cảm ơn.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <a
                className="link"
                href="#"
                onClick={(ev) => {
                  ev.preventDefault();
                  setIsSuccess(true);
                }}
              >
                Tiếp tục liên hệ
              </a>
            </div>
          </>
        ) : (
          <>
            {/* <div class="main-sub-title">liên hệ</div> */}
            <h2 className="main-title">HỢP TÁC CÙNG Spacedev</h2>
            <p className="top-des">
              Đừng ngần ngại liên hệ với <strong>Spacedev</strong> để cùng nhau
              tạo ra những sản phẩm giá trị, cũng như việc hợp tác với các đối
              tác tuyển dụng và công ty trong và ngoài nước.
            </p>
            <form className="form" onSubmit={onSubmit}>
              <Field
                label="Họ và tên"
                placeholder="Họ và tên"
                required
                {...register("name")}
              ></Field>
              <Field
                label="Số điện thoại"
                placeholder="Số điện thoại"
                required
                {...register("phone")}
              ></Field>
              <Field
                label="Email"
                placeholder="Hãy nhập Email . . ."
                required
                {...register("email")}
              ></Field>
              <Field
                label="Website"
                placeholder="Nhập Website https:// . . ."
                required={false}
                {...register("website")}
              ></Field>
              <Field
                label="Tiêu đề"
                placeholder="Tiêu đề"
                required
                {...register("title")}
              ></Field>
              <Field
                label="Nội dung"
                placeholder="Nội dung"
                required={false}
                {...register("content")}
                renderInput={(props) => (
                  <textarea {...props} cols={30} rows={10} />
                )}
              ></Field>
              <Button loading={loading}>đăng ký</Button>
            </form>
          </>
        )}
      </section>
      {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Vương Đặng đã trở thành thành viên mới của Spacedev Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>Spacedev</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
    </main>
  );
}
