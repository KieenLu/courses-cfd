import React from "react";

export default function CoinPage() {
  return (
    <main className="paypage" id="main">
      <div className="container">
        <section>
          <h2 className="main-title">Giới thiệu Coin</h2>
          <div className="content">
            <div className="section">
              <h2>Tổng quan về COIN</h2>
              <h3>
                <strong>Coin là gì?</strong>
              </h3>
              <p>
                Coin là điểm thưởng tích lũy có được khi học viên giới thiệu
                khóa học cho người mới hoặc tặng thưởng theo từng chương trình
                khác nhau.
              </p>
              <h3>
                <strong>Giá trị quy đổi thế nào?</strong>
              </h3>
              <p>Mỗi 1 COIN trong tài khoản có giá trị tương đương 1000 VNĐ.</p>
              <h3>
                <strong>Giá trị quy đổi thế nào?</strong>
              </h3>
              <p>Mỗi 1 COIN trong tài khoản có giá trị tương đương 1000 VNĐ.</p>
              <h3>
                <strong>Tích luỹ COIN:</strong>
              </h3>
              <p>COIN sẽ được Spacedev chuyển vào tài khoản khi:</p>
              <p>
                - Có tài khoản học viên mới đăng ký khoá học thành công thông
                qua link giới thiệu
              </p>
              <p>- Bồi hoàn COIN từ Spacedev cho những trường hợp đặc biệt</p>
              <h3>
                <strong>Sử dụng COIN:</strong>
              </h3>
              <p>
                - Giảm giá cho những khoá học mới khi đăng ký khoá học tại
                <a href="http://spacedev.vn/">website Spacedev</a>.
              </p>
              <p>
                - Quy đổi thành Voucher Tiki hoặc thẻ cào điện thoại (lưu ý:
                chương trình đổi COIN sang voucher Tiki hoặc thẻ cào điện thoại
                chỉ được áp dụng 2 lần đối với 1 tài khoản học viên).
              </p>
              <p>
                - Quy đổi thành những dịch vụ khác có liên kết với Spacedev.
              </p>
            </div>
            <div className="section">
              <h2>Học viên giới thiệu (học viên cũ):</h2>
              <p>
                - Là học viên đã tham gia một hoặc nhiều khoá học tại Spacedev.
              </p>
              <p>
                - Mỗi khi có học viên mới đăng ký khoá học thành công (được xác
                nhận thành công từ đội ngũ Spacedev) tài khoản học viên giới
                thiệu sẽ được cộng một số điểm COIN tương ứng tùy từng khóa học
                (mỗi điểm có giá trị tương ứng 1000 VNĐ).
              </p>
              <p>
                - Điểm COIN được cộng dồn khi có nhiều học viên mới đăng ký
                thành công qua đường dẫn giới thiệu.
              </p>
              <p>
                - Mỗi đường dẫn giới thiệu có hiệu lực mãi mãi cho đến khi tài
                khoản giới thiệu bị khoá, xoá hoặc ngừng kích hoạt khi không có
                nhu cầu sử dụng từ phía học viên.
              </p>
              <p>
                - COIN có thể sử dụng để giảm giá cho những khoá học mới khi
                đăng ký khoá học tại website
                <a href="http://spacedev.vn/">spacedev.vn</a>.
              </p>
              <p>
                - COIN có thể sử dụng để quy đổi thành Voucher Tiki hoặc thẻ cào
                điện thoại (lưu ý: chương trình đổi COIN sang voucher Tiki hoặc
                thẻ cào điện thoại chỉ được áp dụng 2 lần đối với 1 tài khoản
                học viên).
              </p>
            </div>
            <div className="section">
              <h2>Học viên được giới thiệu (học viên mới):</h2>
              <p>
                - Là tài khoản học viên chưa tham gia bất kỳ khoá học nào của
                Spacedev.
              </p>
              <p>
                - Học viên sẽ được giảm giá khi đăng ký thành công khoá học qua
                đường dẫn giới thiệu.
              </p>
              <p>
                - Số tiền được giảm giá sẽ được hiển thị và được áp dụng khi
                đăng ký trực tuyến tại website của Spacedev qua link giới thiệu.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
