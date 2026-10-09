/* Cấu hình trang dịch vụ — đổi ở đây, không cần sửa index.html.
 * Lưu ý: thẻ Open Graph trong <head> của index.html là chữ cố định (Facebook/Zalo không chạy JS);
 * đổi tiêu đề ở đây thì nhớ sửa og:title + og.png nếu muốn ảnh chia sẻ khớp. */
window.DV = {
  // Tên thương hiệu (Đại nhân chốt 09/10/2026)
  brand: { vi: "Đội chăm sóc Google Maps", en: "Google Maps Care Team" },
  zalo: "0337031198",
  // Tiêu đề lớn đầu trang
  title: {
    vi: "Khách mở Google Maps là thấy tiệm mình đẹp, đúng và dễ tìm.",
    en: "When guests open Google Maps, your shop looks good, accurate and easy to find."
  },
  // Dòng giá dưới câu phụ đầu trang (Đại nhân chốt 09/10/2026). ĐỂ TRỐNG ("") = ẨN dòng.
  price: { vi: "990.000đ/tháng · Tháng đầu làm xong mới thu tiền · Nghỉ lúc nào cũng được", en: "990,000 VND/month · First month paid after the work is done · Cancel anytime" },
  replyTime: { vi: "trong ngày", en: "within the day" },   // dòng nhỏ dưới QR; đặt null để ẩn
  weeklySlots: 5                            // "Mỗi tuần em nhận N tiệm"; đặt 0 để ẩn
};
