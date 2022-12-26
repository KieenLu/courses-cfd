import Skeleton from "@/components/Skeleton";
import { useQuery } from "@/hooks/useQuery";
import { message } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../components/AuthContext";
import { Checkbox } from "../../components/Checkbox";
import Field from "../../components/Field";
import { Select } from "../../components/Select";
import { PATH } from "../../config/path";
import { useForm } from "../../hooks/useForm";
import { useScrollTop } from "../../hooks/useScrollTop";
import { courseService } from "../../services/course";
import { currency } from "../../utils/currency";
import { regexp, required } from "../../utils/validate";
import Page404 from "../page404";

export default function RegisterPage() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (!user) {
      message.warning(
        "Bạn cần đăng nhập để có thể đăng kí khóa học, Nếu chưa có vui lòng tạo tài khoản SpaceDev"
      );
      navigate(PATH.signin, { state: { redirect: pathname } });
    }
  }, []);

  const { data: { data: detail = [] } = {}, loading } = useQuery({
    queryFn: () => courseService.getCourseDetail(id),
    queryKey: `courses-register-${id}`,
  });

  useScrollTop([id]);

  const { validate, register, values } = useForm(
    {
      name: [required()],
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
        regexp("facebook", "Xin vui lòng nhập đúng Facebook Url của bạn"),
      ],
      payment: [required()],
    },
    {
      name: user?.name,
      email: user?.username,
      phone: user?.phone,
    }
  );

  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async () => {
    if (validate()) {
      try {
        await courseService.registerCourse(id, values);
        setIsSuccess(true);
      } catch (err) {
        console.error(err);
        if (err.response?.data?.message) {
          message.error(err.response.data.message);
        }
      }
    }
  };
  if (loading)
    return (
      <main className="register-course" id="main">
        <section>
          <div className="container">
            <div className="wrap container">
              <div className="main-sub-title">
                <Skeleton height={24} width={70} />
              </div>
              <h1 className="main-title">
                <Skeleton height={40} />
              </h1>
              <div className="main-info">
                <div className="date">
                  <Skeleton height={23} width={210} />
                </div>
                <div className="time">
                  <Skeleton height={23} width={170} />
                </div>
                <div className="time">
                  <Skeleton height={23} width={210} />
                </div>
              </div>
              <form className="form">
                <label>
                  <Skeleton height={60} />
                </label>
                <label>
                  <Skeleton height={60} />
                </label>
                <label>
                  <Skeleton height={60} />
                </label>
                <label>
                  <Skeleton height={60} />
                </label>
                <label>
                  <Skeleton height={60} />
                </label>
                <label>
                  <Skeleton height={60} />
                </label>
                <label>
                  <Skeleton height={60} />
                </label>
                <button>
                  <Skeleton height={60} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    );
  // let { data: detail } = data;
  if (!detail) return <Page404 />;
  return (
    <main className="register-course" id="main">
      {isSuccess ? (
        <div
          className="register-success"
          style={{ margin: "40px auto", textAlign: "center" }}
        >
          <div className="contain" style={{ marginBottom: "40px" }}>
            <div className="main-title">đăng ký thành công</div>
            <div className="container">
              <div>
                Chào mừng <strong>{values.name}</strong> đã trở thành thành viên
                mới của Spacedev Team.
              </div>
              <br />
              Cảm ơn bạn đã đăng ký khóa học tại <strong>Spacedev</strong>,
              chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook hoặc số
              điện thoại của bạn.
            </div>
          </div>
          <Link to={PATH.profile.course} className="btn main rect">
            Khóa học của bạn
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
                  <strong>Khai giảng : </strong>
                  {moment(detail.opening_time).format("DD/MM/YYYY")}
                </div>
                <div className="time">
                  <strong>Thời lượng : </strong> {detail.content.length} buổi
                </div>
                <div className="time">
                  <strong>Học phí : </strong>
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
                  disabled
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
                  {...register("coin")}
                  renderInput={(props) => (
                    <Checkbox {...props}>
                      Hiện có <strong>300 COIN</strong>
                    </Checkbox>
                  )}
                ></Field>
                <Field
                  label="Hình thức thanh toán"
                  {...register("payment")}
                  renderInput={(props) => (
                    <Select
                      {...props}
                      placeholder="Hình thức thanh toán"
                      options={[
                        { label: "Chuyển khoản", value: "chuyen-khoan" },
                        {
                          label: "Thanh toán tiền mặt",
                          value: "Thanh-toan-tien-mat",
                        },
                      ]}
                    />
                  )}
                ></Field>
                <Field
                  label="Ý kiến cá nhân"
                  placeholder="Ý kiến cá nhân"
                  required={false}
                  {...register("note")}
                  renderInput={(props) => (
                    <textarea cols={30} rows={10} {...props} />
                  )}
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
