/* Biên Hải Quán – Gành Dầu · TRANG MẪU (chưa phải trang chính thức của quán).
 * Nguồn: bienhaiquan.com (trang chủ, /gioi-thieu.html), Google Maps 09/10/2026 – xem README.md.
 * Web của quán ghi mọi món "Giá: Liên hệ" → trang mẫu KHÔNG ghi giá (price: null = "Liên hệ"). */
window.SITE_CONFIG = {
  slug: "bien-hai-quan", kind: "restaurant", mark: "fish",
  name: "Biên Hải Quán", shortName: "Biên Hải Quán",
  langs: ["vi","en","ko","zh","ru"], fallbackLang: "en",
  refPrefix: "BHQ",
  heroTitle: { vi:"Biên Hải Quán<br><em>Gành Dầu · Phú Quốc</em>", en:"Biên Hải Quán<br><em>Ganh Dau · Phu Quoc</em>", ko:"Biên Hải Quán<br><em>Gành Dầu · 푸꾸옥</em>", zh:"Biên Hải Quán<br><em>Gành Dầu · 富国岛</em>", ru:"Biên Hải Quán<br><em>Ганьзау · Фукуок</em>" },
  eyebrow: { vi:"Hải sản bình dân sát biển", en:"Seaside seafood, local style", ko:"바닷가 로컬 해산물 식당", zh:"海边平价海鲜", ru:"Морепродукты у самой воды" },
  tagline: {
    vi: "Quán hải sản dân dã ngay mép nước Gành Dầu, cực Bắc đảo — ngồi ăn, ngắm hoàng hôn, nhìn ra đảo Campuchia.",
    en: "A down-to-earth seafood spot right at the water’s edge in Ganh Dau, the island’s far north — eat, watch the sunset, and see Cambodia’s islands across the bay.",
    ko: "섬 최북단 Gành Dầu 바닷가 바로 앞의 소박한 해산물 식당. 식사하며 노을을 보고, 바다 건너 캄보디아 섬까지 바라보세요.",
    zh: "位于富国岛最北端Gành Dầu 村海边的家常海鲜小馆——边吃边看日落，还能远眺对岸的柬埔寨岛屿。",
    ru: "Простое рыбное кафе прямо у воды в Ганьзау, на самом севере острова: ужин на закате с видом на острова Камбоджи."
  },
  heroImage: "assets/hero.webp", heroImageMobile: "assets/hero-m.webp", heroFocus: "50% 50%",
  about: {
    image: "assets/intro.webp",
    title: { vi:"Quán dân chài bên bờ biển", en:"A fisherman’s eatery on the beach", ko:"바닷가의 어부 식당", zh:"海边的渔家小馆", ru:"Рыбацкая харчевня на берегу" },
    text: {
      vi: "Biên Hải Quán nằm ở Gành Dầu — cực Bắc Phú Quốc, trên bãi biển vòng cung khoảng 500 m, cát trắng, nước trong nhìn thấy đáy.\nQuán tự giới thiệu là “rất bình dân”: bàn ghế đặt sát mép nước, chỉ bán hải sản — mực, cá, tôm, sò và đặc biệt là nhum (cầu gai) nướng. Ngoài ra có muối tiêu dưỡng sinh và sinh tố chanh của quán để mang về.",
      en: "Biên Hải Quán sits in Ganh Dau, the northern tip of Phu Quoc, on a curved beach of about 500 m with white sand and water clear to the bottom.\nThe owners call it “very simple”: tables right by the water, and nothing but seafood — squid, fish, prawns, clams and, above all, grilled sea urchin. They also sell their own pepper-salt seasoning and lime juice to take home.",
      ko: "Biên Hải Quán은 푸꾸옥 최북단 Gành Dầu, 약 500m 길이의 반달 모양 해변에 있습니다. 하얀 모래와 바닥까지 보이는 맑은 바다가 펼쳐집니다.\n식당 스스로 ‘아주 소박한 집’이라 소개합니다. 바다 바로 앞에 테이블이 놓여 있고, 오징어·생선·새우·조개, 그리고 무엇보다 성게구이 등 해산물만 판매합니다. 직접 만든 후추소금과 라임 주스도 포장해 갈 수 있습니다.",
      zh: "Biên Hải Quán 位于富国岛最北端的Gành Dầu 村，坐落在约 500 米长的弧形海滩上，白沙细软，海水清澈见底。\n小馆自称“非常平民”：餐桌就摆在水边，只卖海鲜——鱿鱼、鱼、虾、贝类，最有名的是烤海胆。店里自制的养生胡椒盐和青柠汁也可以带走。",
      ru: "Biên Hải Quán находится в Ганьзау, на северной оконечности Фукуока, на дугообразном пляже длиной около 500 м: белый песок и прозрачная до дна вода.\nХозяева сами называют кафе «очень простым»: столики у самой воды и только морепродукты — кальмары, рыба, креветки, моллюски и главное — морской ёж на гриле. С собой можно взять фирменную перечную соль и лаймовый сок."
    },
    signature: { vi:"— Theo lời giới thiệu trên bienhaiquan.com", en:"— From the restaurant’s own website", ko:"— 식당 공식 웹사이트 소개 내용", zh:"— 摘自餐厅官网介绍", ru:"— По описанию на сайте кафе" }
  },
  highlights: [
    { icon:"sun", title:{vi:"Hoàng hôn Gành Dầu",en:"Ganh Dau sunsets",ko:"Gành Dầu의 노을",zh:"Gành Dầu 日落",ru:"Закаты Ганьзау"},
      text:{vi:"Bàn sát mép nước, hướng Tây — nhìn sang các đảo của Campuchia ở phía xa.",en:"Tables at the water’s edge facing west, with Cambodia’s islands on the horizon.",ko:"서쪽을 향한 물가 테이블, 수평선 너머로 캄보디아 섬들이 보입니다.",zh:"水边餐桌朝西，远处可见柬埔寨的岛屿。",ru:"Столики у воды смотрят на запад — на горизонте острова Камбоджи."} },
    { icon:"fish", title:{vi:"Hải sản chọn tại chỗ",en:"Pick your seafood",ko:"직접 고르는 해산물",zh:"现场挑选海鲜",ru:"Выбор на месте"},
      text:{vi:"Khách chọn hải sản tươi sống, quán chế biến tại chỗ: hấp, nướng, cháy tỏi, lẩu.",en:"Choose live seafood and have it cooked your way: steamed, grilled, garlic-fried or in a hotpot.",ko:"살아 있는 해산물을 고르면 찜·구이·마늘볶음·전골 등 원하는 방식으로 조리해 드립니다.",zh:"挑选鲜活海鲜，现场加工：清蒸、烧烤、蒜香、火锅皆可。",ru:"Выберите живые морепродукты — приготовят на пару, на гриле, с чесноком или в хого."} },
    { icon:"wave", title:{vi:"Chất dân chài",en:"Truly local",ko:"현지 어촌 그대로",zh:"地道渔村风味",ru:"Настоящая местная кухня"},
      text:{vi:"Quán gia đình bình dân; theo web của quán, chủ quán hay ôm đàn ca tài tử cải lương cho khách nghe.",en:"A simple family place — according to its website, the owner often picks up an instrument and sings southern Vietnamese folk music for guests.",ko:"소박한 가족 식당. 웹사이트 소개에 따르면 주인장이 종종 악기를 들고 베트남 남부 전통 민요를 불러 준다고 합니다.",zh:"平民家庭小馆。据官网介绍，老板常抱起琴为客人演唱越南南部传统曲艺。",ru:"Простое семейное кафе; по словам сайта, хозяин нередко берёт инструмент и поёт гостям южновьетнамские народные песни."} }
  ],
  phone: "0916 745 423", phoneLink: "+84916745423", phone2: "0943 845 423", zalo: "0916745423",
  email: "bienhaiquanco@gmail.com", website: "https://bienhaiquan.com/",
  address: { vi:"Tổ 1, khu phố Gành Dầu, Phú Quốc, An Giang", en:"Group 1, Ganh Dau quarter, Phu Quoc, An Giang", ko:"푸꾸옥 Gành Dầu 1조 (An Giang)", zh:"富国岛Gành Dầu 区第1组（安江省）", ru:"Группа 1, квартал Ганьзау, Фукуок, Анзянг" },
  mapsLink: "https://www.google.com/maps/place/data=!4m2!3m1!1s0x31081e91fd4698d9:0xbadbf12df674faa2",
  mapsEmbed: "https://maps.google.com/maps?q=Bi%C3%AAn%20H%E1%BA%A3i%20Qu%C3%A1n%20G%C3%A0nh%20D%E1%BA%A7u%20Ph%C3%BA%20Qu%E1%BB%91c&z=14&output=embed",
  reviewsLink: "https://www.google.com/maps/place/data=!4m2!3m1!1s0x31081e91fd4698d9:0xbadbf12df674faa2",
  directionsSteps: [
    { vi:"Quán ở Tổ 1, khu phố Gành Dầu — cực Bắc đảo, ngay trên bãi biển (plus code 9RFQ+58).", en:"The restaurant is in Group 1, Ganh Dau — the island’s far north, right on the beach (plus code 9RFQ+58).", ko:"섬 최북단 Gành Dầu 1조, 해변 바로 위에 있습니다 (플러스 코드 9RFQ+58).", zh:"餐厅位于岛屿最北端Gành Dầu 区第1组，就在海滩上（Plus Code：9RFQ+58）。", ru:"Кафе находится в группе 1, Ганьзау — на самом севере острова, прямо на пляже (plus code 9RFQ+58)." },
    { vi:"Từ khu Vinpearl / Grand World đi taxi khoảng 7 km (theo chia sẻ của khách trên web quán).", en:"From the Vinpearl / Grand World area it is about 7 km by taxi (as shared by a guest on the restaurant’s site).", ko:"빈펄 / 그랜드월드 지역에서 택시로 약 7km입니다 (식당 웹사이트의 고객 후기 기준).", zh:"从珍珠岛（Vinpearl）/ Grand World 一带打车约 7 公里（据餐厅官网上的顾客分享）。", ru:"От района Vinpearl / Grand World около 7 км на такси (по отзыву гостя на сайте кафе)." },
    { vi:"Bấm “Chỉ đường” để mở Google Maps dẫn tới đúng quán.", en:"Tap “Get directions” to open Google Maps straight to the restaurant.", ko:"‘길찾기’를 누르면 구글 지도가 식당까지 안내합니다.", zh:"点击“导航前往”，用 Google 地图直达餐厅。", ru:"Нажмите «Маршрут» — Google Карты приведут прямо к кафе." },
    { vi:"Sau 19h quán thường đông — nên đến sớm hoặc gọi trước để hỏi chỗ.", en:"It gets busy after 7 pm — come early or call ahead to ask about seating.", ko:"오후 7시 이후에는 붐비는 편이니 일찍 오시거나 미리 전화로 자리를 문의하세요.", zh:"晚上 7 点后客人较多，建议早点到或提前致电询问座位。", ru:"После 19:00 бывает многолюдно — приходите пораньше или позвоните заранее." }
  ],
  directionsNote: { vi:"Thông tin đường đi lấy từ web quán và đánh giá khách; nên gọi quán xác nhận.", en:"Directions based on the restaurant’s website and guest reviews; please call to confirm.", ko:"길 안내는 식당 웹사이트와 고객 후기를 바탕으로 했습니다. 전화로 확인해 주세요.", zh:"路线信息来自餐厅官网及顾客评价，建议致电确认。", ru:"Маршрут составлен по сайту кафе и отзывам гостей; уточняйте по телефону." },
  hours: { open:"08:00", close:"22:00", days:{ vi:"Mỗi ngày", en:"Daily", ko:"매일", zh:"每天", ru:"Ежедневно" } },
  usdRate: 26300,
  categories: [
    { id:"sea", name:{ vi:"Hải sản Phú Quốc", en:"Phu Quoc seafood", ko:"푸꾸옥 해산물", zh:"富国岛海鲜", ru:"Морепродукты Фукуока" },
      note:{ vi:"Hải sản tươi sống tính theo cân/thời giá — hỏi giá tại quán.", en:"Live seafood is priced by weight at market rate — ask at the counter.", ko:"활해산물은 시세에 따라 무게로 계산됩니다. 매장에서 가격을 문의하세요.", zh:"鲜活海鲜按时价称重计价，请到店询价。", ru:"Живые морепродукты — по весу и рыночной цене; уточняйте на месте." } },
    { id:"home", name:{ vi:"Đặc sản mang về", en:"To take home", ko:"포장 특산품", zh:"特产带回家", ru:"С собой" } }
  ],
  items: [
    { id:"goi", category:"sea", price:null, name:{vi:"Gỏi cá trích",en:"Herring salad",ko:"청어 회무침 (고이 까 찌)",zh:"凉拌鲱鱼（鲱鱼沙拉）",ru:"Салат из сельди «гой ка чить»"}, desc:{vi:"Món khách nhắc nhiều nhất",en:"The dish guests mention most",ko:"손님들이 가장 많이 찾는 메뉴",zh:"顾客提到最多的一道菜",ru:"Блюдо, которое гости хвалят чаще всего"} },
    { id:"ghe", category:"sea", price:null, featured:true, image:"assets/c-crab.webp", name:{vi:"Ghẹ hấp / ghẹ cháy tỏi",en:"Steamed or garlic-fried blue crab",ko:"꽃게찜 / 마늘 꽃게볶음",zh:"清蒸花蟹 / 蒜香花蟹",ru:"Краб на пару или с чесноком"}, desc:{vi:"Ghẹ Phú Quốc, chọn con tại chỗ",en:"Local blue crab, picked live",ko:"현지 꽃게를 직접 골라 조리",zh:"富国岛花蟹，现场挑选",ru:"Местный синий краб, выбираете сами"} },
    { id:"tomsu", category:"sea", price:null, name:{vi:"Tôm sú tái chanh",en:"Tiger prawns cured in lime",ko:"블랙타이거 새우 라임 무침",zh:"青柠腌老虎虾",ru:"Тигровые креветки в лайме"}, desc:{vi:"Tươi, chua nhẹ",en:"Fresh and zesty",ko:"신선하고 상큼하게",zh:"鲜嫩微酸",ru:"Свежо и с кислинкой"} },
    { id:"nhum", category:"sea", price:null, name:{vi:"Nhum (cầu gai) nướng",en:"Grilled sea urchin",ko:"성게 구이",zh:"烤海胆",ru:"Морской ёж на гриле"}, desc:{vi:"Đặc sản của quán — hoặc vắt chanh ăn sống",en:"House speciality — or raw with lime",ko:"이 집 대표 메뉴, 라임을 뿌려 날로도 즐겨요",zh:"招牌菜，也可挤青柠生吃",ru:"Фирменное блюдо; можно и сырым с лаймом"} },
    { id:"muc", category:"sea", price:null, featured:true, image:"assets/c-squid.webp", name:{vi:"Mực ống hấp sả",en:"Squid steamed with lemongrass",ko:"레몬그라스 오징어찜",zh:"香茅蒸鱿鱼",ru:"Кальмар на пару с лемонграссом"}, desc:{vi:"Mực câu trong ngày",en:"Squid from the day’s catch",ko:"당일 잡은 오징어",zh:"当天捕捞的鱿鱼",ru:"Кальмар из дневного улова"} },
    { id:"tomtit", category:"sea", price:null, name:{vi:"Tôm tít",en:"Mantis shrimp",ko:"갯가재",zh:"皮皮虾",ru:"Рак-богомол"}, desc:{vi:"Hấp hoặc rang muối",en:"Steamed or salt-roasted",ko:"찜 또는 소금구이",zh:"清蒸或椒盐",ru:"На пару или в соли"} },
    { id:"oc", category:"sea", price:null, featured:true, image:"assets/c-shell.webp", name:{vi:"Ốc hương rang muối ớt",en:"Babylon snails with chili salt",ko:"고추소금 바빌론 고둥볶음",zh:"椒盐炒花螺",ru:"Улитки-бабилонии с перцем и солью"}, desc:{vi:"Món nhậu bên biển",en:"A seaside favourite",ko:"바닷가의 인기 안주",zh:"海边下酒好菜",ru:"Любимая закуска у моря"} },
    { id:"lau", category:"sea", price:null, name:{vi:"Lẩu hải sản",en:"Seafood hotpot",ko:"해산물 전골",zh:"海鲜火锅",ru:"Хого с морепродуктами"}, desc:{vi:"Cho nhóm, gia đình",en:"For groups and families",ko:"단체·가족용",zh:"适合多人、家庭",ru:"Для компании и семьи"} },
    { id:"chao", category:"sea", price:null, name:{vi:"Cháo tôm hùm",en:"Lobster rice porridge",ko:"랍스터 죽",zh:"龙虾粥",ru:"Рисовая каша с лобстером"}, desc:{vi:"Béo, ngọt, nấu từ tôm hùm tươi",en:"Rich and sweet, from fresh lobster",ko:"신선한 랍스터로 끓여 고소하고 달큰해요",zh:"鲜龙虾熬制，鲜甜浓郁",ru:"Нежная, из свежего лобстера"} },
    { id:"cachim", category:"sea", price:null, name:{vi:"Cá chim chiên",en:"Fried pomfret",ko:"병어 튀김",zh:"炸鲳鱼",ru:"Жареный помфрет"}, desc:{vi:"Chiên giòn",en:"Crispy fried",ko:"바삭하게 튀겨서",zh:"香酥",ru:"Хрустящая корочка"} },
    { id:"muoitieu", category:"home", price:null, featured:true, image:"assets/c-pepper.webp", name:{vi:"Muối tiêu dưỡng sinh",en:"House pepper-salt seasoning",ko:"건강 후추소금",zh:"养生胡椒盐",ru:"Фирменная перечная соль"}, unit:{vi:"100 g · 500 g · 1 kg",en:"100 g · 500 g · 1 kg",ko:"100g · 500g · 1kg",zh:"100克 · 500克 · 1公斤",ru:"100 г · 500 г · 1 кг"}, desc:{vi:"Sản phẩm riêng của quán",en:"The restaurant’s own product",ko:"식당 자체 제품",zh:"餐厅自家产品",ru:"Собственный продукт кафе"} },
    { id:"sinhto", category:"home", price:null, name:{vi:"Sinh tố chanh / dứa chanh dây",en:"Lime or pineapple-passion fruit juice",ko:"라임 / 파인애플·패션프루트 주스",zh:"青柠汁 / 菠萝百香果汁",ru:"Сок лайма / ананас с маракуйей"}, desc:{vi:"Nước giải khát đóng chai của quán",en:"Bottled by the restaurant",ko:"식당에서 직접 병입",zh:"餐厅自制瓶装饮品",ru:"Разлит в самом кафе"} }
  ],
  gallery: [
    { src:"assets/g1.webp", alt:{vi:"Thuyền thúng trên bãi cát",en:"Basket boat on the sand",ko:"모래 위의 바구니배",zh:"沙滩上的簸箕船",ru:"Лодка-корзина на песке"} },
    { src:"assets/g2.webp", alt:{vi:"Thuyền đánh cá ngoài khơi",en:"Fishing boats offshore",ko:"앞바다의 고깃배",zh:"近海渔船",ru:"Рыбацкие лодки в море"} },
    { src:"assets/g3.webp", alt:{vi:"Thuyền thúng bên bến",en:"Basket boat by the pier",ko:"부두의 바구니배",zh:"码头边的簸箕船",ru:"Лодка-корзина у причала"} },
    { src:"assets/g4.webp", alt:{vi:"Cá vừa cập bờ",en:"The catch just landed",ko:"막 들어온 생선",zh:"刚上岸的渔获",ru:"Свежий улов"} },
    { src:"assets/g5.webp", alt:{vi:"Sò nướng",en:"Grilled scallops",ko:"가리비 구이",zh:"烤扇贝",ru:"Гребешки на гриле"} },
    { src:"assets/g6.webp", alt:{vi:"Ghẹ hấp",en:"Steamed crab",ko:"꽃게찜",zh:"清蒸花蟹",ru:"Краб на пару"} }
  ],
  booking: { mode: "none" },
  i18n: {
    vi:{ price_note:"Web của quán ghi mọi món “Giá: Liên hệ”, nên trang mẫu không tự đặt giá. Hải sản tươi sống tính theo cân và thời giá.", services_title:"Bảng món", gallery_title:"Gành Dầu, cực Bắc đảo", signature:"Món nên thử", cta_explore:"Xem bảng món" },
    en:{ price_note:"The restaurant’s website lists every dish as “price on request”, so this sample shows no prices. Live seafood is charged by weight at the day’s rate.", services_title:"The menu", gallery_title:"Ganh Dau, the island’s far north", signature:"Must-try dishes" },
    ko:{ price_note:"식당 웹사이트에 모든 메뉴가 ‘가격 문의’로 되어 있어 샘플 페이지에도 가격을 넣지 않았습니다. 활해산물은 그날 시세에 따라 무게로 계산됩니다.", services_title:"메뉴", gallery_title:"섬 최북단, Gành Dầu", signature:"꼭 먹어 볼 메뉴" },
    zh:{ price_note:"餐厅官网上所有菜品均标注“价格请咨询”，因此本示例页面不标价。鲜活海鲜按当日时价称重计价。", services_title:"菜单", gallery_title:"岛屿最北端 · Gành Dầu", signature:"必尝菜品" },
    ru:{ price_note:"На сайте кафе у всех блюд указано «цена по запросу», поэтому в демо цен нет. Живые морепродукты — по весу и цене дня.", services_title:"Меню", gallery_title:"Ганьзау — север острова", signature:"Стоит попробовать" }
  },
  designer: { zalo: { url:"https://zalo.me/0337031198", label:"0337 031 198", qr:"designer-zalo.png" }
    // telegram: { url:"https://t.me/<username>", label:"@<username>", qr:"designer-telegram.png" }
  },
  publicUrl: "https://huydoan06-star.github.io/demo-phu-quoc/bien-hai-quan/"
};
