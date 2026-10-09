/* Phu Quoc Day Spa · TRANG MẪU (chưa phải trang chính thức của spa).
 * Nguồn: spaphuquoc.com (/, /pages/about-us, /collections/massage-body) 09/10/2026. Từng dịch vụ web ghi "Contact";
 * chỉ có giá gói công khai: Body massage & Baby massage "From $10", Combined massage "From $12". */
(function(){
function L(en,ko,vi,zh,ru){ return {en:en,ko:ko,vi:vi,zh:zh,ru:ru}; }
var D60 = L("60–120 min","60~120분","60–120 phút","60–120 分钟","60–120 мин");
window.SITE_CONFIG = {
  slug: "phu-quoc-day-spa", kind: "spa", mark: "flower",
  name: "Phu Quoc Day Spa", shortName: "Phu Quoc Day Spa",
  langs: ["en","ko","vi","zh","ru"], fallbackLang: "en",
  refPrefix: "PQ",
  heroTitle: L("Phu Quoc Day Spa<br><em>Relax · Rebalance · Recharge</em>","Phu Quoc Day Spa<br><em>Relax · Rebalance · Recharge</em>","Phu Quoc Day Spa<br><em>Relax · Rebalance · Recharge</em>","Phu Quoc Day Spa<br><em>Relax · Rebalance · Recharge</em>","Phu Quoc Day Spa<br><em>Relax · Rebalance · Recharge</em>"),
  eyebrow: L("Massage & spa · Duong Dong","마사지 & 스파 · 즈엉동","Massage & spa · Dương Đông","按摩与水疗 · 阳东","Массаж и спа · Зыонгдонг"),
  tagline: L(
    "Hot stone, Thai and our special Phu Quoc massage in a quiet lane off Tran Hung Dao. Book ahead and the round trip is on us.",
    "쩐흥다오 거리 조용한 골목에서 즐기는 핫스톤, 타이 마사지, 푸꾸옥 스페셜 마사지. 미리 예약하시면 왕복 픽업이 무료입니다.",
    "Đá nóng, massage Thái và massage đặc biệt Phú Quốc trong con hẻm yên tĩnh trên đường Trần Hưng Đạo. Đặt trước được đưa đón hai chiều miễn phí.",
    "在陈兴道路安静的小巷里，享受热石、泰式与富国岛特色按摩。提前预约即享免费往返接送。",
    "Горячие камни, тайский и фирменный массаж Фукуок в тихом переулке у улицы Чанхынгдао. При записи заранее — бесплатный трансфер туда и обратно."),
  heroImage: "assets/hero.webp", heroImageMobile: "assets/hero-m.webp", heroFocus: "50% 60%",
  about: {
    image: "assets/intro.webp",
    title: L("Quiet lane, skilled hands","골목 안의 고요함, 숙련된 손길","Hẻm yên tĩnh, tay nghề vững","静巷之中，娴熟手法","Тихий переулок, умелые руки"),
    text: L(
      "Phu Quoc Day Spa sits in the heart of Duong Dong, in a lane off Tran Hung Dao Street — away from the traffic noise.\nWith 30 body and foot massage beds and 10 hair-washing beds, we welcome solo travellers, couples and large tour groups alike.",
      "Phu Quoc Day Spa는 즈엉동 중심, 쩐흥다오 거리의 골목 안에 있어 차 소리 없이 조용합니다.\n바디·풋 마사지 베드 30개와 헤드스파 베드 10개를 갖추고 있어 혼자 오신 분, 커플, 단체 여행객 모두 편하게 이용하실 수 있습니다.",
      "Phu Quoc Day Spa nằm giữa trung tâm Dương Đông, trong hẻm đường Trần Hưng Đạo — tránh được tiếng ồn xe cộ.\nVới 30 giường massage body và chân cùng 10 giường gội đầu, spa đón cả khách lẻ, cặp đôi lẫn đoàn du lịch đông người.",
      "Phu Quoc Day Spa 位于阳东市中心陈兴道路的小巷内，远离车流喧嚣。\n店内设有 30 张身体与足部按摩床和 10 张洗头床，无论单人、情侣还是大型旅行团都能接待。",
      "Phu Quoc Day Spa находится в центре Зыонгдонга, в переулке у улицы Чанхынгдао — вдали от шума машин.\n30 кушеток для массажа тела и стоп и 10 мест для мытья головы: рады и одиночным гостям, и парам, и большим туристическим группам."),
    signature: L("— Phu Quoc Day Spa","— Phu Quoc Day Spa","— Phu Quoc Day Spa","— Phu Quoc Day Spa","— Phu Quoc Day Spa")
  },
  highlights: [
    { icon:"car", title:L("Free pick-up & drop-off","무료 왕복 픽업","Đưa đón miễn phí 2 chiều","免费往返接送","Бесплатный трансфер"),
      text:L("Book in advance and we collect you from your hotel and take you back — plus a free herbal foot soak.","미리 예약하시면 호텔 왕복 픽업과 허브 족욕을 무료로 드립니다.","Đặt trước: xe đón tại khách sạn và đưa về, kèm ngâm chân thảo dược miễn phí.","提前预约：酒店免费往返接送，并赠送草药泡脚。","При записи заранее заберём из отеля и отвезём обратно, а ещё — бесплатная травяная ванночка для ног.") },
    { icon:"group", title:L("Groups welcome","단체 환영","Đón khách đoàn","欢迎团体","Принимаем группы"),
      text:L("30 massage beds and 10 hair-washing beds — room for the whole family or tour group.","마사지 베드 30개, 헤드스파 베드 10개 — 가족·단체도 함께.","30 giường massage, 10 giường gội — đủ chỗ cho cả gia đình hay đoàn.","30 张按摩床、10 张洗头床，全家或整团都能安排。","30 массажных кушеток и 10 мест для мытья головы — хватит всей семье или группе.") },
    { icon:"clock", title:L("Open late","늦게까지 영업","Mở cửa đến khuya","营业至深夜","Работаем допоздна"),
      text:L("Every day 08:00 – 23:30, after the night market.","매일 08:00~23:30, 야시장 구경 후에도.","Mỗi ngày 08:00 – 23:30, đi chợ đêm về vẫn kịp.","每天 08:00–23:30，逛完夜市也来得及。","Ежедневно 08:00–23:30 — успеете после ночного рынка.") }
  ],
  phone: "+84 705 800 686", phoneLink: "+84705800686",
  email: "phuquocdayspa@gmail.com", website: "https://spaphuquoc.com/",
  address: L("100/3 Tran Hung Dao, Quarter 7, Duong Dong, Phu Quoc","푸꾸옥 즈엉동 7구 쩐흥다오 100/3","100/3 Trần Hưng Đạo, KP7, Dương Đông, Phú Quốc","富国岛阳东第 7 街区陈兴道路 100/3 号","ул. Чанхынгдао, 100/3, квартал 7, Зыонгдонг, Фукуок"),
  mapsLink: "https://www.google.com/maps/place/data=!4m2!3m1!1s0x31a78c5a296ff0df:0xf437ca17e6ffdf0b",
  mapsEmbed: "https://maps.google.com/maps?q=Phu%20Quoc%20Day%20Spa%20100%2F3%20Tran%20Hung%20Dao&z=15&output=embed",
  reviewsLink: "https://www.google.com/maps/place/data=!4m2!3m1!1s0x31a78c5a296ff0df:0xf437ca17e6ffdf0b",
  hours: { open:"08:00", close:"23:30", days: L("Daily","매일","Mỗi ngày","每天","Ежедневно") },
  slotMinutes: 30, lastBookingBeforeClose: 90, usdRate: 26300,
  categories: [
    { id:"body", name:L("Body massage","바디 마사지","Massage body","全身按摩","Массаж тела"),
      note:L("Public price: body massage from US$10 (60–120 min). Exact price per treatment on request.","공개 가격: 바디 마사지 US$10부터(60~120분). 항목별 정확한 가격은 문의해 주세요.","Giá công khai: massage body từ US$10 (60–120 phút). Giá từng liệu trình xin liên hệ.","公开价格：全身按摩 10 美元起（60–120 分钟）。各项目具体价格请咨询。","Открытая цена: массаж тела от 10 US$ (60–120 мин). Точную цену процедуры уточняйте.") },
    { id:"combo", name:L("Combined & foot massage","콤비 & 풋 마사지","Massage kết hợp & chân","组合按摩与足部按摩","Комбинированный массаж и массаж стоп"),
      note:L("Public price: combined massage from US$12 (60–120 min).","공개 가격: 콤비 마사지 US$12부터(60~120분).","Giá công khai: massage kết hợp từ US$12 (60–120 phút).","公开价格：组合按摩 12 美元起（60–120 分钟）。","Открытая цена: комбинированный массаж от 12 US$ (60–120 мин).") },
    { id:"kids", name:L("Children’s massage","어린이 마사지","Massage cho bé","儿童按摩","Детский массаж"),
      note:L("Public price: from US$10.","공개 가격: US$10부터.","Giá công khai: từ US$10.","公开价格：10 美元起。","Открытая цена: от 10 US$.") },
    { id:"beauty", name:L("Hair, face & nails","헤드스파 · 페이셜 · 네일","Gội đầu, da mặt & móng","洗头、面部与美甲","Волосы, лицо и ногти") }
  ],
  items: [
    { id:"aroma", category:"body", image:"assets/c-body.webp", price:null, fromUsd:10, unit:D60,
      name:L("Aromatherapy body massage","아로마 바디 마사지","Massage body tinh dầu thơm","芳香精油全身按摩","Массаж тела с ароматическими маслами"),
      desc:L("Soothing strokes with aromatic oils to melt away a long day.","아로마 오일로 하루의 피로를 부드럽게 풀어 드립니다.","Tinh dầu thơm cùng động tác êm, xua tan mệt mỏi sau một ngày dài.","芳香精油配合舒缓手法，消除一天的疲惫。","Мягкие движения с ароматическими маслами снимают усталость долгого дня.") },
    { id:"aloe", category:"body", card:false, price:null, fromUsd:10, unit:D60,
      name:L("Aloe vera body massage","알로에 베라 바디 마사지","Massage body nha đam","芦荟全身按摩","Массаж тела с алоэ вера"),
      desc:L("Cooling aloe vera — lovely after a day in the sun.","시원한 알로에 베라, 햇볕 아래 하루를 보낸 뒤에 좋아요.","Nha đam mát dịu, hợp sau một ngày nắng.","清凉芦荟，晒了一天太阳后尤其舒服。","Освежающее алоэ вера — то, что нужно после дня на солнце.") },
    { id:"stone", category:"body", image:"assets/c-stone.webp", price:null, fromUsd:10, unit:D60,
      name:L("Hot stone massage","핫스톤 마사지","Massage đá nóng","热石按摩","Массаж горячими камнями"),
      desc:L("Warm stones loosen tight back and shoulder muscles.","따뜻한 돌이 뭉친 등과 어깨 근육을 풀어 줍니다.","Đá ấm làm mềm cơ lưng, vai căng cứng.","温热石头放松紧绷的背部和肩部肌肉。","Тёплые камни расслабляют зажатые мышцы спины и плеч.") },
    { id:"thai", category:"body", card:false, price:null, fromUsd:10, unit:D60,
      name:L("Thai massage","타이 마사지","Massage Thái","泰式按摩","Тайский массаж"),
      desc:L("Acupressure and assisted stretching.","지압과 스트레칭.","Bấm huyệt kết hợp kéo giãn.","穴位按压配合拉伸。","Акупрессура и растяжка.") },
    { id:"special", category:"body", card:false, price:null, fromUsd:10, unit:D60,
      name:L("Special Phu Quoc massage","푸꾸옥 스페셜 마사지","Massage đặc biệt Phú Quốc","富国岛特色按摩","Фирменный массаж «Фукуок»"),
      desc:L("The spa’s signature deep-tissue massage.","스파의 대표 딥티슈 마사지.","Massage mô sâu đặc trưng của spa.","本店招牌深层按摩。","Фирменный глубокий массаж спа.") },
    { id:"scrub", category:"combo", card:false, price:null, fromUsd:12, unit:D60,
      name:L("Full-body exfoliating massage","전신 스크럽 마사지","Massage tẩy tế bào chết toàn thân","全身去角质按摩","Массаж с пилингом всего тела"),
      desc:L("Exfoliation followed by a relaxing massage.","각질 제거 후 편안한 마사지.","Tẩy tế bào chết rồi massage thư giãn.","先去角质，再做放松按摩。","Пилинг, затем расслабляющий массаж.") },
    { id:"foot", category:"combo", image:"assets/c-foot.webp", price:null, fromUsd:12, unit:D60,
      name:L("Foot massage","발 마사지","Massage chân","足部按摩","Массаж стоп"),
      desc:L("Our guests’ favourite after a day of walking.","많이 걸은 날, 손님들이 가장 많이 찾는 마사지.","Món khách hay chọn nhất sau một ngày đi bộ nhiều.","走了一天路后，客人最爱的项目。","Любимая процедура гостей после дня прогулок.") },
    { id:"neck", category:"combo", card:false, price:null, fromUsd:12, unit:D60,
      name:L("Neck & shoulder massage","목·어깨 마사지","Massage cổ vai gáy","肩颈按摩","Массаж шеи и плеч"),
      desc:L("Targets stiffness in the neck and shoulders.","목과 어깨 결림을 집중 케어.","Tập trung vùng cổ vai gáy mỏi cứng.","针对肩颈僵硬。","Снимает скованность шеи и плеч.") },
    { id:"hairface", category:"combo", card:false, price:null, fromUsd:12, unit:D60,
      name:L("Hair wash, facial massage, mask & neck-shoulder","헤드스파 + 얼굴 마사지 + 마스크 + 목·어깨","Gội đầu, massage mặt, đắp mặt nạ & cổ vai","洗头 + 面部按摩 + 面膜 + 肩颈","Мытьё головы, массаж лица, маска и шея-плечи"),
      desc:L("A head-to-shoulders combination.","머리부터 어깨까지 한 번에.","Combo từ đầu đến vai.","从头到肩的组合护理。","Комплекс от головы до плеч.") },
    { id:"kidbody", category:"kids", card:false, price:null, fromUsd:10, unit:D60,
      name:L("Children’s body massage","어린이 바디 마사지","Massage body cho bé","儿童全身按摩","Детский массаж тела"),
      desc:L("Gentle pressure for young guests.","어린이를 위한 부드러운 압.","Lực nhẹ dành cho bé.","适合小朋友的轻柔力度。","Мягкое давление для маленьких гостей.") },
    { id:"kidfoot", category:"kids", card:false, price:null, fromUsd:10, unit:D60,
      name:L("Children’s foot massage","어린이 발 마사지","Massage chân cho bé","儿童足部按摩","Детский массаж стоп"),
      desc:L("A short, gentle foot massage.","짧고 부드러운 발 마사지.","Massage chân nhẹ nhàng.","温和的足部按摩。","Мягкий массаж стоп.") },
    { id:"hair", category:"beauty", image:"assets/c-hair.webp", price:null,
      name:L("Therapeutic hair washing","헤드스파(두피 마사지 샴푸)","Gội đầu dưỡng sinh","养生洗头","Оздоровительное мытьё головы"),
      desc:L("Vietnamese-style hair wash with scalp massage, for men and women.","남녀 모두를 위한 베트남식 두피 마사지 샴푸.","Gội đầu kiểu Việt kèm massage da đầu, cho cả nam và nữ.","越式洗头配头皮按摩，男女皆宜。","Мытьё головы по-вьетнамски с массажем кожи головы — для мужчин и женщин.") },
    { id:"facial", category:"beauty", image:"assets/c-facial.webp", price:null,
      name:L("Facial mask & exfoliation","페이셜 마스크 & 각질 케어","Đắp mặt nạ & tẩy da chết mặt","面膜与面部去角质","Маска и пилинг лица"),
      desc:L("Cleansing, exfoliation and a soothing mask.","클렌징, 각질 제거, 진정 마스크.","Làm sạch, tẩy da chết và mặt nạ dịu da.","清洁、去角质和舒缓面膜。","Очищение, пилинг и успокаивающая маска.") },
    { id:"nail", category:"beauty", image:"assets/c-nail.webp", price:null,
      name:L("Nail care","네일 케어","Chăm sóc móng","美甲护理","Уход за ногтями"),
      desc:L("Manicure, pedicure and polish.","매니큐어, 페디큐어, 컬러링.","Làm móng tay, móng chân, sơn móng.","修手、修脚和涂甲。","Маникюр, педикюр и покрытие.") }
  ],
  showMenuList: true,
  gallery: [
    { src:"assets/g1.webp", alt:L("White plumeria","하얀 플루메리아","Hoa sứ trắng","白色鸡蛋花","Белая плюмерия") },
    { src:"assets/g2.webp", alt:L("Plumeria close-up","플루메리아","Hoa sứ","鸡蛋花特写","Плюмерия крупным планом") },
    { src:"assets/g3.webp", alt:L("Hair washing","헤드스파","Gội đầu dưỡng sinh","养生洗头","Мытьё головы") },
    { src:"assets/g4.webp", alt:L("Hot stones","핫스톤","Đá nóng","热石","Горячие камни") },
    { src:"assets/g5.webp", alt:L("Massage oil","마사지 오일","Dầu massage","按摩油","Массажное масло") },
    { src:"assets/g6.webp", alt:L("Candles and towels","캔들과 타월","Nến và khăn","蜡烛与毛巾","Свечи и полотенца") }
  ],
  booking: { mode: "local", workerUrl: "", telegramBotToken: "", telegramChatId: "", maxPeople: 30, pickup: true },
  i18n: {
    en:{ services_title:"Treatments", price_from_src:"Public ‘from’ price on the spa’s website; exact price on request" },
    ko:{ services_title:"마사지 메뉴", price_from_src:"스파 웹사이트에 공개된 최저가이며, 정확한 가격은 문의해 주세요" },
    vi:{ services_title:"Dịch vụ", price_from_src:"Giá 'từ' công khai trên web của spa; giá chính xác xin liên hệ" },
    zh:{ services_title:"服务项目", price_from_src:"水疗官网公开的起价，具体价格请咨询" },
    ru:{ services_title:"Процедуры", price_from_src:"Минимальная цена с сайта спа; точную цену уточняйте" }
  },
  designer: { zalo: { url:"https://zalo.me/0337031198", label:"0337 031 198", qr:"designer-zalo.png" } },
  publicUrl: "https://huydoan06-star.github.io/demo-phu-quoc/phu-quoc-day-spa/"
};
})();
