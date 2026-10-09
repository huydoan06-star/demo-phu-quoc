/* Cấu hình trang dịch vụ — đổi ở đây, không cần sửa index.html.
 * Lưu ý: tiêu đề + thẻ Open Graph trong <head> của index.html cố ý KHÔNG chứa tên thương hiệu
 * (Facebook/Zalo không chạy JS), nên đổi tên ở đây là đủ. */
window.DV = {
  brand: "Ghim Tiệm",                       // tên thương hiệu (tạm, chưa chốt)
  zalo: "0337031198",
  replyTime: { vi: "trong ngày", en: "within the day" },   // hạn trả lời tin nhắn Zalo
  weeklySlots: 5,                           // "Mỗi tuần nhận N tiệm"; đặt 0 để ẩn
  price: {
    enabled: false,                         // true = hiện dòng giá thay cho "Báo giá sau khi xem hồ sơ"
    vi: "990.000đ/tháng cho 5 tiệm đầu, không ràng buộc",
    en: "990,000 VND/month for the first 5 shops, no lock-in"
  }
};
