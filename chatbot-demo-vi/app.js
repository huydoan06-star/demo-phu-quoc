/* Bilingual (VI/EN) scripted chatbot demo. No API calls: every reply is pre-written in both languages.
   Language = toggle in chat header, or auto-detected from what the customer types. */
(function () {
  "use strict";
  var C = window.SITE_CONFIG || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var L = function (o, lg) { return o && typeof o === "object" && !Array.isArray(o) ? (o[lg || lang] || o.vi || o.en || "") : o; };
  var brand = C.brand || "Support";
  var P = C.pricing || {};
  var plans = C.plans || [];
  var contact = C.contact || {};
  var TIMES = C.consultTimes || { vi: ["Sáng", "Chiều", "Tối"], en: ["Morning", "Afternoon", "Evening"] };
  var web = plans[0] || { name: { vi: "Chatbot Website", en: "Website Chatbot" } };
  var lang = C.defaultLang === "en" ? "en" : "vi";

  function priceLabel(lg) { return L(P.label, lg) || (lg === "en" ? "Contact us for a quote" : "Liên hệ để báo giá"); }
  function draftTag(lg) { return P.draft ? '<span class="tag">DRAFT · ' + esc(priceLabel(lg)) + "</span>\n" : ""; }

  /* ---------- static copy ---------- */
  $$("[data-brand]").forEach(function (el) { el.textContent = brand; });
  $$("[data-pricing-note]").forEach(function (el) { el.textContent = (P.draft ? "DRAFT · " : "") + L(P.note, "vi"); el.style.display = P.note ? "" : "none"; });
  function priceLine(lg) { return lg === "en" ? "<b>" + esc(L(web.name, "en")) + "</b>: " + esc(L(P.setup, "en")) + " one-time setup + <b>" + esc(L(P.monthly, "en")) + "/month</b>." : "<b>" + esc(L(web.name, "vi")) + "</b>: " + esc(L(P.setup, "vi")) + " phí cài đặt (một lần) + <b>" + esc(L(P.monthly, "vi")) + "/tháng</b>."; }
  function noteLine(lg) { return P.note ? "\n\n<i>" + esc(L(P.note, lg)) + "</i>" : ""; }

  function contactHTML(lg) {
    var p = [];
    if (contact.zaloPhone) p.push('Zalo <a href="https://zalo.me/' + esc(contact.zaloPhone) + '" target="_blank" rel="noopener">' + esc(contact.zaloName ? contact.zaloName + " · " : "") + esc(contact.zaloPhone) + "</a>");
    if (contact.telegram) p.push('Telegram <a href="https://t.me/' + esc(contact.telegram) + '" target="_blank" rel="noopener">@' + esc(contact.telegram) + "</a>");
    if (contact.email) p.push('<a href="mailto:' + esc(contact.email) + '">' + esc(contact.email) + "</a>");
    return p.join(" · ");
  }
  var cl = $("#contactLine");
  if (cl) { var ch = contactHTML("vi"); cl.innerHTML = ch ? "Muốn nhắn trực tiếp? " + ch : ""; }

  var plansEl = $("#plans");
  if (plansEl) plansEl.innerHTML = plans.map(function (p) {
    return '<article class="plan' + (p.featured ? " featured" : "") + '">' +
      (p.featured ? '<span class="badge">Phổ biến</span>' : "") +
      (P.draft ? '<span class="draft">DRAFT</span>' : "") +
      "<h3>" + esc(L(p.name, "vi")) + '</h3><p class="blurb">' + esc(L(p.blurb, "vi")) + "</p>" +
      (p.price
        ? '<div class="price"><span class="big">' + esc(L(P.monthly, "vi")) + '</span><span class="per">/ tháng</span></div><p class="setup">+ <b>' + esc(L(P.setup, "vi")) + "</b> phí cài đặt (một lần)</p>"
        : '<div class="price"><span class="big tbd">' + esc(priceLabel("vi")) + '</span></div><p class="setup">Báo giá theo kênh. ' + esc(L(P.note, "vi")) + "</p>") +
      "<ul>" + ((p.features && p.features.vi) || []).map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>" +
      '<button class="btn ' + (p.featured ? "btn-pri" : "btn-ghost") + '" data-consult>Đặt lịch tư vấn miễn phí</button></article>';
  }).join("");

  /* ---------- mock sheet ---------- */
  var KEY = "chatbotDemoBookings.vi.v1";
  var rowsEl = $("#rows");
  var samples = [
    { t: "Mẫu", name: "Khách mẫu A (mẫu)", contact: "0900 000 000", time: "Tối (18h–20h)", lg: "VI", src: "Zalo" },
    { t: "Mẫu", name: "Sample guest B (mẫu)", contact: "guest@example.com", time: "Morning (9–12)", lg: "EN", src: "Messenger" }
  ];
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } }
  function save(list) { try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) {} }
  function renderSheet(flashLast) {
    var mine = load();
    var all = samples.map(function (r) { return [r, "sample"]; }).concat(mine.map(function (r, i) { return [r, flashLast && i === mine.length - 1 ? "new" : ""]; }));
    rowsEl.innerHTML = all.map(function (x, i) {
      var r = x[0];
      return '<tr class="' + x[1] + '"><td class="rn">' + (i + 2) + "</td><td>" + esc(r.t) + "</td><td>" + esc(r.name) + "</td><td>" + esc(r.contact) + "</td><td>" + esc(r.time) + "</td><td>" + esc(r.lg) + '</td><td><span class="src">' + esc(r.src) + "</span></td></tr>";
    }).join("");
  }
  function stamp() {
    var d = new Date(), z = function (n) { return (n < 10 ? "0" : "") + n; };
    return z(d.getDate()) + "/" + z(d.getMonth() + 1) + "/" + d.getFullYear() + " " + z(d.getHours()) + ":" + z(d.getMinutes());
  }
  function addBooking(b) {
    var st = $("#sheetStatus");
    st.textContent = "● Đang lưu…"; st.classList.add("busy");
    setTimeout(function () {
      var list = load(); list.push({ t: stamp(), name: b.name, contact: b.contact, time: b.time, lg: b.lg, src: "Chat website" }); save(list);
      renderSheet(true);
      st.textContent = "● Vừa đồng bộ"; st.classList.remove("busy");
    }, 700);
  }
  renderSheet(false);
  $("#clearRows").addEventListener("click", function () { save([]); renderSheet(false); });

  /* ---------- language detection ---------- */
  var VI_MARKS = /[ăâđêôơưáàảãạắằẳẵặấầẩẫậéèẻẽẹếềểễệíìỉĩịóòỏõọốồổỗộớờởỡợúùủũụứừửữựýỳỷỹỵ]/i;
  var VI_WORDS = /\b(cho (em|minh|toi|anh|chi) hoi|bao nhieu|bn tien|gia ca|dat lich|dat cho|cam on|xin chao|chao (shop|ban|em|anh|chi)|khong|ko|dc|duoc|nhe|nha|vay|the nao|lam sao|tu van|o dau|toi|minh|anh oi|chi oi|em oi|shop oi|a oi)\b/;
  var EN_WORDS = /\b(the|is|are|what|how|much|price|prices|cost|does|you|your|can|book|booking|hello|hi|hey|please|thanks|thank|want|need|open|when|where|english|i|i'm|my|have)\b/;
  function norm(s) { return String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d"); }
  function detect(t) {
    if (VI_MARKS.test(t)) return "vi";
    var n = norm(t);
    if (VI_WORDS.test(n)) return "vi";
    if (EN_WORDS.test(n)) return "en";
    return null;   // unsure (e.g. "ok", emoji, chip with icon only) -> keep current language
  }

  /* ---------- chat UI ---------- */
  var log = $("#log"), chips = $("#chips"), form = $("#form"), input = $("#msg");
  var state = { mode: "idle", b: {} };
  var busy = false;
  var UI = {
    vi: { role: "Trợ lý", status: "Đang trực 24/7", ph: "Nhập tin nhắn…", reset: "Bắt đầu lại", toVi: "🌐 Đã chuyển sang tiếng Việt", autoVi: "🌐 Nhận ra tiếng Việt — trả lời bằng tiếng Việt", autoEn: "🌐 Detected English — replying in English", toEn: "🌐 Switched to English" },
    en: { role: "Assistant", status: "Online · replies instantly", ph: "Type a message…", reset: "Restart chat" }
  };
  function applyLangUI() {
    var u = UI[lang];
    $("#headRole").textContent = u.role; $("#headStatus").textContent = u.status;
    input.placeholder = u.ph; $(".chat-reset").title = u.reset; $(".chat-reset").setAttribute("aria-label", u.reset);
    $$(".lang-tg button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang)); });
    log.setAttribute("lang", lang);
  }
  function scrollLog() { log.scrollTop = log.scrollHeight; }
  function addMsg(html, who, extra) {
    var d = document.createElement("div");
    d.className = "msg " + who + (extra ? " " + extra : "");
    d.innerHTML = html; log.appendChild(d); scrollLog(); return d;
  }
  function setChips(list) {
    chips.innerHTML = "";
    (list || []).forEach(function (c) {
      var b = document.createElement("button");
      b.type = "button"; b.className = "chip"; b.textContent = c;
      b.addEventListener("click", function () { userSays(c); });
      chips.appendChild(b);
    });
  }
  function bot(msgs, chipList, extra) {
    if (!Array.isArray(msgs)) msgs = [msgs];
    busy = true; setChips([]);
    var i = 0;
    (function next() {
      if (i >= msgs.length) { busy = false; setChips(chipList); return; }
      var t = document.createElement("div");
      t.className = "msg bot typing"; t.innerHTML = "<i></i><i></i><i></i>";
      log.appendChild(t); scrollLog();
      var text = msgs[i];
      var delay = Math.min(1200, 400 + text.replace(/<[^>]+>/g, "").length * 8);
      setTimeout(function () { t.remove(); addMsg(text, "bot", i === msgs.length - 1 ? extra : ""); i++; next(); }, delay);
    })();
  }

  /* ---------- scripted replies (every intent in VI and EN) ---------- */
  var CH = {
    vi: { price: "💰 Bảng giá", pk: "📦 Gói dịch vụ", how: "⚙️ Cách hoạt động", book: "📅 Đặt lịch tư vấn miễn phí", sheets: "📊 Google Sheets?", chan: "📱 Messenger / Zalo / Telegram", time: "⏱️ Bao lâu thì xong?", tryEn: "How much is it?", bi: "🌐 Khách nước ngoài?", cancel: "❌ Huỷ đặt lịch", confirm: "✅ Xác nhận", redo: "✏️ Làm lại", showSheet: "📊 Xem bảng tính" },
    en: { price: "💲 Pricing", pk: "📦 Packages", how: "⚙️ How it works", book: "📅 Book a free consult", sheets: "📊 Google Sheets?", chan: "📱 Messenger / Zalo / Telegram", time: "⏱️ How long to set up?", tryEn: "Cho em hỏi giá?", bi: "🌐 Other languages?", cancel: "❌ Cancel booking", confirm: "✅ Confirm", redo: "✏️ Start over", showSheet: "📊 Show me the sheet" }
  };
  function main() { var c = CH[lang]; return [c.price, c.pk, c.how, c.book, c.tryEn]; }
  function after() { var c = CH[lang]; return [c.book, c.how, c.bi]; }
  var addon = plans[1] || { name: { vi: "Thêm kênh", en: "Extra channels" } };

  var R = {
    vi: {
      greet: function () { return [["Xin chào anh/chị! 👋 Em là trợ lý của " + esc(brand) + ".", "Em là bản demo của chatbot dành cho spa, salon, quán ăn, cửa hàng: trả lời khách hỏi giá và nhận đặt lịch 24/7.\n\n🌐 Thử nhắn bằng tiếng Anh (ví dụ “How much is it?”) — em sẽ tự trả lời bằng tiếng Anh, như với khách du lịch ở Phú Quốc."], main()]; },
      pricing: function () { return [[priceLine("vi") + "\n\nĐã gồm: soạn kịch bản theo dịch vụ và giá của quán, trả lời song ngữ Việt – Anh, ghi lịch hẹn vào Google Sheets, cập nhật nội dung hàng tháng." + noteLine("vi"), "Thêm kênh Messenger / Zalo / Telegram thì báo giá riêng. Anh/chị muốn đặt lịch tư vấn miễn phí không ạ?"], [CH.vi.book, CH.vi.pk, CH.vi.chan]]; },
      packages: function () { return [[draftTag("vi") + "Có 2 phần:\n\n<b>1. " + esc(L(web.name, "vi")) + "</b> — " + esc(L(P.setup, "vi")) + " cài đặt + " + esc(L(P.monthly, "vi")) + "/tháng. Bot trên website: trả lời giá, giờ mở cửa, nhận đặt lịch, ghi vào Google Sheets.\n\n<b>2. " + esc(L(addon.name, "vi")) + "</b> — cùng bot đó gắn thêm vào Fanpage, Zalo OA hoặc Telegram (báo giá riêng)." + noteLine("vi"), "Đa số chủ quán bắt đầu với website rồi thêm kênh sau."], [CH.vi.how, CH.vi.book, CH.vi.time]]; },
      how: function () { return [["Quy trình rất gọn:\n\n<b>1.</b> Gọi 15 phút — em hỏi dịch vụ, giá, giờ mở cửa, câu khách hay hỏi.\n<b>2.</b> Em soạn kịch bản bot (Việt + Anh), đúng giọng của quán.\n<b>3.</b> Nối với Google Sheets của quán.\n<b>4.</b> Gắn lên website — em gắn giúp.", "Sau đó khách hỏi, bot trả lời, lịch hẹn tự vào bảng tính. Anh/chị chỉ việc gọi xác nhận."], [CH.vi.time, CH.vi.sheets, CH.vi.book]]; },
      sheets: function () { return [["Mỗi lịch hẹn bot nhận sẽ thành một dòng mới trong Google Sheets của quán: thời gian, tên, SĐT/email, giờ khách muốn đến, ngôn ngữ và kênh (website, Messenger, Zalo, Telegram).", "Muốn xem tận mắt? Đặt thử một lịch với em rồi nhìn bảng <b>Lịch hẹn — Trực tiếp</b> bên dưới nhé. 👇"], [CH.vi.book, CH.vi.price]]; },
      channels: function () { return [["Bot có thể chạy trên:\n• <b>Website</b> của quán\n• <b>Facebook Messenger</b> (Fanpage)\n• <b>Zalo</b> (qua Zalo Official Account)\n• <b>Telegram</b>\n\nCùng câu trả lời, cùng một bảng lịch hẹn. Phần thêm kênh báo giá riêng."], [CH.vi.price, CH.vi.book]]; },
      timeline: function () { return [["Thường khoảng <b>một tuần</b> từ cuộc gọi đầu tiên đến khi chạy thật — nhanh hơn nếu quán đã có sẵn bảng giá và câu hỏi thường gặp."], [CH.vi.book, CH.vi.price]]; },
      ai: function () { return [["Bot chỉ trả lời theo nội dung <b>anh/chị đã duyệt</b> — giá, giờ mở cửa, chính sách. Khách hỏi ngoài phạm vi thì bot xin số điện thoại để quán gọi lại, không tự bịa thông tin về quán."], after()]; },
      contract: function () { return [["Dự kiến trả theo tháng, không ràng buộc dài hạn. Điều khoản cụ thể sẽ chốt khi tư vấn — bảng giá có trong mục Bảng giá."], [CH.vi.book, CH.vi.price]]; },
      bilingual: function () { return [["Đây chính là chế độ song ngữ: khách nhắn tiếng Anh thì bot trả lời tiếng Anh, nhắn tiếng Việt thì trả lời tiếng Việt. Khách cũng có thể bấm <b>VI / EN</b> ở đầu khung chat.", "Câu trả lời hai thứ tiếng được soạn sẵn theo nội dung của quán — bot không dịch máy câu bất kỳ. Cần thêm tiếng khác (Hàn, Trung, Nga…) thì mình trao đổi khi tư vấn."], [CH.vi.tryEn, CH.vi.book]]; },
      contact: function () { var h = contactHTML("vi"); return [["Nhanh nhất là đặt lịch tư vấn miễn phí ngay tại đây — em chỉ hỏi tên, số điện thoại (hoặc email) và giờ tiện." + (h ? "\n\nHoặc nhắn trực tiếp: " + h : "")], [CH.vi.book]]; },
      thanks: function () { return [["Dạ không có gì ạ! Anh/chị cần hỏi thêm gì không?"], main()]; },
      human: function () { return [["Dạ được ạ — sẽ có người thật tư vấn cho anh/chị. Em xin vài thông tin để đặt lịch nhé."], null]; },
      fallback: function () { return [["Dạ, em là bản demo với kịch bản soạn sẵn nên chưa hiểu câu này 🙂\nEm có thể nói về bảng giá, gói dịch vụ, cách hoạt động — hoặc đặt lịch tư vấn miễn phí với người thật."], main()]; }
    },
    en: {
      greet: function () { return [["Hi there! 👋 I'm the " + esc(brand) + " assistant.", "I'm a live demo of the chatbot for spas, salons, restaurants and shops — I answer price questions and take bookings 24/7.\n\n🌐 I reply in English or Vietnamese, matching whatever language the customer writes in."], main()]; },
      pricing: function () { return [[priceLine("en") + "\n\nIncludes: a script built on your services and prices, bilingual Vietnamese–English replies, bookings logged to Google Sheets, and monthly content updates." + noteLine("en"), "Extra channels (Messenger / Zalo / Telegram) are quoted separately. Want to book a free consult?"], [CH.en.book, CH.en.pk, CH.en.chan]]; },
      packages: function () { return [[draftTag("en") + "There are two pieces:\n\n<b>1. " + esc(L(web.name, "en")) + "</b> — " + esc(L(P.setup, "en")) + " setup + " + esc(L(P.monthly, "en")) + "/month. Bot on your website: answers prices and opening hours, takes bookings, logs them to Google Sheets.\n\n<b>2. " + esc(L(addon.name, "en")) + "</b> — the same bot on your Facebook Page, Zalo OA or Telegram (quoted separately)." + noteLine("en"), "Most owners start with the website and add channels later."], [CH.en.how, CH.en.book, CH.en.time]]; },
      how: function () { return [["Here's how it works:\n\n<b>1.</b> 15-min call — we learn your services, prices, hours and common questions.\n<b>2.</b> We write your bot's script (Vietnamese + English) in your tone.\n<b>3.</b> We connect it to your Google Sheet.\n<b>4.</b> We add it to your website for you.", "After that, customers ask, the bot answers, and bookings land in your sheet. You just confirm them."], [CH.en.time, CH.en.sheets, CH.en.book]]; },
      sheets: function () { return [["Every booking the bot takes becomes a new row in your Google Sheet — time, name, phone/email, preferred time, language and channel (website, Messenger, Zalo, Telegram).", "Want to see it? Book a demo consult with me and watch the <b>bookings</b> panel below update. 👇"], [CH.en.book, CH.en.price]]; },
      channels: function () { return [["The bot can run on:\n• <b>Your website</b>\n• <b>Facebook Messenger</b> (your Page)\n• <b>Zalo</b> (via a Zalo Official Account)\n• <b>Telegram</b>\n\nSame answers, one booking sheet. Extra channels are quoted separately."], [CH.en.price, CH.en.book]]; },
      timeline: function () { return [["Usually about <b>a week</b> from our first call to going live — faster if you already have your prices and FAQs written down."], [CH.en.book, CH.en.price]]; },
      ai: function () { return [["Your bot sticks to answers <b>you approve</b> — prices, hours, policies. If a customer asks something outside that, it takes their phone number so you can call back. No made-up answers about your business."], after()]; },
      contract: function () { return [["The plan is meant to be month-to-month, no long lock-in. Exact terms are confirmed on your consult."], [CH.en.book, CH.en.price]]; },
      bilingual: function () { return [["That's the bilingual mode: customers who write in English get English replies; Vietnamese gets Vietnamese. They can also tap <b>VI / EN</b> at the top of the chat.", "Replies in both languages are pre-written from your shop's info — it doesn't machine-translate arbitrary text. Need another language (Korean, Chinese, Russian…)? Ask on your consult."], [CH.en.tryEn, CH.en.book]]; },
      contact: function () { var h = contactHTML("en"); return [["The quickest way is to book a free consult right here — I'll just ask your name, phone (or email) and a good time." + (h ? "\n\nOr message directly: " + h : "")], [CH.en.book]]; },
      thanks: function () { return [["You're welcome! Anything else I can help with?"], main()]; },
      human: function () { return [["Of course — a real person can walk you through it. Let me grab a few details for a free consult."], null]; },
      fallback: function () { return [["Hmm, I'm a demo with a fixed script, so I didn't catch that one. 🙂\nI can tell you about pricing, packages, how it works — or book you a free consult with a real person."], main()]; }
    }
  };

  // matched on lower-cased, accent-stripped text, so VI rules work with or without dấu
  var INTENTS = [
    ["book", /\b(book|consult|appointment|schedule|meeting|call me|sign ?up|get started|interested|dat lich|dat hen|dat cho|giu cho|tu van|hen lich|con cho)\b|📅/],
    ["human", /\b(human|real person|talk to someone|nguoi that|nhan vien|gap chu|noi chuyen voi nguoi)\b/],
    ["bilingual", /\b(english|tieng anh|nuoc ngoai|khach tay|khach du lich|song ngu|dich sang|dich may|phien dich|ngon ngu|language|languages|translat\w*|bilingual|foreign|tourists?|korean|chinese|russian|tieng han|tieng trung|tieng nga)\b|🌐/],
    ["timeline", /\b(how long|timeline|how soon|how fast|bao lau|mat bao lau|may ngay|bao nhieu ngay|khi nao xong)\b|⏱/],
    ["sheets", /\b(google|sheets?|spreadsheet|excel|bang tinh|luu lai|ghi lai|du lieu)\b|📊/],
    ["channels", /\b(facebook|messenger|zalo|telegram|fanpage|fb|website|web|channels?|kenh)\b|📱/],
    ["pricing", /\b(price|prices|pricing|cost|costs|how much|fee|fees|monthly|expensive|cheap|budget|gia|bao nhieu|bn|chi phi|phi|tien|bang gia|re|dat)\b|💲|💰/],
    ["packages", /\b(package|packages|plan|plans|options?|included|features?|goi dich vu|cac goi|goi nao|gom nhung gi)\b|📦/],
    ["contract", /\b(contract|cancel|commitment|trial|refund|lock|hop dong|rang buoc|dung lai|nghi luc nao|dung thu)\b/],
    ["ai", /\b(ai|wrong|mistake|accurate|accuracy|hallucinat\w*|sai|chinh xac|noi bua|tra loi bay)\b/],
    ["how", /\b(how (does|do) (it|this) work|how it works|process|setup|set up|install|hoat dong|the nao|quy trinh|cai dat|lam sao)\b|⚙/],
    ["contact", /\b(contact|email|phone|number|reach|lien he|so dien thoai|sdt)\b/],
    ["thanks", /\b(thanks|thank you|thx|great|awesome|cool|ok|okay|cam on|cmon|tks|oke)\b/],
    ["greet", /^(hi|hey|hello|good (morning|afternoon|evening)|xin chao|chao|alo|hi shop|shop oi)\b/]
  ];
  function intentOf(t) {
    var s = norm(t);
    for (var i = 0; i < INTENTS.length; i++) if (INTENTS[i][1].test(s)) return INTENTS[i][0];
    return "fallback";
  }

  /* ---------- booking flow: tên → SĐT/email → giờ → xác nhận ---------- */
  var Q = {
    vi: {
      start: "Dạ, mình đặt <b>lịch tư vấn miễn phí 15 phút</b> nhé — chỉ 3 câu hỏi nhanh.\n\nAnh/chị cho em xin <b>tên</b> ạ?",
      badName: "Dạ em chưa rõ — anh/chị cho em xin tên để ghi lịch nhé?",
      contact: function (n) { return ["Rất vui được làm quen, " + esc(n) + "! 👋", "Anh/chị cho em xin <b>số điện thoại</b> (Zalo) hoặc <b>email</b> để liên hệ ạ?"]; },
      badContact: "Dạ hình như chưa đúng số điện thoại hoặc email. Anh/chị kiểm tra lại giúp em (ví dụ 0901 234 567 hoặc ten@gmail.com)?",
      time: "Dạ em ghi rồi. Anh/chị muốn em gọi lúc nào? Chọn bên dưới hoặc tự gõ giờ.",
      badTime: "Anh/chị tiện giờ nào ạ?",
      summary: function (b) { return "Em xác nhận lại nhé:\n\n<b>Tên:</b> " + esc(b.name) + "\n<b>Liên hệ:</b> " + esc(b.contact) + "\n<b>Giờ mong muốn:</b> " + esc(b.time) + "\n\nEm đặt lịch luôn nhé?"; },
      done: ["✅ Đặt lịch xong! Lịch hẹn vừa được thêm vào bảng <b>Lịch hẹn — Trực tiếp</b> bên dưới.", "Bản thật thì chủ quán nhận thông báo ngay lúc này, khách nhận tin xác nhận.\n\n<i>Đây là demo nên không có gì được gửi đi.</i>"],
      doneContact: function (h) { return " Muốn tư vấn thật, anh/chị nhắn " + h + "."; },
      nudge: "Anh/chị bấm <b>Xác nhận</b> để đặt, hoặc <b>Làm lại</b> để sửa thông tin nhé.",
      cancelled: "Dạ, em đã huỷ đặt lịch. Anh/chị cần hỏi gì thêm không?",
      scroll: "Em kéo xuống bảng tính cho anh/chị 👇 — dòng nháy xanh là lịch vừa đặt."
    },
    en: {
      start: "Great — let's book your <b>free 15-minute consult</b>. Just 3 quick questions.\n\nFirst, what's your <b>name</b>?",
      badName: "Sorry, I didn't get that — what name should I put the consult under?",
      contact: function (n) { return ["Nice to meet you, " + esc(n) + "! 👋", "What's the best <b>phone number</b> (Zalo/WhatsApp) or <b>email</b> to reach you?"]; },
      badContact: "Hmm, that doesn't look like a phone number or email. Could you double-check? (e.g. +84 901 234 567 or name@gmail.com)",
      time: "Got it. When's a good time for a quick call? Pick one below or type your own.",
      badTime: "What time works best for you?",
      summary: function (b) { return "Here's what I have:\n\n<b>Name:</b> " + esc(b.name) + "\n<b>Contact:</b> " + esc(b.contact) + "\n<b>Preferred time:</b> " + esc(b.time) + "\n\nShall I book it?"; },
      done: ["✅ You're booked! Your request was just added to the <b>bookings</b> sheet below.", "In a real setup, the owner gets an alert right now and you'd get a confirmation.\n\n<i>This is a demo, so nothing was actually sent.</i>"],
      doneContact: function (h) { return " For a real consult, message " + h + "."; },
      nudge: "Just tap <b>Confirm</b> to book, or <b>Start over</b> to change something.",
      cancelled: "No problem — booking cancelled. Anything else I can help with?",
      scroll: "Scrolling you down to it 👇 — the green-flashing row is the booking you just made."
    }
  };
  function cancelChip() { return [CH[lang].cancel]; }
  function askStep() {   // (re)ask the current booking question in the current language
    var q = Q[lang];
    if (state.mode === "name") bot([q.start], cancelChip());
    else if (state.mode === "contact") bot([q.contact(state.b.name.split(" ").pop())[1]], cancelChip());
    else if (state.mode === "time") bot([q.time], (TIMES[lang] || []).concat(cancelChip()));
    else if (state.mode === "confirm") bot([q.summary(state.b)], [CH[lang].confirm, CH[lang].redo, CH[lang].cancel]);
  }
  function startBooking(intro) {
    state.mode = "name"; state.b = {};
    var m = intro ? [intro] : [];
    m.push(Q[lang].start);
    bot(m, cancelChip());
  }
  function cleanName(t) {
    return t.replace(/^(hi|hey|hello|chào|chao|dạ|da|vâng)[,!.\s]*/i, "")
      .replace(/^(my name is|my name's|i am|i'm|im|it's|this is|name:?|tên (tôi|em|mình|anh|chị|con) là|tên là|tên|tôi là|em là|mình là|anh là|chị là|tôi tên|em tên|mình tên|anh tên|chị tên|ten (toi|em|minh) la|toi la|em la|minh la)\s*/i, "")
      .replace(/[.!]+$/, "").trim().slice(0, 60);
  }
  function title(n) { return n.split(/\s+/).map(function (w) { return w.charAt(0).toUpperCase() + w.slice(1); }).join(" "); }
  function flow(text) {
    var s = text.trim(), low = s.toLowerCase(), n = norm(s), q = Q[lang];
    if (/^❌/.test(s) || /^(cancel|stop|nevermind|never mind|quit)$/.test(n) || /^(huỷ|hủy)( bỏ| đặt lịch| lịch)?$/.test(low) || /^(thoi|bo qua|khong dat nua)$/.test(n)) {
      state.mode = "idle"; bot([q.cancelled], main()); return;
    }
    if (state.mode === "name") {
      var nm = cleanName(s);
      if (nm.length < 2 || /\d{3,}|@/.test(nm)) { bot([q.badName], cancelChip()); return; }
      state.b.name = title(nm); state.mode = "contact";
      var parts = state.b.name.split(" ");
      bot(q.contact(lang === "vi" ? parts[parts.length - 1] : parts[0]), cancelChip());
    } else if (state.mode === "contact") {
      var em = s.match(/[^\s@<>]+@[^\s@<>]+\.[a-z]{2,}/i);
      var digits = s.replace(/[^\d+]/g, "");
      var ph = /^(\+?84|0)\d{8,10}$/.test(digits) || /^\+\d{8,14}$/.test(digits);
      if (!em && !ph) { bot([q.badContact], cancelChip()); return; }
      state.b.contact = em ? em[0].toLowerCase() : s.replace(/[^\d+ .]/g, "").trim();
      state.mode = "time";
      bot([q.time], (TIMES[lang] || []).concat(cancelChip()));
    } else if (state.mode === "time") {
      if (s.length < 2) { bot([q.badTime], (TIMES[lang] || []).concat(cancelChip())); return; }
      state.b.time = s.slice(0, 60); state.mode = "confirm";
      bot([q.summary(state.b)], [CH[lang].confirm, CH[lang].redo, CH[lang].cancel]);
    } else if (state.mode === "confirm") {
      if (/✅/.test(s) || /\b(xac nhan|dong y|dung roi|dung|co|ok|oke|duoc|chot|dat di|confirm|yes|yep|yeah|sure|book it|correct)\b/.test(n) || /👍/.test(s)) {
        state.mode = "idle"; state.b.lg = lang.toUpperCase(); addBooking(state.b);
        var h = contactHTML(lang), done = q.done.slice();
        if (h) done[1] += q.doneContact(h);
        bot(done, [CH[lang].showSheet, CH[lang].price, CH[lang].how], "ok");
      } else if (/✏/.test(s) || /\b(lam lai|sua|doi|start over|edit|change|redo)\b/.test(n)) {
        startBooking();
      } else {
        bot([q.nudge], [CH[lang].confirm, CH[lang].redo, CH[lang].cancel]);
      }
    }
  }

  function setLang(lg, note) {
    if (lg === lang) return false;
    lang = lg; applyLangUI();
    if (note) addMsg(esc(note), "sys");
    return true;
  }

  function userSays(text) {
    if (busy) return;
    text = String(text).trim(); if (!text) return;
    addMsg(esc(text), "me"); input.value = "";
    // auto-detect language only outside the booking form (names/phone numbers are not language signals)
    if (state.mode === "idle") {
      var d = detect(text);
      if (d && d !== lang) setLang(d, d === "en" ? UI.vi.autoEn : UI.vi.autoVi);
    }
    if (state.mode !== "idle") { flow(text); return; }
    if (text === CH.vi.showSheet || text === CH.en.showSheet) {
      var sec = $("#sheet"); if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
      bot([Q[lang].scroll], main()); return;
    }
    var it = intentOf(text);
    if (it === "book") { startBooking(); return; }
    if (it === "human") { startBooking(R[lang].human()[0][0]); return; }
    var r = R[lang][it]();
    bot(r[0], r[1]);
  }

  // VI / EN toggle
  $$(".lang-tg button").forEach(function (b) {
    b.addEventListener("click", function () {
      if (busy) return;
      var lg = b.getAttribute("data-lang");
      if (!setLang(lg, lg === "en" ? UI.vi.toEn : UI.vi.toVi)) return;
      if (state.mode !== "idle") askStep();
      else bot([lg === "en" ? "Sure — I'll reply in English. What would you like to know?" : "Dạ, em sẽ trả lời bằng tiếng Việt. Anh/chị muốn hỏi gì ạ?"], main());
    });
  });

  form.addEventListener("submit", function (e) { e.preventDefault(); userSays(input.value); });
  $(".chat-reset").addEventListener("click", function () { if (busy) return; log.innerHTML = ""; state.mode = "idle"; var g = R[lang].greet(); bot(g[0], g[1]); });

  function openConsult() {
    $(".chat").scrollIntoView({ behavior: "smooth", block: "center" });
    if (busy) return;
    if (state.mode === "idle") { addMsg(esc(CH[lang].book), "me"); startBooking(); }
    setTimeout(function () { try { input.focus({ preventScroll: true }); } catch (e) {} }, 600);
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-consult]");
    if (b) { e.preventDefault(); openConsult(); }
  });

  applyLangUI();
  var g = R[lang].greet(); bot(g[0], g[1]);

  var fab = $(".fab");
  if ("IntersectionObserver" in window && fab) {
    var vis = {};
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) { vis[en.target.id || en.target.className] = en.isIntersecting; });
      fab.classList.toggle("show", !Object.keys(vis).some(function (k) { return vis[k]; }));
    });
    [$(".hero-copy .cta-row"), $(".chat"), $(".final")].forEach(function (el) { if (el) io.observe(el); });
  }
})();
