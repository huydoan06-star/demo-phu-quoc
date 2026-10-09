/* ==========================================================
   SỬA FILE NÀY để đổi chữ, giá, thông tin liên hệ.
   Không cần build: lưu, commit, push.
   ========================================================== */
window.SITE_CONFIG = {
  brand: "Huy Chatbot",               // tên thương hiệu (giống trang EN) — đổi tuỳ ý
  defaultLang: "vi",                  // ngôn ngữ mặc định của chatbot: "vi" | "en"

  // ---- Liên hệ thật ----
  contact: {
    zaloName: "Huy Đoàn",
    zaloPhone: "0337031198",          // link: zalo.me/0337031198
    facebook: "huydoanads98",         // link: facebook.com/huydoanads98
    telegram: "DHUYHEHE",             // link: t.me/DHUYHEHE
    email: "huydoan06@gmail.com"      // để trống = ẩn
  },

  // ---- GIÁ (đã chốt) ----
  // Gói có price = null thì hiện dòng "label" (báo giá riêng).
  pricing: {
    draft: false,                     // true = hiện nhãn DRAFT
    label: { vi: "Báo giá riêng", en: "Quoted separately" },
    setup: { vi: "1.990.000đ", en: "1,990,000 VND" },      // phí cài đặt, trả 1 lần
    monthly: { vi: "390.000đ", en: "390,000 VND" },        // phí hàng tháng
    note: { vi: "Phí Zalo OA (nếu dùng kênh Zalo) do chủ tiệm tự trả.", en: "The Zalo OA fee (if you use the Zalo channel) is paid by the shop owner." }
  },
  plans: [
    {
      name: { vi: "Chatbot Website", en: "Website Chatbot" },
      price: "monthly", setup: "setup",
      blurb: { vi: "Bot trực trên website của quán: trả lời giá, nhận đặt lịch, ghi vào Google Sheets.", en: "Bot on your website: answers prices, takes bookings, logs them to Google Sheets." },
      features: {
        vi: ["Soạn sẵn theo dịch vụ, bảng giá, giờ mở cửa của quán", "Nhận đặt lịch 24/7 (tên, SĐT/email, giờ muốn đến)", "Mỗi lịch hẹn tự thêm 1 dòng vào Google Sheets", "Trả lời song ngữ Việt – Anh", "Cập nhật nội dung hàng tháng"],
        en: ["Scripted for your services, prices and opening hours", "24/7 booking requests (name, phone/email, preferred time)", "Every booking adds a row to your Google Sheet", "Bilingual replies, Vietnamese – English", "Monthly content updates"]
      },
      featured: true
    },
    {
      name: { vi: "Thêm kênh: Messenger · Zalo · Telegram", en: "Extra channels: Messenger · Zalo · Telegram" },
      price: null, setup: null,
      blurb: { vi: "Cùng một bot, cùng kịch bản, gắn thêm vào Fanpage Facebook, Zalo OA hoặc Telegram.", en: "The same bot on your Facebook Page, Zalo OA or Telegram." },
      features: {
        vi: ["Trả lời giống nhau trên mọi kênh", "Lịch hẹn mọi kênh về chung 1 bảng tính", "Báo giá sau khi trao đổi ngắn"],
        en: ["Same answers on every channel", "All bookings in one sheet", "Quoted after a short chat"]
      },
      featured: false
    }
  ],

  // Gợi ý giờ trong bước đặt lịch
  consultTimes: {
    vi: ["Sáng (9h–12h)", "Chiều (13h–17h)", "Tối (18h–20h)", "Cuối tuần"],
    en: ["Morning (9–12)", "Afternoon (1–5 pm)", "Evening (6–8 pm)", "Weekend"]
  }
};
