import React from "react";
import { useState } from "react";
import Field from "../../components/Field";
import { required } from "../utils/validate";
import { regexp } from "../utils/validate";
import { useForm } from "../../hooks/useForm";
import { Link, useParams } from "react-router-dom";
import { courseService } from "../../services/course";
import { useScrollTop } from "../../hooks/useScrollTop";
import { PATH } from "../../config/path";
import { currency } from "../utils/currency";
import { useQuery } from "../../hooks/useQuery";

export default function RegisterPage() {
  const { id } = useParams();

const {data, loading} = useQuery(() => courseService.getCourseDetail(id)) 

  useScrollTop([id]);

  const { validate, register, values } = useForm({
    name: [required("")],
    email: [
      required(),
      regexp("email", "Xin vui lòng nhập đúng định dạng Email"),
    ],
    phone: [
      required(),
      regexp("phone", "Xin vui lòng nhập đúng định dạng số điện thoại"),
    ],
    facebook: [
      required(),
      regexp("facebook", "Xin vui lòng nhập đúng website Facebook của bạn"),
    ],
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = () => {
    if (validate()) {
      setIsSuccess(true);
      console.log("Validate thanh cong ");
    } else {
      console.log("Validate that bai ");
    }
  };
  if (loading) return null
let {data: detail} = data
  return (
    <main className="register-course" id="main">
      {isSuccess ? (
        <div
          className="register-success"
          style={{ margin: "40px auto", textAlign: "center" }}
        >
          <div className="contain" style={{ marginBottom: "40px" }}>
            <div className="main-title">đăng ký thành công</div>
            <p>
              <strong>
                Chào mừng {values.name} đã trở thành thành viên mới của Spacedev
                Team.
              </strong>{" "}
              <br />
              Cảm ơn bạn đã đăng ký khóa học tại <strong>Spacedev</strong>,
              chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook hoặc số
              điện thoại của bạn.
            </p>
          </div>
          <Link to={PATH.home} className="btn main rect">
            về trang chủ
          </Link>
        </div>
      ) : (
        <section>
          <div className="container">
            <div className="wrap container">
              <div className="main-sub-title">ĐĂNG KÝ</div>
              <h1 className="main-title">{detail.title}</h1>
              <div className="main-info">
                <div className="date">
                  <strong>Khai giảng:</strong> 15/11/2020
                </div>
                <div className="time">
                  <strong>Thời lượng:</strong> 18 buổi
                </div>
                <div className="time">
                  <strong>Học phí:</strong>
                  {currency(detail.money)} VND
                </div>
              </div>
              <div className="form">
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
                  label="URL Facebook"
                  placeholder="https://facebook.com"
                  required
                  {...register("facebook")}
                ></Field>
                <Field
                  label="Sử dụng COIN"
                  {...register("title")}
                  renderInput={(props) => (
                    <div className="checkcontainer">
                      Hiện có <strong>300 COIN</strong>
                      <input type="checkbox" {...props}></input>
                      <span className="checkmark"></span>
                    </div>
                  )}
                ></Field>
                <Field
                  label="Hình thức thanh toán"
                  {...register("payment")}
                  renderInput={(props) => (
                    <div className="select">
                      <div className="head">Chuyển khoản</div>
                      <div className="sub">
                        <a href="#">Chuyển khoản</a>
                        <a href="#">Thanh toán tiền mặt</a>
                      </div>
                    </div>
                  )}
                ></Field>
                <Field
                  label="Ý kiến cá nhân"
                  placeholder="Ý kiến cá nhân"
                  required={false}
                  {...register("note")}
                ></Field>
                <button onClick={onSubmit} className="btn main rect">
                  đăng ký
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
