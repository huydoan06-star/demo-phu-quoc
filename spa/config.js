/* =====================================================================
 * CONFIG CỦA TIỆM — chỉ cần sửa file này (và thư mục assets/) cho tiệm mới.
 * TẤT CẢ dữ liệu dưới đây là VÍ DỤ cho một spa GIẢ ĐỊNH, không phải tiệm thật.
 * Chuỗi đa ngôn ngữ có dạng { vi, en, ko, zh, ru }; thiếu thì lấy en rồi vi.
 * ===================================================================== */
window.SITE_CONFIG = {
  kind: "spa",                          // "spa" | "restaurant" — quyết định form & cách hiển thị
  name: "Spa Mẫu Phú Quốc",
  shortName: "Spa Mẫu",                 // tên ngắn hiện trên header điện thoại (tuỳ chọn)
  isDemo: true,                         // true = hiện dải "Bản demo"
  refPrefix: "SPA",                     // tiền tố mã yêu cầu đặt lịch

  // Tiêu đề lớn ở hero (được phép dùng <br> và <em>)
  heroTitle: {
    vi: "Spa Mẫu<br><em>Phú Quốc</em>", en: "Spa Mẫu<br><em>Phu Quoc</em>", ko: "Spa Mẫu<br><em>Phu Quoc</em>",
    zh: "Spa Mẫu<br><em>Phu Quoc</em>", ru: "Spa Mẫu<br><em>Phu Quoc</em>"
  },
  tagline: {
    vi: "Nghi thức chăm sóc chậm rãi giữa đảo ngọc — đá nóng, tinh dầu nhiệt đới và đôi bàn tay tận tâm.",
    en: "Unhurried rituals on the pearl island — warm stones, tropical oils and attentive hands.",
    ko: "푸꾸옥에서 누리는 여유로운 힐링 리추얼 — 따뜻한 스톤, 열대 오일, 그리고 정성 어린 손길.",
    zh: "在富国岛慢享疗愈时光——温热石疗、热带精油与用心的双手。",
    ru: "Неспешные спа-ритуалы на Фукуоке — тёплые камни, тропические масла и заботливые руки."
  },
  heroImage: "assets/hero.webp",        // ảnh ngang ≥1920px, webp < 300 KB
  heroImageMobile: "assets/hero-m.webp",// ảnh dọc cho điện thoại (tuỳ chọn)
  heroFocus: "60% 50%",

  about: {
    image: "assets/intro.webp",
    title: { vi: "Một nơi để chậm lại", en: "A place to slow down", ko: "잠시 멈추어 쉬는 곳", zh: "让时间慢下来的地方", ru: "Место, где время замедляется" },
    text: {
      vi: "Nội dung ví dụ: Spa Mẫu Phú Quốc là một không gian nhỏ giữa vườn nhiệt đới, nơi mỗi liệu trình bắt đầu bằng trà thảo mộc và kết thúc trong im lặng.\nChúng tôi dùng tinh dầu thiên nhiên, khăn sạch cho từng khách và kỹ thuật viên được đào tạo bài bản.",
      en: "Sample copy: Spa Mẫu Phu Quoc is a small sanctuary in a tropical garden, where every treatment begins with herbal tea and ends in quiet.\nWe use natural oils, fresh linen for every guest and professionally trained therapists.",
      ko: "예시 문구: Spa Mẫu 푸꾸옥은 열대 정원 속 작은 안식처로, 모든 트리트먼트는 허브티로 시작해 고요함 속에서 마무리됩니다.\n천연 오일과 고객마다 새 린넨을 사용하며, 전문 교육을 받은 관리사가 함께합니다.",
      zh: "示例文案：Spa Mẫu 富国岛是热带花园中的一处小小静地，每一次护理都以一杯草本茶开始，在宁静中结束。\n我们使用天然精油，为每位客人更换干净布草，并由经过专业培训的理疗师服务。",
      ru: "Пример текста: Spa Mẫu Фукуок — небольшое убежище в тропическом саду, где каждая процедура начинается с травяного чая и завершается тишиной.\nМы используем натуральные масла, свежее бельё для каждого гостя и профессионально обученных мастеров."
    },
    signature: { vi: "— Đội ngũ Spa Mẫu", en: "— The Spa Mẫu team", ko: "— Spa Mẫu 팀", zh: "— Spa Mẫu 团队", ru: "— Команда Spa Mẫu" }
  },

  // 3 ý "vì sao chọn chúng tôi" (VÍ DỤ). icon: lotus | hands | wave | leaf | fish | flame | sun
  highlights: [
    { icon: "leaf",
      title: { vi: "Nguyên liệu thiên nhiên", en: "Natural ingredients", ko: "천연 재료", zh: "天然原料", ru: "Натуральные компоненты" },
      text:  { vi: "Tinh dầu sả, dừa và thảo mộc địa phương, pha mới mỗi ngày.", en: "Lemongrass, coconut and local herbs, blended fresh daily.", ko: "레몬그라스, 코코넛, 현지 허브를 매일 새로 블렌딩합니다.", zh: "香茅、椰子与本地草本，每日新鲜调配。", ru: "Лемонграсс, кокос и местные травы — смешиваем свежими каждый день." } },
    { icon: "hands",
      title: { vi: "Đôi tay lành nghề", en: "Skilled hands", ko: "숙련된 손길", zh: "娴熟手法", ru: "Опытные мастера" },
      text:  { vi: "Kỹ thuật viên được đào tạo, lắng nghe lực và vùng bạn cần.", en: "Trained therapists who listen to the pressure and focus you need.", ko: "원하시는 강도와 부위에 귀 기울이는 전문 관리사.", zh: "训练有素的理疗师，按您需要的力度与部位服务。", ru: "Обученные мастера учитывают нужный вам нажим и зоны." } },
    { icon: "wave",
      title: { vi: "Yên tĩnh giữa đảo", en: "Island calm", ko: "섬의 고요함", zh: "海岛宁静", ru: "Островной покой" },
      text:  { vi: "Phòng riêng, nhạc nhẹ, trà và trái cây sau mỗi liệu trình.", en: "Private rooms, soft music, tea and fruit after every treatment.", ko: "프라이빗 룸, 잔잔한 음악, 트리트먼트 후 차와 과일.", zh: "独立房间、轻柔音乐，护理后奉上茶点水果。", ru: "Отдельные комнаты, тихая музыка, чай и фрукты после процедуры." } }
  ],

  // --- Liên hệ (VÍ DỤ, số giả) ---
  phone: "+84 900 000 000", phoneLink: "+84900000000",
  whatsapp: "", messenger: "", telegramUser: "", kakao: "",
  address: "Địa chỉ ví dụ, Dương Đông, Phú Quốc, An Giang",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Duong+Dong+Phu+Quoc",
  mapsEmbed: "https://maps.google.com/maps?q=Duong%20Dong%2C%20Phu%20Quoc&z=14&output=embed",
  reviewsLink: "",

  hours: { open: "09:00", close: "22:00", days: { vi: "Mỗi ngày", en: "Daily", ko: "매일", zh: "每天", ru: "Ежедневно" } },
  slotMinutes: 30, lastBookingBeforeClose: 60,
  usdRate: 26300,

  // --- Liệu trình & giá (VÍ DỤ) ---
  items: [
    { id: "body60", minutes: 60, price: 350000, image: "assets/svc-body60.webp",
      name: { vi: "Massage body tinh dầu", en: "Aromatherapy body massage", ko: "아로마 전신 마사지", zh: "精油全身按摩", ru: "Аромамассаж всего тела" },
      desc: { vi: "Tinh dầu sả chanh, thả lỏng cơ sau ngày tắm biển.", en: "Lemongrass oil to loosen muscles after a beach day.", ko: "레몬그라스 오일로 해변에서의 피로를 풀어 드립니다.", zh: "香茅精油，舒缓海滩游玩后的肌肉疲劳。", ru: "Масло лемонграсса снимает напряжение после пляжа." } },
    { id: "body90", minutes: 90, price: 480000, image: "assets/svc-body90.webp",
      name: { vi: "Massage đá nóng", en: "Hot stone massage", ko: "핫스톤 마사지", zh: "热石按摩", ru: "Массаж горячими камнями" },
      desc: { vi: "Đá bazan làm ấm, giảm đau mỏi lưng vai.", en: "Warm basalt stones ease back and shoulder tension.", ko: "따뜻한 현무암으로 등과 어깨 결림을 완화합니다.", zh: "温热玄武岩舒缓肩背酸痛。", ru: "Тёплые базальтовые камни снимают напряжение спины и плеч." } },
    { id: "foot", minutes: 60, price: 250000, image: "assets/svc-foot.webp",
      name: { vi: "Massage chân thảo mộc", en: "Herbal foot ritual", ko: "허브 발 마사지", zh: "草本足疗", ru: "Травяной уход за стопами" },
      desc: { vi: "Ngâm thảo mộc ấm và bấm huyệt bàn chân.", en: "Warm herbal soak followed by reflexology.", ko: "따뜻한 허브 족욕과 발 지압.", zh: "温热草本泡脚，配合足底穴位按摩。", ru: "Тёплая травяная ванночка и рефлексотерапия стоп." } },
    { id: "hair", minutes: 45, price: 150000, image: "assets/svc-hair.webp",
      name: { vi: "Gội đầu dưỡng sinh", en: "Herbal hair wash", ko: "헤드스파", zh: "草本养生洗头", ru: "Травяное мытьё головы" },
      desc: { vi: "Gội thảo dược, massage đầu – cổ – vai.", en: "Herbal shampoo with head, neck & shoulder massage.", ko: "허브 샴푸와 머리·목·어깨 마사지.", zh: "草本洗发，配合头颈肩按摩。", ru: "Травяной шампунь и массаж головы, шеи и плеч." } },
    { id: "facial", minutes: 60, price: 400000, image: "assets/svc-facial.webp",
      name: { vi: "Chăm sóc da mặt", en: "Signature facial", ko: "시그니처 페이셜", zh: "招牌面部护理", ru: "Фирменный уход за лицом" },
      desc: { vi: "Làm sạch, đắp mặt nạ, cấp ẩm sau nắng.", en: "Cleanse, mask and after-sun hydration.", ko: "클렌징, 마스크, 애프터선 수분 케어.", zh: "清洁、面膜、晒后补水。", ru: "Очищение, маска и увлажнение после солнца." } },
    { id: "combo", minutes: 120, price: 650000, image: "assets/svc-combo.webp",
      name: { vi: "Hành trình thư giãn", en: "Island journey", ko: "아일랜드 저니", zh: "海岛放松之旅", ru: "Островной ритуал" },
      desc: { vi: "Body 60' + gội đầu dưỡng sinh + trà thảo mộc.", en: "60-min body massage, herbal hair wash and tea.", ko: "전신 마사지 60분 + 헤드스파 + 허브티.", zh: "全身按摩60分钟 + 养生洗头 + 草本茶。", ru: "Массаж тела 60 мин, мытьё головы и травяной чай." } }
  ],

  gallery: [
    { src: "assets/g1.webp", alt: { vi: "Đá nóng và hoa", en: "Hot stones and flowers" } },
    { src: "assets/g2.webp", alt: { vi: "Tinh dầu thiên nhiên", en: "Natural oils" } },
    { src: "assets/g3.webp", alt: { vi: "Nến và khăn", en: "Candles and towels" } },
    { src: "assets/g4.webp", alt: { vi: "Đá bazan", en: "Basalt stones" } },
    { src: "assets/g5.webp", alt: { vi: "Tinh dầu", en: "Essential oil" } },
    { src: "assets/g6.webp", alt: { vi: "Ánh nến", en: "Candlelight" } }
  ],

  // KHÔNG bịa review. Chỉ dán review THẬT: { author, stars, text, source }
  reviews: [],

  booking: {
    mode: "local",            // "local" | "worker" (production) | "telegram" (chỉ thử, lộ token)
    workerUrl: "", telegramBotToken: "", telegramChatId: "", maxPeople: 10
  },
  // Dải "trang mẫu do … thiết kế" ở chân trang (xoá khối này khi giao web cho tiệm thật)
  designer: {
    zalo: { url: "https://zalo.me/0337031198", label: "0337 031 198", qr: "designer-zalo.png" }
    // Thêm Telegram sau này: tạo QR sạch rồi bỏ dấu // ở dòng dưới (nhớ thêm dấu phẩy sau dòng zalo)
    // telegram: { url: "https://t.me/<username>", label: "@<username>", qr: "designer-telegram.png" }
  },
  publicUrl: "https://huydoan06-star.github.io/demo-phu-quoc/spa/"
};
