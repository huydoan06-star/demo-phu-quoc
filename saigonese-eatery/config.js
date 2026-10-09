/* Saigonese Eatery · TRANG MẪU (chưa phải trang chính thức của nhà hàng).
 * Nguồn: saigoneseeatery.com (/, /our-menu) 09/10/2026, Google Maps. Menu trên web là ảnh/flipbook → KHÔNG ghi giá (Liên hệ).
 * Tên món lấy từ web + review công khai; nút đặt bàn trỏ về form sẵn có của quán. */
(function(){
function L(en,vi,ko,zh,ru){ return {en:en,vi:vi,ko:ko,zh:zh,ru:ru}; }
window.SITE_CONFIG = {
  slug: "saigonese-eatery", kind: "restaurant", mark: "bowl",
  name: "Saigonese Eatery", shortName: "Saigonese",
  langs: ["en","vi","ko","zh","ru"], fallbackLang: "en",
  refPrefix: "SG",
  heroTitle: L("Saigonese<br><em>Modern Asian Dining · since 2016</em>","Saigonese<br><em>Modern Asian Dining · từ 2016</em>","Saigonese<br><em>Modern Asian Dining · since 2016</em>","Saigonese<br><em>Modern Asian Dining · 始于 2016</em>","Saigonese<br><em>Modern Asian Dining · с 2016</em>"),
  eyebrow: L("Eatery · bakery · wine · Phu Quoc","Nhà hàng · bánh · vang · Phú Quốc","레스토랑 · 베이커리 · 와인 · 푸꾸옥","餐厅 · 烘焙 · 葡萄酒 · 富国岛","Ресторан · пекарня · вино · Фукуок"),
  tagline: L(
    "From the heart of Saigon to Phu Quoc — breakfast, lunch, dinner or just a coffee, all day from 8 am.",
    "Từ trung tâm Sài Gòn đến Phú Quốc — ăn sáng, ăn trưa, ăn tối hay chỉ một ly cà phê, mở cửa từ 8 giờ sáng.",
    "사이공 한복판에서 푸꾸옥까지 — 아침, 점심, 저녁, 혹은 커피 한 잔. 아침 8시부터 문을 엽니다.",
    "从西贡市中心来到富国岛——早餐、午餐、晚餐或只是一杯咖啡，每天早上 8 点开门。",
    "Из самого сердца Сайгона — на Фукуок: завтрак, обед, ужин или просто кофе, с 8 утра."),
  heroImage: "assets/hero.webp", heroImageMobile: "assets/hero-m.webp", heroFocus: "50% 50%",
  about: {
    image: "assets/intro.webp",
    title: L("Where tradition meets new ideas","전통과 새로움이 만나는 곳","Nơi truyền thống gặp đổi mới","传统与创新相遇","Где традиции встречаются с новым"),
    text: L(
      "Since 2016, Saigonese Eatery has served modern Asian dishes alongside a carefully chosen wine list. The menu follows founder Thao’s travels — flavours and techniques gathered around the world, reimagined with a Vietnamese and Southeast Asian soul.\nWe cook with local ingredients and herbs from our own garden, and bake sourdough, croissants and pain au chocolat fresh every day.",
      "Từ năm 2016, Saigonese Eatery mang đến món Á hiện đại cùng danh sách rượu vang chọn lọc. Thực đơn đi theo hành trình của người sáng lập Thảo — hương vị và kỹ thuật góp nhặt khắp thế giới, tái hiện với tinh thần Việt Nam và Đông Nam Á.\nQuán dùng nguyên liệu địa phương, rau thơm từ vườn nhà, và nướng sourdough, croissant, pain au chocolat tươi mỗi ngày.",
      "2016년부터 Saigonese Eatery는 정성껏 고른 와인 리스트와 함께 모던 아시안 요리를 선보여 왔습니다. 메뉴에는 창업자 타오가 세계 곳곳에서 모은 맛과 기술이 베트남·동남아의 감성으로 새롭게 담겨 있습니다.\n현지 식재료와 직접 키운 허브를 쓰고, 사워도우·크루아상·뺑 오 쇼콜라를 매일 굽습니다.",
      "自 2016 年起，Saigonese Eatery 以现代亚洲料理搭配精选葡萄酒单。菜单追随创始人 Thảo 的足迹——把从世界各地收集的风味与技法，以越南及东南亚的灵魂重新演绎。\n我们使用本地食材和自家花园种植的香草，每天新鲜烘焙酸种面包、可颂和巧克力面包。",
      "С 2016 года Saigonese Eatery подаёт современную азиатскую кухню и тщательно подобранную винную карту. Меню следует за путешествиями основательницы Тхао — вкусы и техники со всего мира, переосмысленные во вьетнамском и юго-восточноазиатском духе.\nМы готовим из местных продуктов и зелени из собственного сада, а закваску, круассаны и пен-о-шоколад печём каждый день."),
    signature: L("— Saigonese Eatery, since 2016","— Saigonese Eatery, từ 2016","— Saigonese Eatery, since 2016","— Saigonese Eatery，始于 2016","— Saigonese Eatery, с 2016 года")
  },
  highlights: [
    { icon:"leaf", title:L("Herbs from our garden","직접 키운 허브","Rau thơm vườn nhà","自家香草","Зелень из своего сада"),
      text:L("Local ingredients and herbs we grow ourselves.","현지 식재료와 직접 기른 허브를 사용합니다.","Nguyên liệu địa phương, rau thơm tự trồng.","本地食材，自种香草。","Местные продукты и зелень, которую выращиваем сами.") },
    { icon:"cup", title:L("Bakery & coffee","베이커리 & 커피","Bánh tươi & cà phê","烘焙与咖啡","Выпечка и кофе"),
      text:L("Sourdough, croissants and pain au chocolat baked daily; salted coffee.","매일 굽는 사워도우·크루아상·뺑 오 쇼콜라, 그리고 소금 커피.","Sourdough, croissant, pain au chocolat nướng mỗi ngày; cà phê muối.","每日现烤酸种面包、可颂、巧克力面包，还有咸咖啡。","Ежедневная выпечка: хлеб на закваске, круассаны, пен-о-шоколад; солёный кофе.") },
    { icon:"group", title:L("For the whole family","온 가족을 위해","Cho cả gia đình","全家皆宜","Для всей семьи"),
      text:L("Separate kids’ and vegetarian menus.","어린이 메뉴와 채식 메뉴가 따로 있습니다.","Có thực đơn trẻ em và thực đơn chay riêng.","另设儿童菜单和素食菜单。","Есть отдельные детское и вегетарианское меню.") }
  ],
  phone: "+84 938 059 650", phoneLink: "+84938059650",
  email: "hello@saigoneseeatery.com", website: "https://www.saigoneseeatery.com/",
  address: L("129A Tran Hung Dao, Duong Dong, Phu Quoc","129A Trần Hưng Đạo, Dương Đông, Phú Quốc","푸꾸옥 즈엉동 쩐흥다오 129A","富国岛阳东陈兴道路 129A 号","ул. Чанхынгдао, 129A, Зыонгдонг, Фукуок"),
  mapsLink: "https://www.google.com/maps/place/data=!4m2!3m1!1s0x31a78c887112635d:0x7b7d03af5e526e15",
  mapsEmbed: "https://maps.google.com/maps?q=Saigonese%20Eatery%20129A%20Tran%20Hung%20Dao%20Phu%20Quoc&z=15&output=embed",
  reviewsLink: "https://www.google.com/maps/place/data=!4m2!3m1!1s0x31a78c887112635d:0x7b7d03af5e526e15",
  menuLink: "https://www.saigoneseeatery.com/our-menu",
  hours: { open:"08:00", close:"22:00", days: L("Monday – Sunday","Thứ Hai – Chủ Nhật","월~일","周一至周日","Пн–Вс") },
  usdRate: 26300,
  categories: [
    { id:"bf", name:L("Breakfast & bakery","아침 식사 & 베이커리","Ăn sáng & bánh","早餐与烘焙","Завтрак и выпечка") },
    { id:"main", name:L("Lunch & dinner","점심 & 저녁","Ăn trưa & tối","午餐与晚餐","Обед и ужин"),
      note:L("Asian-fusion dishes designed for sharing.","나눠 먹기 좋은 아시안 퓨전 요리.","Món Á kết hợp, hợp để ăn chung.","适合分享的亚洲融合菜。","Азиатский фьюжн — удобно заказывать на компанию.") },
    { id:"drink", name:L("Coffee, desserts & wine","커피 · 디저트 · 와인","Cà phê, tráng miệng & rượu vang","咖啡、甜点与葡萄酒","Кофе, десерты и вино") }
  ],
  items: [
    { id:"benedict", category:"bf", price:null, name:L("Eggs Benedict","에그 베네딕트","Trứng Benedict","班尼迪克蛋","Яйца Бенедикт"), desc:L("A breakfast classic","대표 브런치 메뉴","Món sáng kinh điển","经典早餐","Классика завтрака") },
    { id:"croissant", category:"bf", price:null, featured:true, image:"assets/c-croissant.webp", name:L("Croissant & pain au chocolat","크루아상 & 뺑 오 쇼콜라","Croissant & pain au chocolat","可颂与巧克力面包","Круассан и пен-о-шоколад"), desc:L("Baked fresh every day at Saigonese Bakery","Saigonese Bakery에서 매일 구워요","Nướng tươi mỗi ngày tại Saigonese Bakery","Saigonese Bakery 每日现烤","Каждый день свежие из Saigonese Bakery") },
    { id:"sourdough", category:"bf", price:null, name:L("Sourdough bread","사워도우 빵","Bánh mì sourdough","酸种面包","Хлеб на закваске"), desc:L("Freshly baked","갓 구운 빵","Nướng tươi","新鲜出炉","Свежая выпечка") },
    { id:"burger", category:"main", price:null, featured:true, image:"assets/c-burger.webp", name:L("Wagyu beef burger","와규 버거","Burger bò Wagyu","和牛汉堡","Бургер с говядиной вагю"), desc:L("A guest favourite","손님들이 가장 많이 찾는 메뉴","Món khách khen nhiều","深受客人喜爱","Любимое блюдо гостей") },
    { id:"oyster", category:"main", price:null, featured:true, image:"assets/c-oyster.webp", name:L("Oysters","굴","Hàu","生蚝","Устрицы"), desc:L("Phu Quoc seafood","푸꾸옥 해산물","Hải sản Phú Quốc","富国岛海鲜","Морепродукты Фукуока") },
    { id:"pave", category:"main", price:null, name:L("Crispy potato pavé with salmon roe","연어알을 올린 크리스피 감자 파베","Khoai tây pavé giòn với trứng cá hồi","香脆土豆千层配三文鱼籽","Хрустящий картофельный паве с икрой лосося"), desc:L("Crispy layered potato","바삭한 층층 감자","Khoai tây xếp lớp chiên giòn","层层香脆的土豆","Слоёный хрустящий картофель") },
    { id:"tomyum", category:"main", price:null, name:L("Tom yum seafood pasta","똠얌 해산물 파스타","Mì Ý hải sản tom yum","冬阴功海鲜意面","Паста с морепродуктами том ям"), desc:L("Thai flavours, Italian pasta","태국의 맛, 이탈리아 파스타","Vị Thái, sợi mì Ý","泰式风味，意式面条","Тайский вкус, итальянская паста") },
    { id:"crabrice", category:"main", price:null, name:L("Soft-shell crab rice","소프트셸 크랩 라이스","Cơm cua lột","软壳蟹饭","Рис с мягкопанцирным крабом"), desc:L("Crispy soft-shell crab","바삭한 소프트셸 크랩","Cua lột chiên giòn","香脆软壳蟹","Хрустящий краб") },
    { id:"pizza", category:"main", price:null, name:L("Pizza","피자","Pizza","披萨","Пицца"), desc:L("See the full menu for toppings","토핑은 전체 메뉴 참고","Xem vị trong thực đơn đầy đủ","口味详见完整菜单","Начинки — в полном меню") },
    { id:"saltcoffee", category:"drink", price:null, name:L("Salted coffee","소금 커피","Cà phê muối","咸咖啡","Солёный кофе"), desc:L("Vietnamese coffee with salted cream","소금 크림을 올린 베트남 커피","Cà phê Việt với kem muối","越南咖啡配咸奶盖","Вьетнамский кофе с солёными сливками") },
    { id:"tiramisu", category:"drink", price:null, name:L("Tiramisu","티라미수","Tiramisu","提拉米苏","Тирамису"), desc:L("Guests often pair it with salted coffee","소금 커피와 함께 많이 주문해요","Khách hay gọi cùng cà phê muối","客人常搭配咸咖啡","Гости часто берут с солёным кофе") },
    { id:"wine", category:"drink", price:null, name:L("Wine list","와인 리스트","Danh sách rượu vang","葡萄酒单","Винная карта"), desc:L("Selected by chef Thao Le","타오 레 셰프가 직접 선정","Do đầu bếp Thao Le tuyển chọn","由主厨 Thao Le 精选","Подобрана шефом Тхао Ле") }
  ],
  gallery: [
    { src:"assets/g1.webp", alt:L("Dining room with plants","식물이 가득한 다이닝룸","Không gian nhiều cây xanh","绿植环绕的餐厅","Зал с растениями") },
    { src:"assets/g2.webp", alt:L("Restaurant interior","레스토랑 내부","Không gian nhà hàng","餐厅内景","Интерьер ресторана") },
    { src:"assets/g3.webp", alt:L("Fresh croissants","갓 구운 크루아상","Croissant mới nướng","新鲜可颂","Свежие круассаны") },
    { src:"assets/g4.webp", alt:L("Oysters","굴","Hàu","生蚝","Устрицы") },
    { src:"assets/g5.webp", alt:L("Dining room among plants","식물 사이의 다이닝룸","Phòng ăn giữa cây xanh","绿植间的用餐区","Зал среди зелени") },
    { src:"assets/g6.webp", alt:L("Burger","버거","Burger","汉堡","Бургер") }
  ],
  booking: { mode: "external", url: "https://www.saigoneseeatery.com/our-menu" },
  i18n: {
    en:{ services_title:"Menu highlights", price_note:"Prices are on the restaurant’s full menu — tap the link below or ask our staff." },
    vi:{ services_title:"Món tiêu biểu", price_note:"Giá xem trong thực đơn đầy đủ của quán — bấm liên kết bên dưới hoặc hỏi nhân viên." },
    ko:{ services_title:"대표 메뉴", price_note:"가격은 레스토랑 전체 메뉴에서 확인하시거나 직원에게 문의해 주세요." },
    zh:{ services_title:"招牌菜", price_note:"价格请查看餐厅完整菜单（点击下方链接）或咨询店员。" },
    ru:{ services_title:"Популярные блюда", price_note:"Цены — в полном меню ресторана (ссылка ниже) или у персонала." }
  },
  designer: { zalo: { url:"https://zalo.me/0337031198", label:"0337 031 198", qr:"designer-zalo.png" } },
  publicUrl: "https://huydoan06-star.github.io/demo-phu-quoc/saigonese-eatery/"
};
})();
