import { useScrollTop } from "@/hooks/useScrollTop";
import React from "react";

export default function PaymentPage() {
  useScrollTop();
  return (
    <main className="paypage" id="main">
      <div className="container">
        <section>
          <h2 className="main-title">thanh toán</h2>
          <div className="content">
            <div className="section">
              <h2>Hình thức thanh toán</h2>
              <h3>
                <strong>Hình thức chuyển khoản</strong>
              </h3>
              <p>
                - Thẻ ATM nội địa; <br />
                - Thẻ Visa, Master, JCB...; <br />- Ví MOMO.
              </p>
              <p>
                Spacedev chỉ gửi xác nhận sau khi học phí được chuyển đến tài
                khoản của Spacedev và sẽ không chịu trách nhiệm hay hoàn trả học
                phí khi có sai sót trong quá trình chuyển khoản hoặc sai thông
                tin chuyển khoản. Nếu xảy ra sai sót, Bạn vui lòng làm việc với
                ngân hàng để được xử lí.
              </p>
              <p>
                <strong>THÔNG TIN TÀI KHOẢN:</strong> <br />
                <strong>Chủ tài khoản</strong>: DANG THUYEN VUONG
                <br />
                <strong>Số tài khoản</strong>: 123456798123456
                <br />
                <strong>Ngân hàng</strong>: ACB - Tp Hồ Chí Minh
                <br />
                <strong>Nội dung chuyển khoản</strong>: Họ và tên số điện thoại
                mã khóa học (ví dụ: Nguyen Tuan Anh 0989998881 Spacedev2)
              </p>
              <p>
                <i>
                  Sau khi thanh toán và Spacedev nhận được tiền sẽ chủ động nhắn
                  tin để xác nhận.
                </i>
              </p>
              <h3>
                <strong>Hình thức trực tiếp</strong>
              </h3>
              <p>
                Hình thức thanh toán này chỉ áp dụng cho các thành viên tham gia
                khóa Spacedev OFFLINE. Thanh toán ngày đầu tiên khi tham gia
                khóa học.
              </p>
            </div>
            <div className="section">
              <h2>Hoàn trả học phí</h2>
              <p>
                Spacedev không chịu trách nhiệm hoàn trả học phí trong bất kỳ
                trường hợp nào trừ khi dịch vụ của Spacedev bị gián đoạn, trục
                trặc do lỗi từ phía Spacedev gây ảnh hưởng nghiêm trọng đến
                quyền lợi của học viên.
              </p>
            </div>
            <div className="section">
              <h2>Chính sách ưu đãi</h2>
              <p>
                Sẽ được Spacedev thông báo công khai tại website theo từng
                chương trình ưu đãi cụ thể.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
