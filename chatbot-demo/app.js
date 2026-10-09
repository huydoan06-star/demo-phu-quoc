(function () {
  "use strict";
  var C = window.SITE_CONFIG || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var cur = C.currency || "$";
  var money = function (n) { return cur + Number(n).toLocaleString("en-US"); };
  var brand = C.brand || "Support";
  var note = C.pricingNote || "";
  var trial = C.trial || null;
  var trialLine = trial ? "Founding trial: first " + trial.spots + " businesses only — " + money(trial.setup) + " setup" : "";
  var plans = C.plans || [];
  var web = plans[0] || { setup: 299, monthly: 99, name: "Website Chatbot" };
  var addon = plans[1] || { name: "Facebook / WhatsApp Add-on" };
  var contact = C.contact || {};
  var times = C.consultTimes || ["Weekday morning", "Weekday afternoon", "Weekday evening"];

  /* ---------- static copy from config ---------- */
  $$("[data-brand]").forEach(function (el) { el.textContent = brand; });
  $$("[data-pricing-note]").forEach(function (el) { el.textContent = note; el.hidden = !note; });
  var tt = $("#trialTag"); if (tt && trial) { tt.textContent = trialLine + " (in exchange for a testimonial)"; tt.style.display = ""; }

  function contactHTML(light) {
    var parts = [];
    if (contact.email) parts.push('<a href="mailto:' + esc(contact.email) + '?subject=' + encodeURIComponent("Free consult — " + brand) + '">' + esc(contact.email) + "</a>");
    if (contact.telegram) parts.push('Telegram <a href="https://t.me/' + esc(contact.telegram) + '" target="_blank" rel="noopener">@' + esc(contact.telegram) + "</a>");
    return parts.join(" · ");
  }
  var cl = $("#contactLine");
  if (cl) { var h = contactHTML(); cl.innerHTML = h ? "Prefer to message directly? " + h : ""; }

  /* ---------- pricing cards ---------- */
  var plansEl = $("#plans");
  if (plansEl) plansEl.innerHTML = plans.map(function (p) {
    var priced = p.monthly != null;
    return '<article class="plan' + (p.featured ? " featured" : "") + '">' +
      (p.featured ? '<span class="badge">Most popular</span>' : "") +
      "<h3>" + esc(p.name) + '</h3><p class="blurb">' + esc(p.blurb || "") + "</p>" +
      (priced
        ? '<div class="price"><span class="big">' + money(p.monthly) + '</span><span class="per">/ month</span></div>' +
          '<p class="setup">+ <b>' + money(p.setup) + "</b> one-time setup</p>" +
          (trial && p.featured ? '<p class="setup"><b>' + esc(trialLine) + "</b> — in exchange for a testimonial/review.</p>" : "")
        : '<div class="price"><span class="big" style="font-size:32px">Custom quote</span></div><p class="setup">Priced per channel after a short call</p>') +
      "<ul>" + (p.features || []).map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>" +
      '<button class="btn ' + (p.featured ? "btn-pri" : "btn-ghost") + '" data-consult>Book a free consult</button>' +
      "</article>";
  }).join("");

  /* ---------- mock sheet ---------- */
  var KEY = "chatbotDemoBookings.v1";
  var rowsEl = $("#rows");
  var samples = [
    { t: "Sample", name: "Alex P. (sample)", email: "alex@example.com", time: "Weekday morning (9–12)", src: "Website" },
    { t: "Sample", name: "Sam R. (sample)", email: "sam@example.com", time: "Saturday morning", src: "Messenger" }
  ];
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } }
  function save(list) { try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) {} }
  function rowHTML(r, i, cls) {
    return '<tr class="' + cls + '"><td class="rn">' + (i + 2) + "</td><td>" + esc(r.t) + "</td><td>" + esc(r.name) + "</td><td>" + esc(r.email) + "</td><td>" + esc(r.time) + '</td><td><span class="src">' + esc(r.src) + "</span></td></tr>";
  }
  function renderSheet(flashLast) {
    var mine = load();
    var all = samples.map(function (r) { return [r, "sample"]; }).concat(mine.map(function (r, i) { return [r, flashLast && i === mine.length - 1 ? "new" : ""]; }));
    rowsEl.innerHTML = all.map(function (x, i) { return rowHTML(x[0], i, x[1]); }).join("");
  }
  function stamp() {
    var d = new Date();
    return d.toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" }) + " " + d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  }
  function addBooking(b) {
    var st = $("#sheetStatus");
    st.textContent = "● Saving…"; st.classList.add("busy");
    setTimeout(function () {
      var list = load(); list.push({ t: stamp(), name: b.name, email: b.email, time: b.time, src: "Website chat" }); save(list);
      renderSheet(true);
      st.textContent = "● Synced just now"; st.classList.remove("busy");
    }, 700);
  }
  renderSheet(false);
  $("#clearRows").addEventListener("click", function () { save([]); renderSheet(false); });

  /* ---------- chatbot ---------- */
  var log = $("#log"), chips = $("#chips"), form = $("#form"), input = $("#msg");
  var state = { mode: "idle", b: {} };
  var busy = false, queue = [];

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
  // bot replies: array of html strings, then chips
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
      var delay = Math.min(1300, 450 + text.replace(/<[^>]+>/g, "").length * 9);
      setTimeout(function () {
        t.remove(); addMsg(text, "bot", i === msgs.length - 1 ? extra : ""); i++; next();
      }, delay);
    })();
  }

  var MAIN = ["💲 Pricing", "📦 Packages", "⚙️ How it works", "📅 Book a free consult"];
  var AFTER = ["📅 Book a free consult", "⚙️ How it works", "📊 Google Sheets?"];

  function priceLine() {
    return "<b>" + esc(web.name) + "</b>: " + money(web.setup) + " one-time setup + <b>" + money(web.monthly) + "/month</b>.";
  }
  function noteTag() { return note ? '<span class="tag">' + esc(note) + "</span>\n" : ""; }
  function trialSentence() { return trial ? "\n\n<b>" + esc(trialLine) + "</b> (instead of " + money(web.setup) + "), in exchange for a short testimonial/review." : ""; }
  var R = {
    greet: function () {
      return [["Hi there! 👋 I'm the " + esc(brand) + " assistant.", "I'm a live example of the chatbot we build for small businesses — I answer pricing questions and take appointment requests 24/7.\n\nWhat would you like to know?"], MAIN];
    },
    pricing: function () {
      return [[noteTag() + priceLine() + trialSentence() + "\n\nThat covers setup, training it on your services and prices, the Google Sheets booking log, and monthly updates.",
        "Facebook Messenger and WhatsApp are an add-on — those are a custom quote depending on what you need."], ["📦 What's included?", "📅 Book a free consult", "📱 Facebook / WhatsApp"]];
    },
    packages: function () {
      return [[noteTag() + "There are two pieces:\n\n<b>1. " + esc(web.name) + "</b> — " + money(web.setup) + " setup + " + money(web.monthly) + "/mo. Bot on your website, answers FAQs & prices, takes bookings, logs them to Google Sheets, emails you each one.\n\n<b>2. " + esc(addon.name) + "</b> — custom quote. Same bot on your Facebook Page and WhatsApp Business.",
        "Most owners start with the website and add channels later."], ["⚙️ How it works", "📅 Book a free consult", "⏱️ How long to set up?"]];
    },
    included: function () {
      return [["Included in the website plan:\n• Bot trained on your services, prices, hours & policies\n• 24/7 appointment requests (name, contact, preferred time)\n• Every booking logged to your Google Sheet\n• Email alert for each new booking\n• Monthly script tweaks — just message us"], AFTER];
    },
    how: function () {
      return [["Here's how it works:\n\n<b>1.</b> 15-min call — we learn your services, prices and common questions.\n<b>2.</b> We build and train your bot (in your tone).\n<b>3.</b> We connect it to a Google Sheet you own.\n<b>4.</b> You add one snippet to your site — or we do it for you.",
        "After that, customers ask, the bot answers, and bookings show up in your sheet. You just confirm them."], ["⏱️ How long to set up?", "📊 Google Sheets?", "📅 Book a free consult"]];
    },
    sheets: function () {
      return [["Every booking the bot takes becomes a new row in your Google Sheet — time, name, contact, preferred time and where it came from (website, Messenger, WhatsApp).",
        "Want to see it? Book a demo consult with me and watch the <b>Live bookings</b> panel below update. 👇"], ["📅 Book a free consult", "💲 Pricing"]];
    },
    channels: function () {
      return [["Yes — the bot can live on:\n• <b>Your website</b> (most site builders and custom sites)\n• <b>Facebook Messenger</b> on your Page (add-on)\n• <b>WhatsApp Business</b> (add-on)\n\nSame answers and same booking sheet everywhere. Channel add-ons are a custom quote."], ["💲 Pricing", "📅 Book a free consult"]];
    },
    timeline: function () {
      return [["Usually about <b>a week</b> from our first call to going live — faster if you already have your prices and FAQs written down."], ["📅 Book a free consult", "💲 Pricing"]];
    },
    ai: function () {
      return [["Good question. Your bot sticks to answers <b>you approve</b> — prices, hours, policies. If a customer asks something outside that, it politely takes their contact info so you can follow up. No made-up answers about your business."], AFTER];
    },
    contract: function () {
      return [["The monthly plan is meant to be month-to-month. Exact terms get confirmed on your consult."], ["📅 Book a free consult", "💲 Pricing"]];
    },
    software: function () {
      return [["You can keep your current calendar or booking app. The bot captures the request and logs it; you confirm the exact slot the way you do today."], AFTER];
    },
    language: function () {
      return [["This demo is English-only, but your bot can be set up to answer in other languages, such as Spanish. Mention it on your consult."], ["📅 Book a free consult", "💲 Pricing"]];
    },
    contact: function () {
      var h = contactHTML();
      return [["The quickest way is to book a free consult right here — I'll collect your name, email and a good time." + (h ? "\n\nOr message directly: " + h : "")], ["📅 Book a free consult"]];
    },
    thanks: function () { return [["You're welcome! Anything else I can help with?"], MAIN]; },
    human: function () {
      return [["Of course — a real person can walk you through it. Let me grab a few details for a free consult."], null];
    },
    fallback: function () {
      return [["Hmm, I'm a demo with a fixed script, so I didn't catch that one. 🙂\nI can tell you about pricing, packages, how it works — or book you a free consult with a real person."], MAIN];
    }
  };

  var INTENTS = [
    ["book", /\b(book|consult|appointment|schedule|meeting|call me|demo call|sign ?up|get started|interested)\b|📅/],
    ["human", /\b(human|real person|agent|someone|talk to)\b/],
    ["included", /\b(included|include|what do i get|features?)\b/],
    ["timeline", /\b(how long|timeline|when can|how soon|how fast|weeks?|days?)\b|⏱/],
    ["sheets", /\b(google|sheets?|spreadsheet|excel|log|record|data)\b|📊/],
    ["channels", /\b(facebook|messenger|whatsapp|instagram|insta|fb|ig|wix|squarespace|wordpress|shopify|website|site|channels?)\b|📱/],
    ["pricing", /\b(trial|founding|offer|discount|deal|price|prices|pricing|cost|costs|how much|fee|fees|monthly|per month|expensive|cheap|budget|\$)|💲/],
    ["packages", /\b(package|packages|plan|plans|tier|options?|bundle)\b|📦/],
    ["how", /\b(how (does|do|it) ?(it|this|you)? ?work|how it works|process|setup|set up|install|works?)\b|⚙/],
    ["ai", /\b(ai|wrong|mistake|accurate|hallucinat|robot|bot say)\b/],
    ["contract", /\b(contract|cancel|commitment|refund|lock)\b/],
    ["software", /\b(calendly|square|vagaro|booking software|calendar|acuity|mindbody)\b/],
    ["language", /\b(spanish|espa[nñ]ol|language|languages|vietnamese|chinese)\b/],
    ["contact", /\b(contact|email|phone|number|telegram|reach)\b/],
    ["thanks", /\b(thanks|thank you|thx|ty|great|awesome|cool|ok|okay)\b/],
    ["greet", /^(hi|hey|hello|yo|good (morning|afternoon|evening)|hiya|sup)\b/]
  ];
  function intentOf(t) {
    var s = t.toLowerCase();
    for (var i = 0; i < INTENTS.length; i++) if (INTENTS[i][1].test(s)) return INTENTS[i][0];
    return "fallback";
  }

  /* booking flow */
  function startBooking(intro) {
    state.mode = "name"; state.b = {};
    var m = [];
    if (intro) m.push(intro);
    m.push("Great — let's book your <b>free 15-minute consult</b>. It takes 3 quick questions.\n\nFirst, what's your name?");
    bot(m, ["Cancel"]);
  }
  function cleanName(t) {
    return t.replace(/^(hi|hey|hello)[,!.\s]*/i, "").replace(/^(my name is|my name's|i am|i'm|im|it's|this is|name:?)\s*/i, "").replace(/[.!]+$/, "").trim().slice(0, 60);
  }
  function flow(text) {
    var s = text.trim(), low = s.toLowerCase();
    if (/^(cancel|stop|nevermind|never mind|quit|exit)$/.test(low)) {
      state.mode = "idle"; bot(["No problem — booking cancelled. Anything else I can help with?"], MAIN); return;
    }
    if (state.mode === "name") {
      var n = cleanName(s);
      if (n.length < 2 || /\d{3,}|@/.test(n)) { bot(["Sorry, I didn't get that — what name should we put the consult under?"], ["Cancel"]); return; }
      n = n.replace(/\b\w/g, function (c) { return c.toUpperCase(); });
      state.b.name = n; state.mode = "email";
      bot(["Nice to meet you, " + esc(n.split(" ")[0]) + "! 👋", "What's the best <b>email</b> to send the consult details to?"], ["Cancel"]);
    } else if (state.mode === "email") {
      var m = s.match(/[^\s@<>]+@[^\s@<>]+\.[a-z]{2,}/i);
      if (!m) { bot(["Hmm, that doesn't look like an email address. Could you double-check it? (e.g. name@yourbusiness.com)"], ["Cancel"]); return; }
      state.b.email = m[0].toLowerCase(); state.mode = "time";
      bot(["Got it. When's a good time for a quick call? Pick one below or type your own (" + esc(C.timezoneLabel || "your local time") + ")."], times.concat(["Cancel"]));
    } else if (state.mode === "time") {
      if (s.length < 2) { bot(["What time works best for you?"], times.concat(["Cancel"])); return; }
      state.b.time = s.slice(0, 60); state.mode = "confirm";
      bot(["Here's what I have:\n\n<b>Name:</b> " + esc(state.b.name) + "\n<b>Email:</b> " + esc(state.b.email) + "\n<b>Preferred time:</b> " + esc(state.b.time) + "\n\nShall I book it?"], ["✅ Confirm", "✏️ Start over", "Cancel"]);
    } else if (state.mode === "confirm") {
      if (/confirm|yes|yep|yeah|sure|ok|book it|correct|right|👍|✅/.test(low)) {
        state.mode = "idle"; addBooking(state.b);
        var h = contactHTML();
        bot(["✅ You're booked! Your request was just added to the <b>Live bookings</b> sheet below.",
          "In a real setup, the business owner gets an email alert right now, and you'd get a confirmation.\n\n<i>This is a demo, so nothing was actually sent.</i>" + (h ? " For a real consult, message " + h + "." : "")],
          ["📊 Show me the sheet", "💲 Pricing", "⚙️ How it works"], "ok");
      } else if (/start over|edit|change|redo|✏/.test(low)) {
        startBooking();
      } else {
        bot(["Just tap <b>Confirm</b> to book, or <b>Start over</b> to change something."], ["✅ Confirm", "✏️ Start over", "Cancel"]);
      }
    }
  }

  function userSays(text) {
    if (busy) return;
    text = String(text).trim(); if (!text) return;
    addMsg(esc(text), "me"); input.value = "";
    if (state.mode !== "idle") { flow(text); return; }
    if (/show me the sheet/i.test(text)) {
      var sec = $("#sheet"); if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
      bot(["Scrolling you down to it 👇 — the green-flashing row is the booking you just made."], MAIN); return;
    }
    var it = intentOf(text);
    if (it === "book") { startBooking(); return; }
    if (it === "human") { var hr = R.human(); startBooking(hr[0][0]); return; }
    var r = R[it]();
    bot(r[0], r[1]);
  }

  form.addEventListener("submit", function (e) { e.preventDefault(); userSays(input.value); });
  $(".chat-reset").addEventListener("click", function () { if (busy) return; log.innerHTML = ""; state.mode = "idle"; var g = R.greet(); bot(g[0], g[1]); });

  // all "Book a free consult" buttons -> open booking flow in the bot
  function openConsult() {
    var chat = $(".chat");
    chat.scrollIntoView({ behavior: "smooth", block: "center" });
    if (busy) return;
    if (state.mode === "idle") { addMsg("📅 Book a free consult", "me"); startBooking(); }
    setTimeout(function () { try { input.focus({ preventScroll: true }); } catch (e) {} }, 600);
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-consult]");
    if (b) { e.preventDefault(); openConsult(); }
  });

  // greet on load
  var g = R.greet(); bot(g[0], g[1]);

  // mobile sticky CTA: show when neither the hero nor the chat nor the final CTA is visible
  var fab = $(".fab");
  if ("IntersectionObserver" in window && fab) {
    var vis = {};
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) { vis[en.target.id || en.target.className] = en.isIntersecting; });
      var any = Object.keys(vis).some(function (k) { return vis[k]; });
      fab.classList.toggle("show", !any);
    });
    [$(".hero-copy .cta-row"), $(".chat"), $(".final")].forEach(function (el) { if (el) io.observe(el); });
  }
})();
