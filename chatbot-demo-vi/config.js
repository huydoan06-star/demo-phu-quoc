/* ==========================================================
   SỬA FILE NÀY để đổi chữ, giá, thông tin liên hệ.
   Không cần build: lưu, commit, push.
   ========================================================== */
window.SITE_CONFIG = {
  brand: "Support",                   // tên thương hiệu (giống trang EN) — đổi tuỳ ý
  defaultLang: "vi",                  // ngôn ngữ mặc định của chatbot: "vi" | "en"

  // ---- Liên hệ thật ----
  contact: {
    zaloName: "Huy Đoàn",
    zaloPhone: "0337031198",          // link: zalo.me/0337031198
    telegram: "DHUYHEHE",             // link: t.me/DHUYHEHE
    email: "huydoan06@gmail.com"      // để trống = ẩn
  },

  // ---- GIÁ (DRAFT) ----
  // Chưa chốt giá: để price = null thì hiện dòng "label" bên dưới.
  // Khi có giá: điền price (ví dụ "990.000đ / tháng") và setup (ví dụ "Phí cài đặt 1 lần: ...").
  pricing: {
    draft: true,                      // true = hiện nhãn DRAFT
    label: { vi: "Giá đang cập nhật — liên hệ để báo giá", en: "Pricing being finalised — contact us for a quote" }
  },
  plans: [
    {
      name: { vi: "Chatbot Website", en: "Website Chatbot" },
      price: null, setup: null,
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
