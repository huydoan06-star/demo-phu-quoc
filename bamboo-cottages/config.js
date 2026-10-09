/* Bamboo Cottages & Restaurant · TRANG MẪU (chưa phải trang chính thức).
 * Nguồn: bamboocottagephuquoc.com 09/10/2026 + review Google. Web KHÔNG công bố thực đơn, giá món, giờ mở nhà hàng
 * → 3 món trong trang chỉ là món MINH HOẠ, ghi rõ "chờ quán gửi thực đơn"; giá "Liên hệ"; giờ "gọi hỏi trước". */
(function(){
function L(en,vi,ko,zh,ru){ return {en:en,vi:vi,ko:ko,zh:zh,ru:ru}; }
var SAMPLE = L("Illustration only — waiting for the restaurant’s real menu","Món minh hoạ — chờ quán gửi thực đơn thật","예시 메뉴입니다 — 실제 메뉴를 받는 대로 교체","示意菜品——待餐厅提供真实菜单","Пример — ждём настоящее меню ресторана");
window.SITE_CONFIG = {
  slug: "bamboo-cottages", kind: "restaurant", mark: "bamboo",
  name: "Bamboo Cottages & Restaurant", shortName: "Bamboo Cottages",
  langs: ["en","vi","ko","zh","ru"], fallbackLang: "en",
  refPrefix: "BB",
  heroTitle: L("bamboo<br><em>cottages &amp; restaurant</em>","bamboo<br><em>cottages &amp; restaurant</em>","bamboo<br><em>cottages &amp; restaurant</em>","bamboo<br><em>cottages &amp; restaurant</em>","bamboo<br><em>cottages &amp; restaurant</em>"),
  eyebrow: L("Vung Bau Bay · Phu Quoc","Vịnh Vũng Bầu · Phú Quốc","붕바우 만 · 푸꾸옥","Vũng Bầu 湾 · 富国岛","Залив Вунгбау · Фукуок"),
  tagline: L(
    "Come find yourself at home. Healthy homemade Vietnamese food on a quiet beach — drop in for lunch or dinner, even if you’re not staying with us.",
    "Come find yourself at home. Món Việt nhà làm lành mạnh bên bãi biển yên tĩnh — ghé ăn trưa, ăn tối dù bạn không lưu trú.",
    "Come find yourself at home. 조용한 해변에서 즐기는 건강한 베트남 가정식 — 숙박하지 않아도 점심·저녁 드시러 오세요.",
    "Come find yourself at home。安静海滩边的健康越南家常菜——不住店也欢迎来吃午餐、晚餐。",
    "Come find yourself at home. Полезная домашняя вьетнамская еда на тихом пляже — заходите на обед или ужин, даже если не живёте у нас."),
  heroImage: "assets/hero.webp", heroImageMobile: "assets/hero-m.webp", heroFocus: "50% 50%",
  about: {
    image: "assets/intro.webp",
    title: L("A taste of the original Phu Quoc","옛 푸꾸옥의 맛","Hương vị Phú Quốc nguyên sơ","原汁原味的富国岛","Вкус настоящего Фукуока"),
    text: L(
      "Bamboo Cottages is a Vietnamese family-run getaway on a secluded stretch of beach in Vung Bau Bay — our family has lived here on and off since 2005.\nOur kitchen serves only healthy, authentic homemade Vietnamese dishes, with many vegan options and plant-based versions of the classics, made with the freshest ingredients.",
      "Bamboo Cottages là nơi nghỉ do một gia đình Việt điều hành, trên đoạn bãi biển biệt lập ở vịnh Vũng Bầu — gia đình đã sống ở đây từ năm 2005.\nBếp chỉ nấu món Việt nhà làm lành mạnh, nhiều lựa chọn thuần chay và phiên bản chay của các món truyền thống, từ nguyên liệu tươi nhất.",
      "Bamboo Cottages는 붕바우 만의 한적한 해변에 자리한 베트남 가족 운영 숙소로, 2005년부터 가족이 이곳에서 지내 왔습니다.\n주방에서는 건강한 정통 베트남 가정식만 만들며, 비건 메뉴와 전통 요리의 식물성 버전도 많습니다. 모두 가장 신선한 재료로 만듭니다.",
      "Bamboo Cottages 是一家越南家庭经营的度假小屋，坐落在 Vũng Bầu 湾一段僻静的海滩上——这家人自 2005 年起便断断续续住在这里。\n厨房只做健康地道的越南家常菜，有许多纯素选择以及经典菜的植物版本，全部采用最新鲜的食材。",
      "Bamboo Cottages — семейный вьетнамский отель на уединённом пляже в заливе Вунгбау; семья живёт здесь с 2005 года.\nНа кухне готовят только полезную домашнюю вьетнамскую еду, много веганских блюд и растительных версий классики — из самых свежих продуктов."),
    signature: L("— The Bamboo family","— Gia đình Bamboo","— Bamboo 가족","— Bamboo 一家","— Семья Bamboo")
  },
  highlights: [
    { icon:"leaf", title:L("Many vegan options","비건 메뉴 다양","Nhiều món thuần chay","多种纯素选择","Много веганских блюд"),
      text:L("Plant-based versions of classic Vietnamese dishes.","전통 베트남 요리를 식물성으로.","Phiên bản chay của món Việt truyền thống.","经典越南菜的植物版本。","Растительные версии вьетнамской классики.") },
    { icon:"route", title:L("Step-by-step directions","단계별 길 안내","Chỉ đường từng bước","分步路线","Маршрут шаг за шагом"),
      text:L("The bay is quiet and a little hidden — follow the steps below.","한적하고 조금 숨어 있는 만이에요. 아래 안내를 따라오세요.","Vịnh yên tĩnh, hơi khó tìm — làm theo các bước bên dưới.","海湾僻静、略难找，请按下方步骤前往。","Залив тихий и немного скрыт — следуйте шагам ниже.") },
    { icon:"bamboo", title:L("Family-run since 2005","2005년부터 가족 운영","Gia đình gìn giữ từ 2005","家庭经营，始于 2005","Семейное место с 2005 года"),
      text:L("Eco-friendly, small and calm — only 18 rooms on our stretch of beach.","친환경적이고 조용한 곳, 객실은 18개뿐입니다.","Thân thiện môi trường, nhỏ và yên — chỉ 18 phòng trên đoạn biển này.","环保、小巧而宁静——这段海滩上只有 18 间客房。","Экологично, небольшое и спокойное место — всего 18 номеров.") }
  ],
  phone: "+84 989 798 906", phoneLink: "+84989798906", phone2: "+84 297 2810 345",
  email: "bamboocphuquoc@gmail.com", website: "https://www.bamboocottagephuquoc.com/",
  address: L("Group 5, Hamlet 4, Vung Bau, Cua Can, Phu Quoc","Tổ 5, ấp 4 Vũng Bầu, xã Cửa Cạn, Phú Quốc","푸꾸옥 끄어깐 붕바우 4마을 5조","富国岛 Cửa Cạn 乡 Vũng Bầu 4 村 5 组","группа 5, деревня 4, Вунгбау, Кыакан, Фукуок"),
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Bamboo+Cottages+%26+Restaurant+Vung+Bau+Phu+Quoc",
  mapsEmbed: "https://maps.google.com/maps?q=Bamboo%20Cottages%20Vung%20Bau%20Phu%20Quoc&z=13&output=embed",
  reviewsLink: "https://www.google.com/maps/search/?api=1&query=Bamboo+Cottages+%26+Restaurant+Phu+Quoc",
  directionsSteps: [
    L("We are on the northwest coast, in Vung Bau Bay (Group 5, Hamlet 4, Vung Bau, Cua Can).","Bamboo ở bờ Tây Bắc đảo, trong vịnh Vũng Bầu (Tổ 5, ấp 4 Vũng Bầu, xã Cửa Cạn).","섬 북서쪽 해안 붕바우 만(끄어깐 붕바우 4마을 5조)에 있습니다.","我们位于岛屿西北海岸的 Vũng Bầu 湾（Cửa Cạn 乡 Vũng Bầu 4 村 5 组）。","Мы на северо-западном побережье, в заливе Вунгбау (группа 5, деревня 4, Вунгбау, Кыакан)."),
    L("About 30 min from Duong Dong town, 45 min from the airport, 10 min from Grand World (per our website).","즈엉동 시내에서 약 30분, 공항에서 45분, 그랜드월드에서 10분 거리입니다(웹사이트 기준).","Khoảng 30 phút từ trung tâm Dương Đông, 45 phút từ sân bay, 10 phút từ Grand World (theo web).","距阳东镇约 30 分钟，距机场 45 分钟，距 Grand World 10 分钟（据官网）。","Около 30 минут от Зыонгдонга, 45 минут от аэропорта и 10 минут от Grand World (по данным сайта)."),
    L("Tap “Get directions”. Guests mention the last stretch (about 1 km) is a dirt road — go slowly, especially after rain.","‘길찾기’를 누르세요. 마지막 약 1km는 비포장도로라는 후기가 많으니 천천히, 특히 비 온 뒤에는 조심하세요.","Bấm “Chỉ đường”. Nhiều khách kể đoạn cuối (khoảng 1 km) là đường đất — đi chậm, nhất là sau mưa.","点击“导航前往”。不少客人提到最后约 1 公里是土路，请慢行，雨后尤其注意。","Нажмите «Маршрут». По отзывам гостей, последний участок (около 1 км) — грунтовая дорога: езжайте медленно, особенно после дождя."),
    L("Restaurant hours for walk-in guests aren’t published yet — please call ahead.","외부 손님을 위한 레스토랑 영업시간은 아직 공개되지 않았으니 미리 전화해 주세요.","Giờ mở nhà hàng cho khách ghé ăn chưa công bố — vui lòng gọi trước.","餐厅对外营业时间尚未公布，请提前致电。","Часы работы ресторана для гостей со стороны пока не опубликованы — позвоните заранее.")
  ],
  directionsNote: L("Directions based on the website and guest reviews; please call to confirm.","Đường đi dựa trên web và đánh giá của khách; nên gọi xác nhận.","웹사이트와 고객 후기를 바탕으로 한 안내입니다. 전화로 확인해 주세요.","路线信息来自官网及顾客评价，请致电确认。","Маршрут составлен по сайту и отзывам гостей; уточняйте по телефону."),
  hours: { text: L("Hours: please call ahead","Giờ mở cửa: vui lòng gọi trước","영업시간: 전화 문의","营业时间：请提前致电","Часы работы: уточняйте по телефону") },
  usdRate: 26300,
  categories: [
    { id:"viet", name:L("Homemade Vietnamese","베트남 가정식","Món Việt nhà làm","越南家常菜","Домашняя вьетнамская кухня"),
      note:L("The website doesn’t publish the restaurant menu yet. The dishes below only show how the menu will look — the real dishes and prices will be added once the restaurant sends them.","웹사이트에 아직 레스토랑 메뉴가 없습니다. 아래는 메뉴가 보이는 방식을 보여 주는 예시이며, 실제 메뉴와 가격은 레스토랑에서 받는 대로 넣습니다.","Web chưa công bố thực đơn nhà hàng. Các món dưới đây chỉ minh hoạ cách trình bày — món và giá thật sẽ cập nhật khi quán gửi.","官网尚未公布餐厅菜单。以下菜品仅示意排版效果，真实菜品和价格待餐厅提供后更新。","Меню ресторана на сайте пока нет. Блюда ниже лишь показывают, как будет выглядеть меню; настоящие блюда и цены добавим, когда ресторан их пришлёт.") }
  ],
  items: [
    { id:"roll", category:"viet", price:null, featured:true, image:"assets/c-roll.webp", name:L("Fresh spring rolls (example)","월남쌈 (예시)","Gỏi cuốn (minh hoạ)","越南春卷（示意）","Свежие роллы (пример)"), desc:SAMPLE },
    { id:"pho", category:"viet", price:null, featured:true, image:"assets/c-pho.webp", name:L("Noodle soup (example)","쌀국수 (예시)","Phở / bún (minh hoạ)","越南汤粉（示意）","Суп с лапшой (пример)"), desc:SAMPLE },
    { id:"banhmi", category:"viet", price:null, featured:true, image:"assets/c-banhmi.webp", name:L("Banh mi (example)","반미 (예시)","Bánh mì (minh hoạ)","越南法棍（示意）","Баньми (пример)"), desc:SAMPLE }
  ],
  gallery: [
    { src:"assets/g1.webp", alt:L("Hammock by the sea","바다 옆 해먹","Võng bên biển","海边吊床","Гамак у моря") },
    { src:"assets/g2.webp", alt:L("Bamboo hut","대나무 오두막","Chòi tre","竹屋","Бамбуковая хижина") },
    { src:"assets/g3.webp", alt:L("Shady path to the beach","해변으로 가는 그늘길","Lối nhỏ ra biển","通往海滩的林荫小路","Тенистая тропинка к пляжу") },
    { src:"assets/g4.webp", alt:L("Wooden stilt houses","나무 고상가옥","Nhà sàn gỗ","木制高脚屋","Деревянные дома на сваях") },
    { src:"assets/g5.webp", alt:L("Palm-lined beach","야자수 해변","Bãi biển hàng dừa","椰林海滩","Пляж с пальмами") },
    { src:"assets/g6.webp", alt:L("Fresh spring rolls","월남쌈","Gỏi cuốn","越南春卷","Свежие роллы") }
  ],
  booking: { mode: "none" },
  i18n: {
    en:{ services_title:"From our kitchen", price_note:"Prices: please ask the restaurant (not published yet).", gallery_title:"Life in Vung Bau", signature:"Kitchen style", cta_explore:"See the kitchen" },
    vi:{ services_title:"Từ căn bếp nhà Bamboo", price_note:"Giá: vui lòng hỏi quán (chưa công bố).", gallery_title:"Nhịp sống Vũng Bầu", signature:"Phong cách bếp", cta_explore:"Xem món" },
    ko:{ services_title:"Bamboo 주방에서", price_note:"가격: 레스토랑에 문의해 주세요(아직 미공개).", gallery_title:"붕바우의 일상", signature:"주방 스타일", cta_explore:"메뉴 보기" },
    zh:{ services_title:"Bamboo 厨房", price_note:"价格：请咨询餐厅（尚未公布）。", gallery_title:"Vũng Bầu 的日常", signature:"厨房风格", cta_explore:"查看菜品" },
    ru:{ services_title:"С нашей кухни", price_note:"Цены: уточняйте в ресторане (пока не опубликованы).", gallery_title:"Жизнь в Вунгбау", signature:"Стиль кухни", cta_explore:"Смотреть блюда" }
  },
  designer: { zalo: { url:"https://zalo.me/0337031198", label:"0337 031 198", qr:"designer-zalo.png" } },
  publicUrl: "https://huydoan06-star.github.io/demo-phu-quoc/bamboo-cottages/"
};
})();
