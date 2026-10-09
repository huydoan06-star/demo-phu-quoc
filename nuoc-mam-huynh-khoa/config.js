/* Nước mắm Huỳnh Khoa · TRANG MẪU (chưa phải trang chính thức của cơ sở).
 * Nguồn: nuocmamhuynhkhoa.com 09/10/2026 (mọi sản phẩm ghi "Liên hệ"), Google Maps (giờ: chỉ đọc được Thứ Sáu 07:30–17:30),
 * localvietnam.com (tham quan ~30–60 phút, có nếm thử, miễn phí). */
(function(){
function L(en,vi,ko,zh,ru){ return {en:en,vi:vi,ko:ko,zh:zh,ru:ru}; }
var BOX6 = L("Glass bottle 205 ml · box of 6","Chai thủy tinh 205ml · hộp 6 chai","205ml 유리병 · 6병 세트","205 毫升玻璃瓶 · 6 瓶装","Стекло 205 мл · коробка 6 шт.");
var B520 = L("520 ml bottle","Chai 520ml","520ml 병","520 毫升瓶装","Бутылка 520 мл");
function fs(n){ return L("Cot nhi fish sauce "+n+"°N","Nước mắm cốt nhĩ "+n+" đạm","꼿니 피시소스 "+n+"°N","头道鱼露 "+n+"°N","Рыбный соус «кот ньи» "+n+"°N"); }
var FSD = L("First-press traditional fish sauce","첫 추출 전통 피시소스","Nước mắm truyền thống cốt nhĩ (nước cốt đầu)","传统头道鱼露","Традиционный соус первого отжима");
window.SITE_CONFIG = {
  slug: "nuoc-mam-huynh-khoa", kind: "shop", mark: "barrel",
  name: "Nước mắm Huỳnh Khoa", shortName: "Huỳnh Khoa",
  langs: ["en","vi","ko","zh","ru"], fallbackLang: "en",
  refPrefix: "HK",
  heroTitle: L("Huynh Khoa<br><em>Traditional Phu Quoc fish sauce</em>","Huỳnh Khoa<br><em>Nước mắm truyền thống Phú Quốc</em>","Huỳnh Khoa<br><em>푸꾸옥 전통 피시소스</em>","Huỳnh Khoa<br><em>富国岛传统鱼露</em>","Huỳnh Khoa<br><em>Традиционный соус Фукуока</em>"),
  eyebrow: L("Fish sauce house · Duong To","Nhà thùng · Dương Tơ","피시소스 숙성장 · 즈엉터","鱼露酿造坊 · 阳泗","Соусная фабрика · Зыонгто"),
  tagline: L(
    "Keeping the soul of the sea in every drop. Visit the barrel house, taste the different grades and take Phu Quoc home.",
    "Giữ hồn biển trong từng giọt nước mắm Phú Quốc. Ghé nhà thùng, nếm thử từng loại đạm và mang đặc sản về làm quà.",
    "한 방울 한 방울에 바다의 혼을 담습니다. 숙성 통을 둘러보고, 등급별로 맛보고, 푸꾸옥을 선물로 가져가세요.",
    "每一滴都留住大海的灵魂。参观鱼露酿造坊，品尝不同等级的鱼露，把富国岛带回家。",
    "Душа моря в каждой капле. Загляните на фабрику, попробуйте соус разной крепости и увезите Фукуок с собой."),
  heroImage: "assets/hero.webp", heroImageMobile: "assets/hero-m.webp", heroFocus: "50% 50%",
  about: {
    image: "assets/intro.webp",
    title: L("A family craft by the sea","바다 곁의 가업","Nghề truyền thống bên biển","海边的家族手艺","Семейное ремесло у моря"),
    text: L(
      "Phu Quoc fish sauce owes its deep, fragrant taste to the sea breeze and the island’s anchovies. Huynh Khoa carries on this craft from earlier generations and has long been trusted by local buyers.\nAt the barrel house you can see the wooden fermentation vats, learn how fish sauce is made and taste different protein grades before you buy.",
      "Nước mắm Phú Quốc thơm nồng nhờ gió biển hòa cùng cá cơm đặc sản của đảo. Huỳnh Khoa kế thừa nghề của thế hệ đi trước, được người tiêu dùng tin cậy từ lâu.\nĐến nhà thùng, bạn được xem thùng gỗ ủ chượp, nghe giới thiệu quy trình làm nước mắm và nếm thử các loại đạm trước khi mua.",
      "푸꾸옥 피시소스의 깊고 향긋한 맛은 바닷바람과 섬의 멸치에서 나옵니다. Huỳnh Khoa는 앞 세대의 가업을 이어 오며 오랫동안 소비자의 신뢰를 받아 왔습니다.\n숙성장에서는 나무 발효 통을 직접 보고, 제조 과정을 듣고, 구매 전에 등급별로 맛볼 수 있습니다.",
      "富国岛鱼露浓郁芬芳，源自海风与岛上特产的鳀鱼。Huỳnh Khoa 传承上一辈的手艺，长期深受消费者信赖。\n在酿造坊里，您可以看到木制发酵桶，了解鱼露的制作过程，并在购买前品尝不同等级的鱼露。",
      "Насыщенный аромат соуса Фукуока рождается из морского ветра и местного анчоуса. Huỳnh Khoa продолжает ремесло старших поколений, и покупатели давно ему доверяют.\nНа фабрике можно увидеть деревянные бочки для брожения, узнать, как делают рыбный соус, и попробовать соус разной крепости перед покупкой."),
    signature: L("— Huynh Khoa fish sauce house","— Nhà thùng Huỳnh Khoa","— Huỳnh Khoa 숙성장","— Huỳnh Khoa 鱼露坊","— Фабрика Huỳnh Khoa")
  },
  highlights: [
    { icon:"barrel", title:L("Barrel house visit","숙성장 견학","Tham quan nhà thùng","参观酿造坊","Экскурсия по фабрике"),
      text:L("About 30–60 minutes, with a tasting; usually free of charge (per localvietnam.com) — please call to confirm.","약 30~60분, 시음 포함. 보통 무료입니다(localvietnam.com 기준) — 전화로 확인해 주세요.","Khoảng 30–60 phút, có nếm thử; thường miễn phí (theo localvietnam.com) — vui lòng gọi xác nhận.","约 30–60 分钟，含品尝；通常免费（据 localvietnam.com），请致电确认。","Около 30–60 минут с дегустацией; обычно бесплатно (по данным localvietnam.com) — уточните по телефону.") },
    { icon:"gift", title:L("Gift boxes","선물 세트","Hộp quà đặc sản","特产礼盒","Подарочные наборы"),
      text:L("Fish sauce, pepper and island specialities, boxed to take home.","피시소스, 후추, 섬 특산품을 선물용으로.","Nước mắm, tiêu và đặc sản đảo đóng hộp làm quà.","鱼露、胡椒和海岛特产，装盒带回家。","Рыбный соус, перец и деликатесы острова — в подарочной упаковке.") },
    { icon:"pepper", title:L("Phu Quoc pepper","푸꾸옥 후추","Tiêu Phú Quốc","富国岛胡椒","Перец Фукуока"),
      text:L("Ripe red pepper, white pepper and ground black pepper.","완숙 후추, 백후추, 분쇄 흑후추.","Tiêu chín, tiêu sọ và tiêu xay.","红熟胡椒、白胡椒和黑胡椒粉。","Спелый красный, белый и молотый чёрный перец.") }
  ],
  phone: "093 99 77 522", phoneLink: "+84939977522",
  email: "khoa.nguyenhuynhanh@gmail.com", website: "https://nuocmamhuynhkhoa.com/",
  address: L("Duong Dong bypass road, Group 5, Suoi Da quarter, Duong To, Phu Quoc","Đường tránh Dương Đông, Tổ 5, KP Suối Đá, Dương Tơ, Phú Quốc","푸꾸옥 즈엉터 수오이다 5조, 즈엉동 우회도로","富国岛阳泗 Suối Đá 街区 5 组，阳东绕城路","объездная дорога Зыонгдонга, группа 5, квартал Суойда, Зыонгто, Фукуок"),
  mapsLink: "https://www.google.com/maps/place/data=!4m2!3m1!1s0x31a78dc14f159d47:0x9e5f0e3b7198826f",
  mapsEmbed: "https://maps.google.com/maps?q=N%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%20Hu%E1%BB%B3nh%20Khoa%20Ph%C3%BA%20Qu%E1%BB%91c&z=14&output=embed",
  reviewsLink: "https://www.google.com/maps/place/data=!4m2!3m1!1s0x31a78dc14f159d47:0x9e5f0e3b7198826f",
  hours: { open:"07:30", close:"17:30", days: L("Daily (please call to confirm)","매일 (전화 확인 권장)","Mỗi ngày (nên gọi xác nhận)","每天（建议致电确认）","Ежедневно (уточняйте по телефону)") },
  slotMinutes: 30, lastBookingBeforeClose: 60, usdRate: 26300,
  categories: [
    { id:"fs", name:L("Cot nhi fish sauce","꼿니 피시소스","Nước mắm cốt nhĩ","头道鱼露","Рыбный соус «кот ньи»"),
      note:L("“Cot nhi” is the first, richest draw from the barrel. The degree (°N) shows the protein content — higher is richer.","‘꼿니’는 통에서 처음 받아 낸 가장 진한 원액이며, 도수(°N)는 단백질 함량을 뜻합니다. 높을수록 진합니다.","“Cốt nhĩ” là nước cốt đầu tiên, đậm nhất từ thùng. Độ đạm (°N) càng cao, nước mắm càng đậm.","“头道”是从桶中最先滴出、最浓的鱼露；度数（°N）代表蛋白质含量，越高越浓。","«Кот ньи» — первый, самый насыщенный отбор из бочки. Градус (°N) — содержание белка: чем выше, тем насыщеннее.") },
    { id:"sp", name:L("Phu Quoc specialities","푸꾸옥 특산품","Đặc sản Phú Quốc","富国岛特产","Деликатесы Фукуока") }
  ],
  items: [
    { id:"f40b", category:"fs", price:null, featured:true, image:"assets/c-cotnhi.webp", name:fs(40), unit:BOX6, desc:FSD },
    { id:"f40l", category:"fs", price:null, name:fs(40), unit:B520, desc:FSD },
    { id:"f43s", category:"fs", price:null, name:fs(43), unit:L("80 ml bottle","80ml 병","Chai 80ml","80 毫升瓶装","Бутылка 80 мл"), desc:FSD },
    { id:"f43b", category:"fs", price:null, name:fs(43), unit:BOX6, desc:FSD },
    { id:"f43l", category:"fs", price:null, name:fs(43), unit:B520, desc:FSD },
    { id:"f43x", category:"fs", price:null, name:fs(43), unit:L("1000 ml bottle","1000ml 병","Chai 1000ml","1000 毫升瓶装","Бутылка 1000 мл"), desc:FSD },
    { id:"f45b", category:"fs", price:null, name:fs(45), unit:BOX6, desc:FSD },
    { id:"f45l", category:"fs", price:null, name:fs(45), unit:B520, desc:FSD },
    { id:"gift", category:"sp", price:null, name:L("Phu Quoc spice gift box – Extra special","푸꾸옥 향신료 선물 세트 – 스페셜","Hộp quà gia vị Phú Quốc – Siêu đặc biệt","富国岛调味礼盒——特级","Подарочный набор специй Фукуока «Особый»"), desc:L("Gift box","선물 세트","Hộp quà","礼盒","Подарочная коробка") },
    { id:"cathu", category:"sp", price:null, featured:true, image:"assets/c-dried.webp", name:L("Salted mackerel in fish sauce","피시소스에 절인 삼치","Cá thu muối dùi – ngâm nước mắm Phú Quốc","鱼露腌马鲛鱼","Скумбрия, засоленная в рыбном соусе"), desc:L("Traditional salted fish","전통 염장 생선","Cá muối truyền thống","传统咸鱼","Традиционная солёная рыба") },
    { id:"tieuchin", category:"sp", price:null, featured:true, image:"assets/c-pepper.webp", name:L("Phu Quoc ripe pepper","푸꾸옥 완숙 후추","Tiêu chín Phú Quốc","富国岛红熟胡椒","Спелый перец Фукуока"), unit:L("500 g box","500g 상자","Hộp 500g","500 克盒装","Коробка 500 г"), desc:L("Red, fully ripened peppercorns","붉게 익은 후추알","Hạt tiêu chín đỏ","完全成熟的红胡椒粒","Красные спелые горошины") },
    { id:"tieuso5", category:"sp", price:null, name:L("Phu Quoc white pepper","푸꾸옥 백후추","Tiêu sọ Phú Quốc","富国岛白胡椒","Белый перец Фукуока"), unit:L("500 g box","500g 상자","Hộp 500g","500 克盒装","Коробка 500 г"), desc:L("Hulled white peppercorns","껍질을 벗긴 백후추","Tiêu bóc vỏ","去皮白胡椒","Очищенные белые горошины") },
    { id:"tieuso6", category:"sp", price:null, name:L("Phu Quoc white pepper","푸꾸옥 백후추","Tiêu sọ Phú Quốc","富国岛白胡椒","Белый перец Фукуока"), unit:L("60 g bag","60g 봉지","Túi 60g","60 克袋装","Пакет 60 г"), desc:L("Hulled white peppercorns","껍질을 벗긴 백후추","Tiêu bóc vỏ","去皮白胡椒","Очищенные белые горошины") },
    { id:"tieuxay", category:"sp", price:null, name:L("Phu Quoc ground black pepper","푸꾸옥 분쇄 흑후추","Tiêu xay Phú Quốc","富国岛黑胡椒粉","Молотый чёрный перец Фукуока"), unit:L("100 g","100g","100g","100 克","100 г"), desc:L("Ready to use","바로 사용 가능","Dùng ngay","开袋即用","Готов к использованию") },
    { id:"tieuduong", category:"sp", price:null, name:L("Sugar-glazed ripe pepper","설탕에 졸인 완숙 후추","Tiêu chín ngào đường","糖渍红胡椒","Спелый перец в сахаре"), desc:L("Island speciality","섬 특산품","Đặc sản đảo","海岛特产","Деликатес острова") },
    { id:"ruoc", category:"sp", price:null, name:L("Shrimp paste stir-fried with lemongrass & chilli","레몬그라스·고추 새우젓 볶음","Mắm ruốc xào sả ớt","香茅辣椒炒虾酱","Креветочная паста с лемонграссом и чили"), desc:L("Island speciality","섬 특산품","Đặc sản đảo","海岛特产","Деликатес острова") },
    { id:"muoitieu", category:"sp", price:null, name:L("Huynh Khoa pepper salt","Huỳnh Khoa 후추 소금","Muối tiêu Huỳnh Khoa","Huỳnh Khoa 胡椒盐","Перечная соль Huỳnh Khoa"), unit:L("100 g","100g","100g","100 克","100 г"), desc:L("House seasoning","자체 양념","Gia vị nhà làm","自家调味料","Фирменная приправа") }
  ],
  showMenuList: true,
  gallery: [
    { src:"assets/g1.webp", alt:L("Wooden barrels","나무 통","Thùng gỗ","木桶","Деревянные бочки") },
    { src:"assets/g2.webp", alt:L("Fresh anchovies","신선한 멸치","Cá cơm tươi","新鲜鳀鱼","Свежий анчоус") },
    { src:"assets/g3.webp", alt:L("Dried fish","말린 생선","Cá khô","鱼干","Сушёная рыба") },
    { src:"assets/g4.webp", alt:L("Fermentation barrels","발효 통","Thùng ủ","发酵桶","Бочки для брожения") },
    { src:"assets/g5.webp", alt:L("Fishing boats at dawn","새벽의 어선","Thuyền cá lúc bình minh","黎明的渔船","Рыбацкие лодки на рассвете") },
    { src:"assets/g6.webp", alt:L("Peppercorns","후추","Hạt tiêu","胡椒粒","Перец горошком") }
  ],
  booking: { mode: "local", workerUrl: "", telegramBotToken: "", telegramChatId: "", maxPeople: 60 },
  i18n: {
    en:{ price_note:"The website lists every product as “price on request”, so this sample shows no prices." },
    vi:{ price_note:"Web của cơ sở ghi mọi sản phẩm “Liên hệ”, nên trang mẫu không tự đặt giá." },
    ko:{ price_note:"웹사이트에 모든 제품이 ‘가격 문의’로 되어 있어 샘플 페이지에도 가격을 넣지 않았습니다." },
    zh:{ price_note:"官网所有产品均标注“价格请咨询”，因此示例页面不标价格。" },
    ru:{ price_note:"На сайте у всех товаров указано «цена по запросу», поэтому в образце цен нет." }
  },
  designer: { zalo: { url:"https://zalo.me/0337031198", label:"0337 031 198", qr:"designer-zalo.png" } },
  publicUrl: "https://huydoan06-star.github.io/demo-phu-quoc/nuoc-mam-huynh-khoa/"
};
})();
