/* =====================================================================
 * CONFIG CỦA NHÀ HÀNG — chỉ cần sửa file này (và thư mục assets/) cho quán mới.
 * TẤT CẢ dữ liệu dưới đây là VÍ DỤ cho một nhà hàng GIẢ ĐỊNH, không phải quán thật.
 * Chuỗi đa ngôn ngữ có dạng { vi, en, ko, zh, ru }; thiếu thì lấy en rồi vi.
 * ===================================================================== */
window.SITE_CONFIG = {
  kind: "restaurant",
  name: "Nhà Hàng Mẫu Phú Quốc",
  shortName: "Nhà Hàng Mẫu",                 // tên ngắn hiện trên header điện thoại (tuỳ chọn)
  isDemo: true,
  refPrefix: "NH",

  heroTitle: {
    vi: "Nhà Hàng Mẫu<br><em>Phú Quốc</em>", en: "Nhà Hàng Mẫu<br><em>Phu Quoc</em>", ko: "Nhà Hàng Mẫu<br><em>Phu Quoc</em>",
    zh: "Nhà Hàng Mẫu<br><em>Phu Quoc</em>", ru: "Nhà Hàng Mẫu<br><em>Phu Quoc</em>"
  },
  tagline: {
    vi: "Hải sản đánh bắt trong ngày, nướng trên than hoa, phục vụ bên bờ biển lúc hoàng hôn.",
    en: "Catch of the day, grilled over charcoal and served by the sea at sunset.",
    ko: "그날 잡은 해산물을 숯불에 구워, 노을 지는 바닷가에서 즐기세요.",
    zh: "当日捕捞的海鲜，炭火现烤，在日落海边享用。",
    ru: "Улов дня на углях — у моря, на закате."
  },
  heroImage: "assets/hero.webp",
  heroImageMobile: "assets/hero-m.webp",
  heroFocus: "50% 50%",

  about: {
    image: "assets/intro.webp",
    title: { vi: "Hương vị của biển", en: "The taste of the sea", ko: "바다의 맛", zh: "大海的味道", ru: "Вкус моря" },
    text: {
      vi: "Nội dung ví dụ: mỗi sáng, hải sản được chọn trực tiếp từ ghe cá địa phương và giữ trong bể nước biển.\nBếp giữ cách nấu giản dị của đảo — muối ớt, mỡ hành, nước mắm Phú Quốc — để vị ngọt tự nhiên lên tiếng.",
      en: "Sample copy: every morning our seafood is chosen straight from local fishing boats and kept in seawater tanks.\nThe kitchen keeps to simple island cooking — chili salt, scallion oil, Phu Quoc fish sauce — so the natural sweetness speaks for itself.",
      ko: "예시 문구: 매일 아침 현지 어선에서 해산물을 직접 골라 바닷물 수조에 보관합니다.\n소금·고추, 파기름, 푸꾸옥 피시소스 등 섬의 소박한 조리법으로 재료 본연의 단맛을 살립니다.",
      zh: "示例文案：每天清晨，我们直接从当地渔船挑选海鲜，并养在海水池中。\n厨房坚持海岛的朴素做法——椒盐、葱油、富国岛鱼露——让食材的鲜甜自然呈现。",
      ru: "Пример текста: каждое утро мы выбираем морепродукты прямо с местных рыбацких лодок и держим их в аквариумах с морской водой.\nКухня верна простым островным рецептам — соль с перцем чили, луковое масло, рыбный соус Фукуока, — чтобы раскрыть естественную сладость продукта."
    },
    signature: { vi: "— Bếp trưởng (ví dụ)", en: "— Head chef (sample)", ko: "— 셰프 (예시)", zh: "— 主厨（示例）", ru: "— Шеф-повар (пример)" }
  },

  highlights: [
    { icon: "fish",
      title: { vi: "Tươi trong ngày", en: "Fresh every day", ko: "매일 신선하게", zh: "当日新鲜", ru: "Свежий улов" },
      text:  { vi: "Chọn hải sản sống tại bể, cân trước mặt khách.", en: "Pick your seafood live from the tank, weighed in front of you.", ko: "수조에서 직접 고르고, 눈앞에서 무게를 잽니다.", zh: "鲜活海鲜现场挑选，当面称重。", ru: "Выбирайте живые морепродукты из аквариума — взвешиваем при вас." } },
    { icon: "flame",
      title: { vi: "Nướng than hoa", en: "Charcoal grill", ko: "숯불 구이", zh: "炭火烧烤", ru: "Гриль на углях" },
      text:  { vi: "Lửa than giữ trọn vị ngọt và mùi khói nhẹ.", en: "Charcoal fire keeps the sweetness and a gentle smokiness.", ko: "숯불이 단맛과 은은한 훈연 향을 살립니다.", zh: "炭火锁住鲜甜，带来淡淡烟熏香。", ru: "Угли сохраняют сладость и лёгкий аромат дымка." } },
    { icon: "sun",
      title: { vi: "Bàn ngắm hoàng hôn", en: "Sunset tables", ko: "선셋 테이블", zh: "日落海景座位", ru: "Столики на закате" },
      text:  { vi: "Bàn sát biển cho dịp đặc biệt — nên đặt trước.", en: "Seafront tables for special occasions — booking recommended.", ko: "특별한 날을 위한 바다 앞 테이블 — 예약을 권장합니다.", zh: "临海餐位适合特别时刻——建议提前预订。", ru: "Столики у самой воды для особых случаев — лучше бронировать заранее." } }
  ],

  phone: "+84 900 000 002", phoneLink: "+84900000002",
  whatsapp: "", messenger: "", telegramUser: "", kakao: "",
  address: "Địa chỉ ví dụ, Bãi Trường, Phú Quốc, An Giang",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Bai+Truong+Phu+Quoc",
  mapsEmbed: "https://maps.google.com/maps?q=Bai%20Truong%2C%20Phu%20Quoc&z=13&output=embed",
  reviewsLink: "",

  hours: { open: "10:00", close: "22:30", days: { vi: "Mỗi ngày", en: "Daily", ko: "매일", zh: "每天", ru: "Ежедневно" } },
  slotMinutes: 30, lastBookingBeforeClose: 90,
  usdRate: 26300,

  // Nhóm thực đơn
  categories: [
    { id: "start", name: { vi: "Khai vị", en: "Starters", ko: "전채", zh: "前菜", ru: "Закуски" } },
    { id: "grill", name: { vi: "Hải sản nướng", en: "From the grill", ko: "해산물 구이", zh: "炭烤海鲜", ru: "С гриля" } },
    { id: "main",  name: { vi: "Món chính", en: "Mains", ko: "메인 요리", zh: "主菜", ru: "Основные блюда" } },
    { id: "sweet", name: { vi: "Tráng miệng & đồ uống", en: "Desserts & drinks", ko: "디저트 & 음료", zh: "甜品与饮品", ru: "Десерты и напитки" } }
  ],
  // Món & giá (VÍ DỤ). featured:true + image => hiện ở "Món đặc trưng". unit: ghi chú đơn vị (tuỳ chọn)
  items: [
    { id: "herring", category: "start", price: 145000,
      name: { vi: "Gỏi cá trích", en: "Herring salad", ko: "청어회 샐러드", zh: "鲜鲱鱼生拌", ru: "Салат из свежей сельди" },
      desc: { vi: "Cá trích tươi, dừa nạo, rau rừng, cuốn bánh tráng.", en: "Fresh herring, grated coconut, wild herbs, rice-paper wraps.", ko: "생청어, 코코넛, 향채를 라이스페이퍼에 싸서.", zh: "鲜鲱鱼、椰丝、山野香草，配米纸卷食。", ru: "Свежая сельдь, кокос, дикие травы, рисовая бумага." } },
    { id: "oysters", category: "start", price: 180000, featured: true, image: "assets/dish-oysters.webp",
      unit: { vi: "6 con", en: "6 pcs", ko: "6개", zh: "6只", ru: "6 шт." },
      name: { vi: "Hàu tươi chanh muối", en: "Fresh oysters, lime & salt", ko: "생굴과 라임", zh: "鲜生蚝配青柠", ru: "Свежие устрицы с лаймом" },
      desc: { vi: "Hàu sống trên đá lạnh, chanh và muối tiêu.", en: "Served on ice with lime and pepper salt.", ko: "얼음 위에 라임, 후추 소금과 함께.", zh: "冰镇生蚝，配青柠与胡椒盐。", ru: "Подаются на льду с лаймом и перечной солью." } },
    { id: "squid", category: "start", price: 220000, featured: true, image: "assets/dish-squid.webp",
      name: { vi: "Mực một nắng nướng", en: "Sun-dried squid, grilled", ko: "반건조 오징어 구이", zh: "烤一夜干鱿鱼", ru: "Вяленый кальмар на гриле" },
      desc: { vi: "Đặc sản đảo, chấm tương ớt xanh.", en: "Island speciality with green chili sauce.", ko: "섬의 별미, 청고추 소스.", zh: "海岛特产，配青辣椒酱。", ru: "Островной деликатес с зелёным соусом чили." } },
    { id: "scallops", category: "grill", price: 160000, featured: true, image: "assets/dish-scallops.webp",
      unit: { vi: "4 con", en: "4 pcs", ko: "4개", zh: "4只", ru: "4 шт." },
      name: { vi: "Sò điệp nướng mỡ hành", en: "Scallops, scallion oil", ko: "가리비 파기름 구이", zh: "葱油烤扇贝", ru: "Гребешки с луковым маслом" },
      desc: { vi: "Nướng than, mỡ hành, đậu phộng rang.", en: "Charcoal-grilled with scallion oil and roasted peanuts.", ko: "숯불에 파기름과 볶은 땅콩.", zh: "炭烤，淋葱油、撒花生碎。", ru: "На углях, с луковым маслом и жареным арахисом." } },
    { id: "prawns", category: "grill", price: 240000,
      name: { vi: "Tôm nướng muối ớt", en: "Chili-salt grilled prawns", ko: "소금 칠리 새우구이", zh: "椒盐烤虾", ru: "Креветки с солью и чили" },
      desc: { vi: "Tôm biển, muối ớt, lá chanh.", en: "Sea prawns, chili salt, lime leaf.", ko: "바다새우, 고추 소금, 라임잎.", zh: "海虾、椒盐、青柠叶。", ru: "Морские креветки, соль с чили, лист лайма." } },
    { id: "fish", category: "grill", price: 280000, featured: true, image: "assets/dish-fish.webp",
      name: { vi: "Cá nướng sa tế", en: "Grilled fish, chili paste", ko: "사테 소스 생선구이", zh: "沙茶烤鱼", ru: "Рыба на гриле с пастой чили" },
      desc: { vi: "Cá biển trong ngày, sa tế, rau thơm.", en: "Catch of the day, house chili paste, fresh herbs.", ko: "당일 생선, 수제 칠리 페이스트, 향채.", zh: "当日海鱼、自制沙茶酱、香草。", ru: "Рыба дня, домашняя паста чили, свежая зелень." } },
    { id: "lobster", category: "main", price: 1250000, featured: true, image: "assets/dish-lobster.webp",
      unit: { vi: "1 con ~500 g", en: "1 lobster ~500 g", ko: "1마리 약 500g", zh: "1只 约500克", ru: "1 шт. ~500 г" },
      name: { vi: "Tôm hùm sốt bơ tỏi", en: "Lobster, garlic butter", ko: "갈릭버터 랍스터", zh: "蒜香黄油龙虾", ru: "Лангуст в чесночном масле" },
      desc: { vi: "Tôm hùm bông, bơ tỏi, chanh.", en: "Spiny lobster, garlic butter, lemon.", ko: "스파이니 랍스터, 갈릭버터, 레몬.", zh: "锦绣龙虾、蒜香黄油、柠檬。", ru: "Лангуст, чесночное сливочное масло, лимон." } },
    { id: "platter", category: "main", price: 1450000, featured: true, image: "assets/dish-platter.webp",
      unit: { vi: "cho 2–3 người", en: "for 2–3", ko: "2–3인", zh: "2–3人份", ru: "на 2–3 персоны" },
      name: { vi: "Mâm hải sản bờ biển", en: "Seaside seafood platter", ko: "해변 해산물 플래터", zh: "海边海鲜拼盘", ru: "Морское ассорти" },
      desc: { vi: "Sò điệp, vẹm, tôm, mực, cá — nướng & hấp.", en: "Scallops, mussels, prawns, squid and fish — grilled & steamed.", ko: "가리비, 홍합, 새우, 오징어, 생선 — 구이와 찜.", zh: "扇贝、青口、虾、鱿鱼、鱼——烤与蒸。", ru: "Гребешки, мидии, креветки, кальмар и рыба — гриль и пар." } },
    { id: "hotpot", category: "main", price: 450000,
      unit: { vi: "cho 2 người", en: "for 2", ko: "2인", zh: "2人份", ru: "на двоих" },
      name: { vi: "Lẩu hải sản chua cay", en: "Hot & sour seafood hotpot", ko: "새콤매콤 해산물 전골", zh: "酸辣海鲜火锅", ru: "Кисло-острый хотпот с морепродуктами" },
      desc: { vi: "Nước lẩu me, thơm, rau muống, bún.", en: "Tamarind-pineapple broth, morning glory, rice noodles.", ko: "타마린드·파인애플 육수, 공심채, 쌀국수.", zh: "罗望子菠萝汤底、空心菜、米粉。", ru: "Бульон с тамариндом и ананасом, водяной шпинат, рисовая лапша." } },
    { id: "rice", category: "main", price: 120000,
      name: { vi: "Cơm chiên hải sản", en: "Seafood fried rice", ko: "해산물 볶음밥", zh: "海鲜炒饭", ru: "Жареный рис с морепродуктами" },
      desc: { vi: "Tôm, mực, trứng, hành lá.", en: "Prawn, squid, egg, spring onion.", ko: "새우, 오징어, 달걀, 쪽파.", zh: "虾、鱿鱼、鸡蛋、葱花。", ru: "Креветки, кальмар, яйцо, зелёный лук." } },
    { id: "coconut", category: "sweet", price: 45000,
      name: { vi: "Dừa tươi", en: "Fresh coconut", ko: "생코코넛", zh: "鲜椰子", ru: "Свежий кокос" },
      desc: { vi: "Ướp lạnh, nguyên trái.", en: "Chilled, served whole.", ko: "차갑게, 통째로.", zh: "冰镇整颗。", ru: "Охлаждённый, целиком." } },
    { id: "sim", category: "sweet", price: 90000,
      name: { vi: "Rượu sim Phú Quốc", en: "Phu Quoc myrtle wine", ko: "푸꾸옥 심(머틀) 와인", zh: "富国岛桃金娘酒", ru: "Вино из розового мирта (сим)" },
      desc: { vi: "Đặc sản đảo, theo ly.", en: "Island speciality, by the glass.", ko: "섬 특산주, 잔 단위.", zh: "海岛特产，按杯。", ru: "Островной напиток, по бокалам." } },
    { id: "pudding", category: "sweet", price: 65000,
      name: { vi: "Chè dừa non", en: "Young coconut pudding", ko: "코코넛 젤리 디저트", zh: "嫩椰子甜品", ru: "Десерт из молодого кокоса" },
      desc: { vi: "Thạch dừa, nước cốt dừa, đá bào.", en: "Coconut jelly, coconut milk, shaved ice.", ko: "코코넛 젤리, 코코넛 밀크, 빙수.", zh: "椰子冻、椰浆、刨冰。", ru: "Кокосовое желе, кокосовое молоко, колотый лёд." } }
  ],

  gallery: [
    { src: "assets/g1.webp", alt: { vi: "Bàn tiệc bên biển", en: "Long table by the sea" } },
    { src: "assets/g2.webp", alt: { vi: "Tôm hùm nướng", en: "Grilled lobster" } },
    { src: "assets/g3.webp", alt: { vi: "Mực nướng", en: "Grilled calamari" } },
    { src: "assets/g4.webp", alt: { vi: "Hoàng hôn", en: "Sunset dining" } },
    { src: "assets/g5.webp", alt: { vi: "Tôm và cua biển", en: "Prawns and crab" } },
    { src: "assets/g6.webp", alt: { vi: "Ly vang bên biển", en: "Wine by the sea" } }
  ],

  // KHÔNG bịa review. Chỉ dán review THẬT: { author, stars, text, source }
  reviews: [],

  booking: {
    mode: "local",            // "local" | "worker" (production) | "telegram" (chỉ thử, lộ token)
    workerUrl: "", telegramBotToken: "", telegramChatId: "", maxPeople: 30
  },
  // Dải "trang mẫu do … thiết kế" ở chân trang (xoá khối này khi giao web cho tiệm thật)
  designer: {
    zalo: { url: "https://zalo.me/0337031198", label: "0337 031 198", qr: "designer-zalo.png" },
    telegram: { url: "https://t.me/DHUYHEHE", label: "@DHUYHEHE", qr: "designer-telegram.png" }
  },
  publicUrl: "https://huydoan06-star.github.io/demo-phu-quoc/nha-hang/"
};
